import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HomeGaiaComponent } from './home-gaia.component';

/** Gaia dashboard with the blue BCH Solo Pool palette. */
@Component({
  selector: 'app-home-gaia-blue',
  templateUrl: './home-gaia.component.html',
  styleUrls: ['./home.component.scss', './home-gaia-blue.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeGaiaBlueComponent extends HomeGaiaComponent {
  protected override get hashrateColor(): string {
    return '#398BD0';
  }
}
