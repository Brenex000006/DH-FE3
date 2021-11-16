import Video from '../Video';

import './style.scss';

const Galeria = () => {
  return (
    <section id="galeria">
      
      <h3 className="h3">PLAYLIST :</h3>

      <div className="grid">
        <Video url="https://youtube.com/embed/xrRgZFt5_bw" title="羽生まゐご「オノマトペ」feat.りりあ。" />

        <Video url="https://youtube.com/embed/BxqYUbNR-c0" title="サカナクション / 忘れられないの　-Music Video-" />

        <Video url="https://youtube.com/embed/Cgy7IbVRvek" title="Drakengard 3 - The Last Song (Romaji Lyrics)" />

        <Video url="https://youtube.com/embed/semcUTqGGss" title="NieR Unreleased OST - Ashes of Dreams / New ( Full English Ver.)" />
      </div>
    </section>
  )
}

export default Galeria;