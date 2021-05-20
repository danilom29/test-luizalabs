import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoaderFeedbackService } from '../loader-feedback.service';

@Component({
  selector: 'vitrines-loader-feedback',
  templateUrl: './loader-feedback.component.html',
  styleUrls: ['./loader-feedback.component.scss'],
})
export class LoaderFeedbackComponent implements OnInit, AfterViewInit, AfterViewChecked {
  isLoading: boolean;
  constructor(private service: LoaderFeedbackService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.service.isLoading.subscribe((flag) => {
      this.isLoading = flag;
    });
  }
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }
  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }
}
