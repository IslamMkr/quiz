import { Typography } from "@mui/material"

const Instructions = () => {
	return (
		<>
			<Typography variant="h4" gutterBottom textAlign="center" fontWeight="bold">
				Bienvenue au Quiz
			</Typography>
			<Typography variant="h6" textAlign="center" sx={{ mb: 2 }}>
				Vous êtes sur le point de participer à un quiz interactif. Voici comment cela fonctionne :
			</Typography>
			<Typography variant="body1" textAlign="left" sx={{ mb: 4, maxWidth: "600px" }}>
				<ol>
					<li>
						<strong>Choisissez un sujet :</strong> Sélectionnez "React" ou "TypeScript" en fonction de vos préférences
						ou de votre niveau de compétence.
					</li>
					<li>
						<strong>Questions et réponses :</strong> Vous aurez une série de questions à choix multiple. Chaque question
						vous donne quatre options parmi lesquelles choisir.
					</li>
					<li>
						<strong>Temps limité :</strong> Vous disposez de 30 secondes pour répondre à chaque question. Une barre de
						progression vous indique le temps restant.
					</li>
					<li>
						<strong>Continuez :</strong> Cliquez sur "Question Suivante" après chaque question pour passer à la
						suivante. Si le temps expire, vous passerez automatiquement à la question suivante.
					</li>
					<li>
						<strong>Résultats :</strong> À la fin du quiz, vous recevrez vos résultats pour évaluer vos connaissances.
					</li>
				</ol>
			</Typography>
			<Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
				Amusez-vous et essayez de répondre correctement au maximum de questions ! Bonne chance !
			</Typography>
		</>
	)
}

export default Instructions
