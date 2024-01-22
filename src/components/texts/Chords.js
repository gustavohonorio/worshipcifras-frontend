import React from 'react';

const styles = {
  Chords: {
    color: '#ddd',
    fontSize: '20px',
    fontWeight: 500,
    fontFamily: 'Poppins',
    lineHeight: '1.5',
    marginTop: '0px',
    marginLeft: '15px',
  },
  Detail: {
    color: '#7f7f7f',
    fontSize: '14px',
    fontWeight: 500,
    fontFamily: 'Poppins',
    lineHeight: '1.5',
    marginTop: '0px',
    marginLeft: '15px',
  },
};

const defaultProps = {
    text: `
[Ponte]

D9
Toda terra entoará
Em7/B
Meu ser, meus ossos entoarão
G          D9
Grande é o Senhor

[Refrão]

G                       Bm7
Com Teu fôlego dentro em nós
A4
Derramamos louvor, derramamos
louvor
G                       Bm7
Com Teu fôlego dentro em nós
A4                   D9
Derramamos louvor, somente a Ti`,

    compositor: 'Compositor(es): Nívea Soares, Carlito Gomes',
    release: 'Lançamento: 2022',
    contribuidor: 'Contribuidor(es): Flavio Silva, Silvio Paz',
};
  

const Text = (props) => {
  return (
    <>
        <div style={styles.Chords}>
          <pre>
            <p>{props.text ?? defaultProps.text}</p>
          </pre>
        </div>
        <div style={styles.Detail}>
          <p>{props.text ?? defaultProps.compositor}</p>
        </div>
        <div style={styles.Detail}>
          <p>{props.text ?? defaultProps.release}</p>
        </div>
        <div style={styles.Detail}>
          <p>{props.text ?? defaultProps.contribuidor}</p>
        </div>
    </>
  );
};

export default Text;