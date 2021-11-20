import { MongoClient } from 'mongodb';
import FeedRepository, { Feed } from './repositories/FeedRepository';
import SupporterRepository, { Supporter } from './repositories/SupporterRepository';
import PatronRepository, { Patron } from './repositories/PatronRepository';
import ProfileRepository from './repositories/ProfileRepository';

export interface ModelExports {
  mongoDbClient: MongoClient;
  Feed: FeedRepository;
  Supporter: SupporterRepository;
  Patron: PatronRepository;
  Profile: ProfileRepository;
}

async function connect(uri: string) {
  const client = await MongoClient.connect(uri);
  const db = client.db();

  const models: ModelExports = {
    mongoDbClient: client,
    Feed: FeedRepository.getRepository(db),
    Supporter: SupporterRepository.getRepository(db),
    Patron: PatronRepository.getRepository(db),
    Profile: ProfileRepository.getRepository(db),
  };

  return models;
}

export default connect;
export {  
  Feed,
  FeedRepository,
  SupporterRepository,
  Supporter,
  Patron,
  PatronRepository,
  ProfileRepository,
};
