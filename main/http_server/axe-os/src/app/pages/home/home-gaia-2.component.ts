import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HomeGaiaComponent } from './home-gaia.component';

/** Gaia dashboard with the blue BCH Solo Pool palette. */
@Component({
  selector: 'app-home-gaia-2',
  templateUrl: './home-gaia-2.component.html',
  styleUrls: ['./home.component.scss', './home-gaia-2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeGaia2Component extends HomeGaiaComponent {
  protected override get asicTemperatureColor(): string { return '#39C5CF'; }
  protected override get vrTemperatureColor(): string { return '#3FBF9B'; }
  protected override get fillTemperatureChartAreas(): boolean { return false; }

  protected override get hashrateColor(): string {
    return '#398BD0';
  }
}
