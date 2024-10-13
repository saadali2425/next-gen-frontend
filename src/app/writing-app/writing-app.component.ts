// writing-app.component.ts
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { WordLookupService } from '../service/word-lookup.service';

@Component({
    selector: 'app-writing-app',
    templateUrl: './writing-app.component.html',
    styleUrls: ['./writing-app.component.scss']
})
export class WritingAppComponent implements OnInit {
    editorContent: string = '';
    projects: any[] = []; 
    wordInfo: any;
    projectTitle = '';
    extractedInfo: any;

    constructor(private projectService: ProjectService, private wordLookupService: WordLookupService) {}

    ngOnInit(): void {
        this.loadProjects();
    }

    loadProjects() {
        this.projectService.loadProjects().subscribe(
          (data) => {
            this.projects = data;
          },
          (error) => {
            console.error('Error loading projects:', error);
          }
        );
      }

      saveProject() {
        const project = {
          title: this.projectTitle,
          description: this.editorContent,
        };
    
        this.projectService.saveProject(project).subscribe(
          (data) => {
            console.log('Project saved:', data);
            this.loadProjects(); 
            this.editorContent = '';
          },
          (error) => {
            console.error('Error saving project:', error);
          }
        );
      }

   
      onWordClick(event: MouseEvent) {
        const selectedText = window.getSelection()?.toString();
        if (selectedText) {
          this.lookupWord(selectedText);
        }
      }
    
      lookupWord(word: string) {
        this.wordLookupService.lookupWord(word).subscribe(
          (data) => {
            this.wordInfo = data;
            this.extractWordInfo(this.wordInfo);
          },
          (error) => {
            console.error('Error fetching word info:', error);
          }
        );
      }
    
      extractWordInfo(wordData: any) {
        if (wordData && wordData.length > 0) {
          const wordDetails = wordData[0]; 
          this.extractedInfo = {
            word: wordDetails.word,
            phonetic: wordDetails.phonetic,
            meanings: wordDetails.meanings.map((meaning: any) => ({
              partOfSpeech: meaning.partOfSpeech,
              definitions: meaning.definitions.map((def: any) => ({
                definition: def.definition,
                examples: def.example || 'No example provided',
                synonyms: def.synonyms.join(', ') || 'No synonyms',
                antonyms: def.antonyms.join(', ') || 'No antonyms'
              }))
            }))
          };
        }
      }
}
