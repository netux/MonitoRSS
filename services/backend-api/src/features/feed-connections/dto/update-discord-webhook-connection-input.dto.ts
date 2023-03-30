import { Type } from "class-transformer";
import {
  IsArray,
  IsIn,
  IsObject,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
} from "class-validator";
import { DiscordEmbed } from "../../../common";
import { FeedConnectionDisabledCode } from "../../feeds/constants";

class Webhook {
  @IsString()
  id: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  iconUrl?: string;
}

class FiltersDto {
  @IsObject()
  expression: Record<string, unknown>;
}

class SplitOptions {
  @IsString()
  @IsOptional()
  appendChar?: string;

  @IsString()
  @IsOptional()
  prependChar?: string;

  @IsString()
  @IsOptional()
  splitChar?: string;
}

export class UpdateDiscordWebhookConnectionInputDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsObject()
  @ValidateNested()
  @IsOptional()
  @Type(() => Webhook)
  webhook?: Webhook;

  @IsString()
  @IsOptional()
  content?: string;

  @IsObject()
  @IsOptional()
  @Type(() => FiltersDto)
  @ValidateNested({ each: true })
  filters?: FiltersDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DiscordEmbed)
  @IsOptional()
  embeds?: DiscordEmbed[];

  @IsIn([FeedConnectionDisabledCode.Manual, null])
  @IsOptional()
  disabledCode?: FeedConnectionDisabledCode.Manual | null;

  @IsOptional()
  @Type(() => SplitOptions)
  @ValidateNested()
  @IsObject()
  @ValidateIf((v) => v !== null)
  splitOptions?: SplitOptions | null;
}
