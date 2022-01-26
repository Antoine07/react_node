# 03 sujet Challenge Calculatrice

Vous allez faire une petite calculatrice les notions du cours useState, useEffect, ...

Oragnisez l'application comme suit dans un fichier unique.

```text
index.html
```

Créez un champ de saisi fictif et 10 boutons de 0 à 9 pour afficher dans la partie "saisie" le nombre tapé. Créez les trois boutons suivants :

1. Un bouton + pour effectuer l'addition.

2. Un bouton X pour faire la multiplication.

3. Un bouton Reset pour effacer le résultat.

Implémentez également les boutons proposés dans le Wireframe ci-dessous.

```text

Resultat : 17

Num1 : [2]  Num2 : [15] <-- champ texte p

[+] <-- Additionner 
[*] <-- Multiplier 
[Reset]
```

Indications pour récupérez la valeur d'un champ texte dans le rendu, créez le state **number** avec sa fonction de mise à jour setNumber

```js
<p>
  <input
    type="text"
    name="number"
    value={number}
    onChange={(e) => setNumber(e.target.value)}
  />
</p>
```

Vous pouvez vous aidez du code suivant :

```js
const Calculator = (props) => {
  const [number, setNumber] = React.useState("");

  return (
    <div>
      <p>Number : {number}</p>
      <p>
        <input
          type="text"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </p>
    </div>
  );
};

ReactDOM.render(<Calculator />, document.getElementById("root"));
```
