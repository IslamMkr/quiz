import { Question } from "../types/question"

export const reactQuestions: Question[] = [
	{
		question: "Qu'est-ce que React ?",
		options: [
			"Une bibliothèque JavaScript pour construire des interfaces utilisateurs",
			"Un framework complet pour les applications web",
			"Un moteur de base de données",
			"Un langage de programmation",
		],
		answer: "Une bibliothèque JavaScript pour construire des interfaces utilisateurs",
		difficulty: "easy",
	},
	{
		question: "Quelle méthode permet de rendre un composant React ?",
		options: ["render()", "display()", "draw()", "show()"],
		answer: "render()",
		difficulty: "easy",
	},
	{
		question: "Qu'est-ce que JSX dans React ?",
		options: [
			"Un langage de programmation spécifique à React",
			"Une extension syntaxique pour JavaScript qui permet d'écrire des éléments HTML dans du JavaScript",
			"Un outil de gestion de l'état",
			"Un moteur de rendu React",
		],
		answer: "Une extension syntaxique pour JavaScript qui permet d'écrire des éléments HTML dans du JavaScript",
		difficulty: "easy",
	},
	{
		question: "Comment pouvez-vous accéder aux props dans un composant fonctionnel ?",
		options: [
			"Par la méthode this.props",
			"Par le paramètre du composant",
			"Par le hook useProps()",
			"Il n'est pas possible d'y accéder",
		],
		answer: "Par le paramètre du composant",
		difficulty: "easy",
	},
	{
		question: "Quel est le rôle du hook useEffect() dans un composant React ?",
		options: [
			"Effectuer des actions après le rendu du composant",
			"Mettre à jour l'interface utilisateur immédiatement",
			"Gérer les entrées utilisateur",
			"Gérer l'état local du composant",
		],
		answer: "Effectuer des actions après le rendu du composant",
		difficulty: "easy",
	},
	{
		question: "Comment appelle-t-on la fonction permettant de créer un état local dans un composant fonctionnel ?",
		options: ["useState()", "setState()", "createState()", "useEffect()"],
		answer: "useState()",
		difficulty: "easy",
	},
	{
		question: "Qu'est-ce que React.memo ?",
		options: [
			"Optimiser les performances en mémorisant les composants déjà rendus",
			"Éviter les erreurs lors du rendu des composants",
			"Réduire la taille des fichiers JavaScript",
			"Améliorer l'accessibilité des composants",
		],
		answer: "Optimiser les performances en mémorisant les composants déjà rendus",
		difficulty: "easy",
	},
	{
		question: "Qu'est-ce qu'un Hook dans React ?",
		options: [
			"Une fonction qui permet de manipuler le DOM",
			"Une fonction qui permet de gérer l'état et les effets secondaires dans les composants fonctionnels",
			"Un composant visuel réutilisable",
			"Une fonctionnalité pour améliorer les performances",
		],
		answer: "Une fonction qui permet de gérer l'état et les effets secondaires dans les composants fonctionnels",
		difficulty: "medium",
	},
	{
		question: "Qu'est-ce que le Virtual DOM ?",
		options: [
			"Un modèle de données utilisé par React pour améliorer les performances du rendu",
			"Un composant React qui optimise les interactions avec le DOM",
			"Une bibliothèque JavaScript pour manipuler le DOM",
			"Un ensemble de règles pour structurer les composants",
		],
		answer: "Un modèle de données utilisé par React pour améliorer les performances du rendu",
		difficulty: "medium",
	},
	{
		question: "Comment réagir à un changement de route dans React Router ?",
		options: [
			"En utilisant la méthode componentWillReceiveProps()",
			"En utilisant le hook useHistory() ou useNavigate()",
			"En modifiant directement l'URL dans le navigateur",
			"En utilisant le composant Link",
		],
		answer: "En utilisant le hook useHistory() ou useNavigate()",
		difficulty: "medium",
	},
	{
		question: "Qu'est-ce que le Context API de React permet de faire ?",
		options: [
			"Gérer l'état global sans passer par des props",
			"Optimiser les performances du rendu",
			"Créer des routes dynamiques",
			"Améliorer la gestion des erreurs",
		],
		answer: "Gérer l'état global sans passer par des props",
		difficulty: "medium",
	},
	{
		question: "Que fait React.StrictMode ?",
		options: [
			"Active des vérifications supplémentaires de votre code React pendant le développement",
			"Augmente la performance de l'application",
			"Améliore l'accessibilité des composants",
			"Empêche l'utilisation des hooks",
		],
		answer: "Active des vérifications supplémentaires de votre code React pendant le développement",
		difficulty: "medium",
	},
	{
		question: "Comment peut-on gérer plusieurs effets secondaires dans un même composant React ?",
		options: [
			"En utilisant plusieurs hooks useEffect()",
			"En appelant une fonction dans le render()",
			"En combinant tous les effets dans un seul hook",
			"En utilisant un gestionnaire d'état externe",
		],
		answer: "En utilisant plusieurs hooks useEffect()",
		difficulty: "medium",
	},
	{
		question: "Quel est le rôle de React.memo ?",
		options: [
			"Optimiser les performances en mémorisant les composants déjà rendus",
			"Réduire la taille des fichiers JavaScript",
			"Améliorer l'accessibilité des composants",
			"Augmenter la sécurité des composants",
		],
		answer: "Optimiser les performances en mémorisant les composants déjà rendus",
		difficulty: "medium",
	},
	{
		question: "Qu'est-ce qu'un HOC (Higher Order Component) ?",
		options: [
			"Une fonction qui prend un composant et renvoie un nouveau composant avec des fonctionnalités supplémentaires",
			"Un composant avec des rendus conditionnels",
			"Une fonction de mise à jour de l'état",
			"Un type spécial de composant React",
		],
		answer:
			"Une fonction qui prend un composant et renvoie un nouveau composant avec des fonctionnalités supplémentaires",
		difficulty: "hard",
	},
	{
		question: "Qu'est-ce que useReducer() permet de faire dans React ?",
		options: [
			"Gérer l'état d'un composant fonctionnel de manière plus complexe, en utilisant des actions et un reducer",
			"Mettre à jour l'interface utilisateur de manière asynchrone",
			"Créer des effets secondaires personnalisés",
			"Déclencher un changement d'état de manière instantanée",
		],
		answer: "Gérer l'état d'un composant fonctionnel de manière plus complexe, en utilisant des actions et un reducer",
		difficulty: "hard",
	},
	{
		question: "Comment réagir à des mises à jour concurrentes de l'état dans React 18 ?",
		options: [
			"En utilisant le hook useConcurrentMode()",
			"En activant l'option Concurrent Mode",
			"En utilisant un composant de suspension (Suspense)",
			"En utilisant le hook useState() avec des promesses",
		],
		answer: "En activant l'option Concurrent Mode",
		difficulty: "hard",
	},
	{
		question: "Comment passer des données entre des composants très éloignés dans l'arborescence sans prop drilling ?",
		options: [
			"En utilisant le Context API",
			"En utilisant des événements personnalisés",
			"En utilisant un gestionnaire d'état global",
			"En utilisant des props explicites",
		],
		answer: "En utilisant le Context API",
		difficulty: "hard",
	},
	{
		question: "Qu'est-ce que le hook useCallback() permet de faire ?",
		options: [
			"Mémoriser une fonction pour éviter de la recréer à chaque rendu",
			"Gérer les effets secondaires dans un composant",
			"Mettre à jour l'état d'un composant",
			"Optimiser la gestion des routes",
		],
		answer: "Mémoriser une fonction pour éviter de la recréer à chaque rendu",
		difficulty: "hard",
	},
	{
		question: "Quel est le principal avantage de React 18 avec son système de Suspense ?",
		options: [
			"Il permet de rendre des composants avant que toutes les données ne soient disponibles",
			"Il optimise le rendu des composants en réduisant les appels API",
			"Il permet de charger des données uniquement lorsque l'utilisateur les demande",
			"Il améliore la gestion de l'état",
		],
		answer: "Il permet de rendre des composants avant que toutes les données ne soient disponibles",
		difficulty: "hard",
	},
]

