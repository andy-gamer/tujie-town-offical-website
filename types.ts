export interface HiddenItemData {
  id: string;
  name: string;
  hint: string;
  icon: string; // FontAwesome class
  top: string; // CSS top value
  left: string; // CSS left value
  section: 'hero' | 'town' | 'gameplay';
}

export type SectionType = 'hero' | 'town' | 'gameplay' | 'minigame' | 'gallery';

export interface GameState {
  foundItems: string[];
  addItem: (id: string) => void;
}