export interface General {
  id: number;
  avatar: string;
  title: string;
  subtitle: string;
  text: string;
  network: Network[];
}

type Network = {
  icon: string;
  text: string;
  link: string;
};
