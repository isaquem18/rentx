import GasolineSvg from '../assets/gasoline.svg';
import EnergySvg from '../assets/energy.svg';
import HybridSvg from '../assets/hybrid.svg';

export function getAccessoryIcon(item: string) {
  if (item.toUpperCase().includes('GASOLIN')) {
    return GasolineSvg;
  } else if (item.toUpperCase().includes('ELECTRIC')) {
    return EnergySvg;
  } else {
    return HybridSvg;
  }

  
}