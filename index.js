/*Créez une fonction qui prend un tableau de nombres et renvoie les nombres minimum et maximum, dans cet ordre. */
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

/*Créez une fonction qui prend un tableau d' entiers et de chaînes
 non négatifs et renvoie un nouveau tableau sans les chaînes. */
function filterArray(arr) {
	let arrayNumber = [];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === "number") {
			arrayNumber.push(arr[i]);
		}
	}
	return arrayNumber;
}

/*Créez une fonction qui renvoie truequand num1est égal à num2; sinon retour false. */
function isSameNum(num1, num2) {
	return (num1 === num2 ? true : false);
}

/*Créez une fonction qui renvoie le nombre de truevaleurs qu'il y a dans un tableau */
function countTrue(arr) {
	let result = 0;
	for (let i = 0; i < arr.length; i++){
		if(arr[i] === true){
			result += true;
		}
	}
	return result;
}

/*Prenez un tableau d'entiers (positifs ou négatifs ou les deux) 
et renvoyez la somme de la valeur absolue de chaque élément. */
function getAbsSum(arr) {
	let s = 0;
	for(let i = 0; i < arr.length; i++)
	{
		s = s + Math.abs(arr[i]);
	}
	return s;
}

/* Supposons que vous ayez une liste d'étudiants 
invités et leur pays d'origine, stockés sous forme 
de paires clé-valeur dans un objet. 
Écrivez une fonction qui prend un nom et renvoie une balise de nom , qui devrait lire :
"Hi! I'm [name], and I'm from [country]."
Si le nom n'est pas dans l'objet, retournez :
"Hi! I'm a guest."
*/
const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}
function greeting(name) {
	if(GUEST_LIST.hasOwnProperty(name)) {
		return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`;
	} else {
		return "Hi! I'm a guest."
	}
}

/*Étant donné le nombre de pages supplémentaires que chaque couleur d'encre 
peut imprimer, imprimez le nombre maximal de pages que
 l'imprimante peut imprimer avant que l'une des couleurs ne s'épuise. */
function inkLevels(inks) {
	return Math.min(...(Object.values(inks)));
}

/**Créez la fonction qui prend un tableau avec des objets et renvoie la somme des budgets des personnes. */
function getBudgets(arr) {
	let budgetNumber = 0;
	for (let i = 0; i < arr.length; i++){
		 budgetNumber += arr[i].budget;
	}
	return budgetNumber;
}

/**Écrivez une fonction qui convertit un objet en un tableau de clés et de valeurs. */
function objectToArray(obj) {
	let tab = Object.entries(obj);
	return tab;
}