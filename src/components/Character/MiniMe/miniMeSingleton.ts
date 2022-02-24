import { MiniMe } from "./miniMe";

export default class miniMeSingleton {
  private static instance: MiniMe | null = null;

  private constructor() {}

  public static getMiniMe = () => {
    if (!this.instance) {
      this.instance = new MiniMe();
    }

    return this.instance;
  };
}
