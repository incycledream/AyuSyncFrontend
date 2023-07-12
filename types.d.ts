interface AyuDevice {
  name: string;
  identifier: string;
  ayuUserId: string;
}

interface AyuUser {
  id: string;
  accessToken: string;
  mvpUntil: ?string;
  devices: AyuDevice[];
}
