import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'findLanguageFromKey'})
export class FindLanguageFromKeyPipe implements PipeTransform {
    private languages: any = {
        'zh-cn': { name: '中文（简体）' },
        'zh-tw': { name: '繁體中文' },
        'en': { name: 'English' },
        'it': { name: 'Italiano' },
        'ja': { name: '日本語' },
        'ko': { name: '한국어' },
        'pt-br': { name: 'Português (Brasil)' },
        'pt-pt': { name: 'Português' },
        'ro': { name: 'Română' },
        'ru': { name: 'Русский' },
        'es': { name: 'Español' }
        // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
    };
    transform(lang: string): string {
        return this.languages[lang].name;
    }
}