export const typescriptQuestions: Question[] = [
	{
		question: "Qu'est-ce que TypeScript ?",
		options: [
			"Un langage de programmation qui compile en JavaScript",
			"Un framework JavaScript",
			"Un moteur de rendu pour les applications web",
			"Une bibliothèque pour manipuler les dates",
		],
		answer: "Un langage de programmation qui compile en JavaScript",
		difficulty: "easy",
	},
	{
		question: "Comment déclarer une variable de type string en TypeScript ?",
		options: ["let maVariable: string;", "let maVariable = string;", "let maVariable: str;", "let maVariable: text;"],
		answer: "let maVariable: string;",
		difficulty: "easy",
	},
	{
		question: "Que signifie l'extension de fichier '.ts' ?",
		options: ["Un fichier TypeScript", "Un fichier JavaScript", "Un fichier JSON", "Un fichier de configuration"],
		answer: "Un fichier TypeScript",
		difficulty: "easy",
	},
	{
		question: "Quel mot-clé permet de déclarer une variable en TypeScript ?",
		options: ["let", "var", "const", "toutes les réponses"],
		answer: "toutes les réponses",
		difficulty: "easy",
	},
	{
		question: "Comment déclarer un tableau de nombres en TypeScript ?",
		options: [
			"let numbers: number[];",
			"let numbers: array<number>;",
			"let numbers: Array<number>;",
			"let numbers: [number];",
		],
		answer: "let numbers: number[];",
		difficulty: "easy",
	},
	{
		question: "Quelle est la différence entre 'any' et 'unknown' en TypeScript ?",
		options: [
			"'any' désactive la vérification de type, tandis que 'unknown' nécessite une vérification de type avant de l'utiliser",
			"'any' est plus strict que 'unknown'",
			"'unknown' ne peut pas être utilisé dans des fonctions",
			"'any' est réservé aux tableaux",
		],
		answer:
			"'any' désactive la vérification de type, tandis que 'unknown' nécessite une vérification de type avant de l'utiliser",
		difficulty: "easy",
	},
	{
		question: "Que permet d'utiliser le mot-clé 'interface' en TypeScript ?",
		options: [
			"Définir un contrat pour les objets et les classes",
			"Définir une fonction",
			"Définir des types primitifs",
			"Créer des composants React",
		],
		answer: "Définir un contrat pour les objets et les classes",
		difficulty: "easy",
	},
	{
		question: "Quelle est la différence entre 'type' et 'interface' en TypeScript ?",
		options: [
			"Les interfaces sont extensibles, les types ne le sont pas",
			"Les types peuvent être fusionnés, les interfaces non",
			"Les interfaces sont réservées aux objets, les types pour tout",
			"Les types sont plus performants que les interfaces",
		],
		answer: "Les interfaces sont extensibles, les types ne le sont pas",
		difficulty: "medium",
	},
	{
		question: "Que permet de faire le mot-clé 'readonly' en TypeScript ?",
		options: [
			"Empêcher la modification d'une propriété après sa déclaration",
			"Rendre un objet immuable",
			"Indiquer que la variable ne peut pas être redéfinie",
			"Aucune de ces réponses",
		],
		answer: "Empêcher la modification d'une propriété après sa déclaration",
		difficulty: "medium",
	},
	{
		question: "Quel type représente une fonction qui ne retourne rien en TypeScript ?",
		options: ["void", "null", "undefined", "empty"],
		answer: "void",
		difficulty: "medium",
	},
	{
		question:
			"Comment déclare-t-on un type générique pour une fonction qui prend un argument de type quelconque et retourne une valeur de ce même type ?",
		options: [
			"function maFonction<T>(param: T): T { return param; }",
			"function maFonction<T>(param: T) { return T; }",
			"function maFonction(param: type<T>): type<T> { return param; }",
			"function maFonction(param: any): any { return param; }",
		],
		answer: "function maFonction<T>(param: T): T { return param; }",
		difficulty: "medium",
	},
	{
		question: "Quel est le type par défaut d'un paramètre non défini dans une fonction en TypeScript ?",
		options: ["any", "undefined", "void", "unknown"],
		answer: "any",
		difficulty: "medium",
	},
	{
		question: "Qu'est-ce qu'un 'tuple' en TypeScript ?",
		options: [
			"Un tableau avec des types d'éléments fixés dans une certaine ordre",
			"Un tableau dynamique de types variés",
			"Un type pour gérer des ensembles",
			"Un tableau avec des valeurs numériques",
		],
		answer: "Un tableau avec des types d'éléments fixés dans une certaine ordre",
		difficulty: "medium",
	},
	{
		question: "Qu'est-ce que le 'type narrowing' en TypeScript ?",
		options: [
			"Réduire un type générique à un type plus spécifique",
			"Augmenter la taille d'un type",
			"Effectuer une conversion entre types",
			"Vérifier si un type est valide",
		],
		answer: "Réduire un type générique à un type plus spécifique",
		difficulty: "medium",
	},
	{
		question: "Quel est le but des 'Mapped Types' en TypeScript ?",
		options: [
			"Créer un type basé sur un autre type en appliquant des transformations",
			"Mapper des valeurs d'un tableau à un autre",
			"Fusionner plusieurs types en un seul",
			"Créer des classes avec des propriétés dynamiques",
		],
		answer: "Créer un type basé sur un autre type en appliquant des transformations",
		difficulty: "hard",
	},
	{
		question: "Comment fonctionne l'inférence de types dans TypeScript ?",
		options: [
			"TypeScript déduit automatiquement le type en fonction de la valeur assignée",
			"Le type doit toujours être explicitement défini",
			"TypeScript n'infère pas les types, tous doivent être définis",
			"L'inférence de type ne s'applique qu'aux objets",
		],
		answer: "TypeScript déduit automatiquement le type en fonction de la valeur assignée",
		difficulty: "hard",
	},
	{
		question:
			"Quel type utilisez-vous pour représenter des valeurs qui peuvent être d'un type ou d'un autre en TypeScript ?",
		options: ["union types", "intersection types", "generics", "mapped types"],
		answer: "union types",
		difficulty: "hard",
	},
	{
		question: "Quelle est la différence entre 'never' et 'void' en TypeScript ?",
		options: [
			"'never' indique qu'une fonction ne renvoie jamais, tandis que 'void' signifie qu'elle ne renvoie rien",
			"'never' est un sous-type de 'void'",
			"'void' est pour les valeurs indéfinies, 'never' pour les erreurs",
			"'never' et 'void' sont synonymes",
		],
		answer: "'never' indique qu'une fonction ne renvoie jamais, tandis que 'void' signifie qu'elle ne renvoie rien",
		difficulty: "hard",
	},
	{
		question: "Que permet de faire le type 'Record<K, T>' en TypeScript ?",
		options: [
			"Créer un type qui représente un objet avec des clés de type 'K' et des valeurs de type 'T'",
			"Créer un type générique pour les objets",
			"Appliquer une transformation aux clés d'un objet",
			"Créer une interface avec des clés et des valeurs",
		],
		answer: "Créer un type qui représente un objet avec des clés de type 'K' et des valeurs de type 'T'",
		difficulty: "hard",
	},
	{
		question: "Qu'est-ce que les 'Conditional Types' en TypeScript ?",
		options: [
			"Un type qui dépend d'une condition évaluée sur un autre type",
			"Un type utilisé pour vérifier les erreurs de type",
			"Un type permettant de transformer un tableau",
			"Un type qui n'est utilisé que pour les tableaux",
		],
		answer: "Un type qui dépend d'une condition évaluée sur un autre type",
		difficulty: "hard",
	},
]
