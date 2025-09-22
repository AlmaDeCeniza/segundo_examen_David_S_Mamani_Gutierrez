import { Component } from '@angular/core';
import { RouterLink,RouterOutlet} from '@angular/router';// revisar importaciones RouterLink

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
