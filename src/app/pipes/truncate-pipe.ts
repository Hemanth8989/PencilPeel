import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 100, completeWords = true, ellipsis = '...'): string {
    if (!value) return '';
    
    if (value.length <= limit) return value;
    
    if (completeWords) {
      // Find the last space within the limit to avoid cutting words
      let truncatedText = value.substr(0, limit);
      let lastSpace = truncatedText.lastIndexOf(' ');
      
      // If we found a space and it's not too far from the limit
      if (lastSpace > limit * 0.7) {
        truncatedText = truncatedText.substr(0, lastSpace);
      }
      
      return truncatedText + ellipsis;
    } else {
      // Simple character truncation
      return value.substr(0, limit) + ellipsis;
    }
  }
}
