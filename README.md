# 🎯 Fléchettes Time — Scoreur de Précision Web

<p align="center">
  <img src="https://img.shields.io/badge/Status-Production-success?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Logic-JavaScript_ES6-yellow?style=for-the-badge&logo=javascript" alt="JS">
  <img src="https://img.shields.io/badge/Deployment-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel">
</p>

---

## 📖 Présentation du Projet

**Fléchettes Time** est une application web progressive (PWA) conçue pour automatiser le comptage des points lors de parties de fléchettes (301 / 501). L'application élimine le besoin de papier/crayon en offrant une interface tactile optimisée pour une utilisation rapide en plein jeu.

📍 **Application Live :** [https://flechettestime.vercel.app/](https://flechettestime.vercel.app/)

### 🚀 Pourquoi ce projet ?
Le développement de Fléchettes Time m'a permis de relever des défis techniques spécifiques :
- **Algorithmique de score** : Gestion des soustractions dynamiques et des conditions de victoire (finir pile à zéro).
- **Gestion de l'UX** : Création d'un pavé numérique personnalisé pour une saisie fluide sur mobile.
- **State Management** : Suivi du tour par tour entre plusieurs joueurs sans perte de données.

---

## 🛠 Stack Technique

- **Front-end Native** : HTML5 & CSS3 (Flexbox/Grid).
- **Moteur de Logique** : JavaScript Vanilla (ES6). Utilisation intensive des tableaux et objets pour stocker l'historique des lancers.
- **Animations** : Transitions CSS fluides pour les changements de joueurs et les alertes de victoire.
- **Hébergement** : Déploiement continu via Vercel.

---

## ✨ Fonctionnalités Clés

| Fonctionnalité | Description |
| :--- | :--- |
| **Multi-joueurs** | Prise en charge de plusieurs joueurs avec alternance automatique des tours. |
| **Règles Officielles** | Gestion du "Bust" (si le score dépasse 0, le tour est annulé). |
| **Historique des Lancers** | Affichage en temps réel des derniers scores saisis pour chaque joueur. |
| **Interface Responsive** | Design "Mobile-First" conçu pour être utilisé d'une seule main devant la cible. |
| **Reset Dynamique** | Possibilité de réinitialiser la partie instantanément tout en conservant les réglages. |

---

## 🧠 Défis Algorithmiques Résolus

### 1. La logique du "Zéro Pile"
Implémentation d'une condition stricte pour la victoire :
```javascript
if (currentScore - throwValue < 0) {
    // Logique de "Bust" : le score ne change pas, tour suivant.
} else if (currentScore - throwValue === 0) {
    // Condition de Victoire
}
