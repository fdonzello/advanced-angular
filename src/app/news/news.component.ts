import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, timer } from 'rxjs';
import { debounceTime, distinctUntilChanged, mapTo, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  search = new FormControl('');

  constructor() { }

  ngOnInit() {
    this.search.valueChanges.pipe(
      debounceTime(500),

      distinctUntilChanged(),

      mergeMap((query) => timer(5000).pipe(mapTo({ query })))

    ).subscribe(console.log)
  }

}
