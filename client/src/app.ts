import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {Items} from './items/items.component';
import {Widgets} from "./widgets/widgets";

@Component({
  selector: 'my-app',
  template: require('./app.html'),
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/items', component: Items},
  {path: '/widgets', component: Widgets}
])
export class App {
  links = {
    items: ['/items'],
    widgets: ['/widgets']
  }
}
