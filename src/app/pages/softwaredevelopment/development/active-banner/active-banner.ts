import { Component, Input } from '@angular/core';
import { BannerSectionWithList } from '../../../../models/banner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-active-banner',
  imports: [CommonModule],
  templateUrl: './active-banner.html',
  styleUrl: './active-banner.scss'
})
export class ActiveBanner {
  @Input() BANNERLIST: BannerSectionWithList[] = [];

  activeIndex = 0;
  intervalMs = 6000;
  private timer: any;

  get activeSection(): BannerSectionWithList {
    return this.BANNERLIST[this.activeIndex];
  }

  ngOnInit(): void {
    this.startAutoRotate();
  }

  ngOnDestroy(): void {
    this.stopAutoRotate();
  }

  private startAutoRotate(): void {
    this.stopAutoRotate();
    this.timer = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.BANNERLIST.length;
    }, this.intervalMs);
  }

  private stopAutoRotate(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}
