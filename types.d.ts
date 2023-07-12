interface AyuDevice {
  name: string;
  identifier: string;
  ayuUserId: string;
}

interface AyuUser {
  id: string;
  accessToken: string;
  isMVP: boolean;
  devices: AyuDevice[];
}
