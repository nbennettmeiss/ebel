
export interface Watch {
  id: string;
  name: string;
  collection: string;
  price: string;
  image: string;
  description: string;
  specs: {
    case: string;
    movement: string;
    waterResistance: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
