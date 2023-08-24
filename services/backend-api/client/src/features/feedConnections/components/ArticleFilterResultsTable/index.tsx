import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface Props {
  displayPropertyName: string;
  articles: Array<{
    id: string;
    propertyValue: string;
    passedFilters?: boolean;
  }>;
}

export const ArticleFilterResultsTable = ({ articles, displayPropertyName }: Props) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Box position="relative" border="solid 1px" borderColor="gray.600" borderRadius="md">
        <Box maxHeight="sm" overflow="auto">
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>
                    {t(
                      "features.feedConnections.components" +
                        ".articleFilterResultsTable.columnHeaderPassedFilters"
                    )}
                  </Th>
                  <Th width="100%">{displayPropertyName}</Th>
                </Tr>
              </Thead>
              <Tbody>
                {articles.map(({ passedFilters, propertyValue, id }) => {
                  let valueColor: string | undefined;

                  if (passedFilters === true) {
                    valueColor = "rgba(23, 99, 27, 0.5)";
                  } else if (passedFilters === false) {
                    valueColor = "rgba(99, 23, 27, 0.5)";
                  }

                  return (
                    <Tr key={id} bg={valueColor}>
                      <Td>
                        {passedFilters === true && (
                          <CheckIcon aria-label="passed" color="green.500" />
                        )}
                        {passedFilters === false && (
                          <CloseIcon aria-label="blocked" color="red.500" />
                        )}
                        {passedFilters === undefined && <span>?</span>}
                      </Td>
                      <Td>{propertyValue}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};
