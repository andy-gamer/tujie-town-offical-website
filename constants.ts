
import { HiddenItemData } from './types';

// --- Local Assets Configuration ---
export const ASSETS = {
  // Core Art
  heroBg: './assets/hero-main.jpg',
  townImage: './assets/town-teahouse.jpg',
  character: './assets/character.jpg',
  gameplayExplore: './assets/gameplay-explore.jpg',
  gameplaySight: './assets/gameplay-sight.jpg',
  gameplaySurvival: './assets/gameplay-survival.jpg',
  monsterSketch: './assets/monster-sketch.png',
  
  // Texture & Effects (Seamless preferred)
  texturePaper: './assets/texture-paper.png',
  textureWood: './assets/texture-wood.png',
  textureCork: './assets/texture-cork.png',
  fog1: './assets/fog1.png',
  fog2: './assets/fog2.png',
};

export const ITEMS: HiddenItemData[] = [
  { id: 'item1', name: '殘破布偶', hint: '藏在陰影處的玩偶...', icon: 'fa-child-reaching', top: '75%', left: '20%', section: 'hero' },
  { id: 'item2', name: '兒童票根', hint: '遺落在茶行桌上的車票...', icon: 'fa-ticket', top: '55%', left: '65%', section: 'town' },
  { id: 'item3', name: '相片碎片', hint: '被遺忘的記憶碎片...', icon: 'fa-image', top: '30%', left: '50%', section: 'gameplay' }
];
