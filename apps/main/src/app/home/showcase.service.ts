import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export class Case {
  /**
   * Card title.
   */
  title: string;
  /**
   * Card sub-title.
   */
  subTitle: string;
  /**
   * Card body image source.
   */
  screenShotSource: string;
  /**
   * Card header image.
   */
  avatarSource: string;
  /**
   * Case status.
   */
  isDone: boolean;
  constructor(
    title: string,
    avatar: string,
    subTitle = 'Not real one',
    screenshot = '/assets/default-screenshot.jpg',
    done = !environment.production
  ) {
    this.title = title;
    this.subTitle = subTitle;
    this.screenShotSource = screenshot;
    this.avatarSource = avatar;
    this.isDone = done;
  }
}

@Injectable()
export class ShowcaseService {
  private avatarsPath = '/assets/avatars/';
  private showcases: Case[] = [
    new Case('Spotify', `${this.avatarsPath}/spotify.svg`),
  ];
  constructor() {}
  getShowcases(): Case[] {
    return this.showcases;
  }
}
