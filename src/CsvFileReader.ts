import fs from 'fs';

export abstract class CsvFileReader<T> {   // the "<T>" is a "generic" decleration
  data: T[] = [];

  constructor(public filename: string) { }

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    }).split('\n').map((row: string): string[] => row.split(',')).map(this.mapRow);
  }
}