import {  FormControl } from '@angular/forms'

export function restrictedWords(words) {
        return (control: FormControl): { [key: string]: any } => { //fat arrow from ES6

            if (!words) return null

            const invalidWords = words
                .map((w) => control.value.includes(w) ? w : null)
                .filter((w) => w != null)

            return invalidWords && invalidWords.length > 0
                ? { restrictedWords: invalidWords.join(', ') }
                : null

        }
    }
