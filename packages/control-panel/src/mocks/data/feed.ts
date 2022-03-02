import { Feed } from '../../features/feed';

const mockFeeds: Feed[] = [{
  id: '1',
  title: 'New York Times',
  url: 'https://www.feed1.com',
  channel: '#general',
  status: 'failed',
  embeds: [],
  text: 'Feed Text Here',
  createdAt: new Date().toISOString(),
  refreshRateSeconds: 60,
  checkTitles: false,
  checkDates: false,
  directSubscribers: true,
  disabled: '',
  formatTables: false,
  imgLinksExistence: false,
  imgPreviews: false,
}];

export default mockFeeds;
