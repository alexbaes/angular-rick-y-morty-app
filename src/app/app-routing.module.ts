import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './components/character-details/character.component';
import { CharactersComponent } from './components/characters/characters.component';

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'character-details/:id', component: CharacterDetailsComponent },
  { path: '**', component: CharactersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
