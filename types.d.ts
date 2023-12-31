interface AyuDevice {
  name: string;
  identifier: string;
  ayuUserId: string;
  isConnected: boolean;
}

interface AyuUser {
  id: string;
  accessToken: string;
  isMVP: boolean;
  devices: AyuDevice[];
}
