---
sidebar_position: 2
---

# The Game

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import TextStyled from "../src/components/CustomReactComponents";

This section focuses on the Hyperblade as a game, explaining core mechanics, story and what makes Hyperblade a game to be played.

:::note
**Hyperblade** game is under active development, this document might not reflect the latest state of the game and serves only educational and informational purposes.
:::

## Core Gameplay

Hyperblade is a third-person fighter game revolving around melee combat. The core of the game is 1v1 ranked mode that is the basis for **[Duel-to-Earn](Blockchain#timeore)**, a Play-to-Earn system rewarding players for in-game accomplishments (i.e. winning over higher ranked players).
Hyperblade is powered by **Unreal Engine 5** and designed with all major gaming platforms in mind, which includes native cross-play support.

_Duel your opponents in a classic rounds system, you have 90 seconds in each round to defeat your opponent three times. Try other game modes such as the Lounge where you just hang out with your friends in the dojo. Play even offline battling AI or dive deep into the lore with singleplayer chapters._

## Characters & Weapons

Hyperblade puts a heavy emphasis on letting players find their own individualistic fighting style through "pre-match" customization and complex combat mechanics.
Before each match, player pick the **character** they want to fight as and **primary melee weapon**.
Every character/weapon combination plays differently than any other. Players have to figure out which combinations suit their playstyle, as well as consider the fact that every individual opponent will do the same.

Players will be able to select any of the weapons or characters as they become available in the game for free.
Characters and weapons accessibility is _not_ tied to player's level nor Loot Crate drops due to nature of tokenized rewards, which requires fair and balanced gameplay.

### Characters

All characters in Hyperblade have distinctive visual style and flare stemming from their background, including which combat styles they can utilize.
Further down the timeline, characters will be featured in lore-building singleplayer chapters that will reveal their origin stories and the reason they fight.
Characters are assigned properties such as **attack speed, movement speed and size**, possess an one-of gameplay ability, and have a set of unique attack moves that are basis for the **stance system**.

### Combat Styles & Weapons Types

The selection of primary melee weapons for each character is limited by **Combat Styles** they can utilize, which could be several of, e.g.: **One-handed swords**, **Two-handed swords**, **Hammers**.
Striving for captivating and non-repetitive gameplay, more diverse combat styles and weapon types will be introduced as the game evolves, future iterations could include spears, crescent swords or flails. Characters won't be restricted only to the combat styles they had in the beginning, new combat styles will be added to all characters in the pool.

<br/>
<ThemedImage style={{width: "40rem", maxWidth: "100%"}} alt="Combat Styles" sources={{    light: useBaseUrl('../img/game/Styles-light-mode.png'),    dark: useBaseUrl('../img/game/Styles-dark-mode.png'),  }}/>
<br/>
<TextStyled fontSize="0.8rem" color="var(--ifm-color-primary)" fontWeight="bold">Fig.1: Example combat styles (Alpha version)</TextStyled>
<br/>
<br/>

In turn, Combat Styles enable for different **Weapon Types**.
All primary weapons are characterized by the weapon type they belong to, which sets it's dynamic through standartized set of parameters: **attack speed, damage it inflicts or reach**.

<br/>
<ThemedImage style={{width: "40rem", maxWidth: "100%"}} alt="One-Handed Sword" sources={{    light: useBaseUrl('../img/game/1h-light-mode.png'),    dark: useBaseUrl('../img/game/1h-dark-mode.png'),  }}/>
<br/>
<TextStyled fontSize="0.8rem" color="var(--ifm-color-primary)" fontWeight="bold">Fig.2: One-Handed Sword variations</TextStyled>
<br/>
<br/>

The purpose behind grouping weapons together is to increase accessibility of the game by allowing players to easily understand how each weapon would play based on it's type and combat style.
In order to stay competitive, players now have to learn nuances of overarching weapon types instead of individual weapons (which could get overwhelming with new ones being constantly added).

## Customization

Customization does not stop at the gameplay level, as Hyperblade includes rich **visual customization** available for both characters and swords, but not limited to it.
The way we implement core customization is by going with on-chain NFTs. The NFTs can be obtained during the playthrough or on the Hyperblade Marketplace. The specifics of customziation are described in [NFT](NFT) section.
On release, visual customization will be unlocked across the game, thus giving players an opportunity to demonstrate in-game achievements or affiliation with a specific community.

There are many visual attributes on each character that can be changed to players liking, including elements such as: armor pieces, clothes, auras, victory animation and emotes, etc. Yet the primary way of personalization is intended to be **weapon customization**.
Other than being a part of a certain type, weapons can have a drastically different look to their comparable alternatives.
Players start with a basic _Bokken_ sword[^1] and as they progress the weapons get more rare, advanced and exquisite.
Weapons can then be augmented with minor modifications such as an alternate sword hilt or blade material, which have a minor impact on how the weapon handles. The systems powering Hyperblade and it's universe provide a way for players to both progress in the game and enjoy the items earned even outside of the game in the larger blockchain **Metaverse**.

[^1]: https://en.wikipedia.org/wiki/Bokken

## Key Mechanics

The following section features descriptions of all essential fighting mechanics.

<TextStyled fontSize="1.3rem" fontWeight="bold" >Attacks and Stances</TextStyled>
<br/>

The core of Hyperblade is melee combat that is based on set of attacks separated into 3 stances: **melee, light, and heavy**.
Each attack move has it's own distinctive animation, direction, weapon path, time duration and the stance it is triggered in.
Characters have varying number of attacks in every stance, e.g. a 'nimble' character would have more light attacks than a 'tank' character, and every attack type has it's distinctive nature. A heavy attack is slower but deals more damage, a light attack is fast but less impactful, while a melee attack is effective on arm's length distances. Airborne attacks ("air stance") are triggered if character performs a jump and then an attack, irregardless of the current stance.

<br/>
<ThemedImage style={{width: "30rem", maxWidth: "100%"}} alt="Combos graph" sources={{    light: useBaseUrl('../img/game/Combos-light-mode.png'),    dark: useBaseUrl('../img/game/Combos-dark-mode.png'),  }}/>
<br/>
<TextStyled fontSize="0.8rem" color="var(--ifm-color-primary)" fontWeight="bold">Fig.3: Example of a combo chain going from heavy attack to medium to light and back to medium</TextStyled>

<br/>
<br/>

<TextStyled fontSize="1.3rem" fontWeight="bold" >Combos</TextStyled>
<br/>

The **combo** system allows for attacks to be chained in a seamless way, further adding to the complexity of the gameplay. Combo is activated when two or more attacks are triggered consecutively, and is finished if another attack is performed in a short period of time after the last one, if the intra-combo attack limit is achieved or if the opponent breaks the combo with a "counter" move. Combos can be chained using attacks from all stances, including airborne attacks, this adds multipliers to parameters such as attack speed or damage. The premise of combos is to expand the fight beyond basic attack moves and to incentivize players to learn all the possible moves and combos in order to be competitive.

<br/>
<ThemedImage style={{width: "40rem", maxWidth: "100%" }} alt="Combos graph" sources={{    light: useBaseUrl('../img/game/Combos2-light-mode.png'),    dark: useBaseUrl('../img/game/Combos2-dark-mode.png'),  }}/>

<br/>
<TextStyled fontSize="0.8rem" color="var(--ifm-color-primary)" fontWeight="bold">Fig.4: The same combo chain from the illustration above, expressed as a series of inputs on a PS5</TextStyled>
<br/>
<br/>

<TextStyled fontSize="1.3rem" fontWeight="bold" >Blocks and Attack Charges</TextStyled>
<br/>

To defend, player can either be evading their opponent, or use **block**, thus lessening the impact of incoming attacks and projectiles. An active block has diminishing effectiveness based on the time the block is up and the damage it has received. If a player overusing the block at the moment, it will be very easy for the opponent to break his block by breaking the damage threshold. On top of that, fully charged Tier 3 attacks instantly break basic blocks. Altoghether, blocks can be viewed as the last resort option for defence as there are multiple ways how to go past it.

During the prototype stage, a potential exploit was uncovered:
The player who is currently winning (i.e. player has more HP than opponent) can simply start avoiding the fight or stay in the 'block' stance and get the win.
To mitigate, the concept of **attack charges** was implemented. Attack charging incentivizes the player to run at the opponent and be the first to attack, as a higher charged attack might overcome blocks or weaker attacks. This means that the first player to charge an attack is put into an offensive position, while the opposing player is put into a defensive position. The defensive player then has to choose whether to counter-attack, block or try to avoid the hit.

Tiered attack charge augments the attack based on how fully charged the attack is. Tier 1 is the base attack, Tier 2 , and Tier 3 is a fully charged attack. In order to charge an attack, player has to hold down the appropriate attack button. Player's character then emits visible visual cues to signify how charged attack is. A fully charged attack will automatically start the move. Tier 3 attacks also serve the purpose of being able to break through the block of the opposing player, further making the combat more dynamic.

<TextStyled fontSize="1.3rem" fontWeight="bold" >Directionality and Physicality</TextStyled>
<br/>

Hyperblade features **physically based combat**, weapons have collision boxes on par with characters and attacks have to go through opponent defences before they will do any damage. Physicallity in Hyperblade closely follows real-life physics. Players can intuitively predict the outcome of every move, which further smooths out the learning curve. A two-hand warhammer in full swing has enough power to catapult it's target away, and set of quick jabs with a dagger does a lot of damage but does not move the victim at all.
The damage that a weapon inflicts depends on the stage attack is in and individual parameters of the weapon, a still winding up attack is less dangerous than a properly aimed and timed one. And because the game is generating attack collision based on the animation of the characters, the **directionality** of attacks comes into play.
The element of directionality is reminiscent of titles such as _Mordhau_ or _Star Wars Jedi Knight: Jedi Academy_, where players have to aim their sword swings to parry an incoming attack or to strike the opponent. To capitalize on the interesting nature of directionality, Hyperblade implements it as one of the features of movement system, this is done by adding a left attack and a right attack modifiers to each stance. When player is standing still or moving forward, the default move is played.

<TextStyled fontSize="1.3rem" fontWeight="bold" >Parries</TextStyled>
<br/>

Physicality and Directionality of attacks raise the obvious question of what happens when two swords (or any other weapons) collide; in Hyperblade this event is called a **parry**.
Different moves have different directionality, and in order to parry an attack player has to be correctly predict direction of the incoming attack and launch their own attack with an intersecting trajectory.
The outcome of the parry is dependent on the current state of both weapons based on their physical attributes and the attack stage.
Attacks with massive momentum are hard to stop, breaking weaker attacks entirely, yet a parry happens when one attack is not overwhelmingly more powerful than the other. After a parry takes place and both fighters are thrown back and cannot attack until they recover.
The "rule of thumb" is: when two swords collide a heavy attack wins over a light attack, light attack wins over air attack and the air attack wins over the heavy attack, melee attack utilized in close proximity of the opponent then have an advantage of the all of afforementioned stances.

<TextStyled fontSize="1.3rem" fontWeight="bold" >Mobility</TextStyled>
<br/>

**Mobility** is an integral part of the Hyperblade experience. Unlike traditional fighters like _Tekken_ or _Mortal Combat_, players are not rubber-banded to their opponents nor they are confined to a small space enclosed by invisible walls. The freedom of movement allows players to move in all directions, even vertically, bounded only by prowness and dextrity of their current character.
Individual characters can do a double jump (second jump triggered mid-air), use a small jetpack to hover, or perform a wall run, further expanding the scope of a fight beyond a simple stand-off.
The map design plays into that; the Arenas are diverse, allow for verticallity, and have a degree of interactivity (e.g. characters can fall into a pit and die).
A fight can then take place on any point of the map, enabling for tactics such as holding a high ground and using props/terrain to hide from the enemy.

The movement is augmented by possibility to **Dash** by hitting the mapped 'dash' key. By default 'dash' launches the character backwards, but if left or right movement keys are being held, character then leaps in the appropriate direction.

Players are able to **Lock** on an enemy, as the result their character will constantly face the opponent thus simplifying the process of aiming. The lock mechanic is designed to aid console/mobile gamers who can't benefit from precise mouse aiming like PC users do. In 1v1 duels, lock is engaged by default.

<TextStyled fontSize="1.3rem" fontWeight="bold" >Ranged Combat and Abilities</TextStyled>
<br/>

Every character has a special ability that is unique to them, expanding the variance of gameplay by going beyond melee combat. Abilities are based on characters' background or school of martial arts they represent and can either be offensive or defensive. Example abilities: smoke bomb, berzerk mode, secondary weapon, damage absorbing energy field, etc.
To further enhance the gameplay and intensity of the match-ups, Hyperblade features limited **ranged combat**. This is done to prevent ultra passive combat where one player simply avoids the fight. Character are able to launch a projectile, e.g.: a ninja star, a throwing knife, or even a self-guiding mini drone or lightning strike.

During the fight, players are able to throw their primary weapon as well. After the throw, players will have to pick up their weapon again in order to get back in the fight. Primary weapon throw is especially effective for spears.

Ranged combat and abilities are not meant to be the dominant combat mechanic and should be only used sporadically. Both have a cool-down period after being used, and ranged attacks have limited range and decreasing effectiveness over distance.

## Controls

By hiding complex game mechanics and abundance of attack moves behind a veil of simple control scheme, Hyperblade becomes accessible for all kinds of gamers. Both seasoned vets and people new to the genre can benefit from the controls that are easy-to-understand and remember.
And since Hyperblade is built with fair cross-play in mind, controls and UX are optimized for both PC and console gaming, yet the key advantage of the uncomplicated control scheme is that even mobile gaming is possible without any serious drawbacks.

The controls are meant to be responsive, intuitive, and snappy, while at the same time being simple enough that they can be mapped easily to any platform. The following schema show how controls are mapped to example targeted platforms.

<ThemedImage style={{width: "40rem", maxWidth: "100%" }} alt="Combos graph" sources={{    light: useBaseUrl('../img/game/Controls-light-mode.png'),    dark: useBaseUrl('../img/game/Controls-dark-mode.png'),  }}/>

<br/>
<TextStyled fontSize="0.8rem" color="var(--ifm-color-primary)" fontWeight="bold">Fig.5: PC/console/mobile controls schematics</TextStyled>

<br/>
<br/>

## Duels

The main game mode of Hyperblade is online 1v1 matchmaked fight - a **Duel**.
Duels feature traditional "best-of-5" rounds system, where one player has to overcome his opponent 3 times to win. Each round takes up to 90 seconds, if both of the fighters are still "alive", the one with more HP takes the round. The map for a match is selected randomly from the current ranked map pool and does not change in-between the rounds.
Players enter the fight with the customized (via NFTs) character/weapon loadout of their preference, which, combined with complex combat mechanics, results in every duel being one-of-a-kind and to never be repeated again.

## Ranked

The basis for the competitive gameplay in Hyperblade is **Ranked Mode**. Players will prove themselves versus equally skilled opponents picked by the built-in matchmaking system and progress through ranks as they improve their skill and invest more time into the game.
Ranked mode serves as the mean of distribution for **[Duel-to-Earn](Blockchain#Duel-to-Earn)** tokenized rewards: **Timeore** ERC-20 token and **NFT Loot Crates**. The chance that one gets a better reward is linearely increasing as their rank increases. The top performing players can expect to get valuable NFTs that are impossible to get otherwise.

To get into the Ranked, players must play 10 placement matches where they will be pitted with other fighters of varying skill levels. After that, players get their first rank assigned based on their performance. From there on, Ranked mode will be unlocked and each match there will change player's rating and therefore the kind of opponents they will face. There are 16 ranks planned, with each being progressivly harder to obtain. The final rank allows players to join Hyperblade DAO hosted tournaments with prize pools.

Competitive ranks are separate from the player level, and are reset each each **Season**. Seasons is how the online mode is kept fresh and relevant, each brings new content and changes to gameplay, including revisions of Ranked mode. The duration of season varies on the stage of development of Hyperblade, shorter seasons (i.e. 2 months) can be expected in the beginning, the later seasons should not last longer than a year.

Esports is the logical evolution of ranked gameplay. The balance, fast pace and rich visuals are making both esports and streaming viable, giving the viewers feeling like they are the ones playing. We also plan on hosting several annual tournaments with prize pools. Those will be funded from the DAO treasury, sponsors and NFT ticket sales. Later on, tools for hosting custom tournaments will be released publicly.

## Other Gamemodes

High replayability and player retention are central Hyperblade, the game has to be fundamentally _fun_ to play with enough options how to get entertained.
The combat mechanics and variety of weapons/characters options allow for other game modes than 1v1 duels as well.
Several additional game modes are in development, starting with a social game mode called _The Lounge_.

<TextStyled fontSize="1.3rem" fontWeight="bold" >The Lounge</TextStyled>
<br/>

Up to 32 players can join a single server and just hang out and chat as well challenge each other to duel.
Servers will be either official or custom, and have a dedicated IP or address. Unlike Ranked matchmatchmaking, where players will always face someone new and random, the Lounge is static, players can join and invite their friends and make new friends right on the server, thus building a micro-community.

Additional functionality will be continuously introduced to the Lounge, both added by core developers and enthusiasts. While on the server, players would vote to launch a specific "mini-game", such as:

- Last man standing
- Free-for-all deathmatch
- Team based deathmatch
- Hero-vs-all
- Players-vs-bots

NFT customization is enabled by default and players can demonstrate their in-game achievements (or _wealth_) by having their favorite swords and armor equipped. Furthermore, the possiblity to **wager NFTs in pre-arranged duels**, including betting on the outcome of other people's duels, serves as a proof-of-concept in-game NFT utility (and therefore raises their intristic value).
The blockchain interactiveness (i.e NFT wagering) is initially restricted to official servers.

<TextStyled fontSize="1.3rem" fontWeight="bold" >The Tower</TextStyled>
<br/>

The next possible candiditate for a competitive ranked gameplay and tokenized rewards distribution is 3v3 (or 5v5) MOBA style game mode **The Tower**.
The mode follows canonic MOBA principles, the two teams go head-to-head with an objective to destroy their opponents' base structure located on the other corner of the map and defended by AI minions/defensive structures. During rhe match, players accumulate points for killing enemies that can be redeemed for upgrades such as weapon augmentations or abilties (intra-match). The Tower utilizes the same fighting mechanics as the base game, and therefore the skills developed in Duels are applicable to this mode as well.
Expanding competitive Hyperblade beyond 1v1 gameplay allows for professional teams to emerge, solidifying Hyperblade as a complete esports title.

<br/>
<br/>

_Focusing on community development and entertainment value, Hyperblade can leverage the openness of the platform to give the builders the means to expand the game, growing it in a decentralized way.
With cutting-edge technology stack, including Unreal Engine 5 as the game engine and DAO collaboration framework, the community can effectivelly shape the game to it's own liking.
_

## Visuals & Setting

Being a free-to-play, cross-platform fighting game, Hyperblade is a game built with mass appeal in mind. The goal is to create a brand new universe that captivates a wide array of audiences while retaining a lot of depth, and that's why a several key decisions about the Hyperblade design were made.

Hyperblade utilizes a stylized artstyle, which makes it very visually appealing and readable, with later being especially important for competitive gameplay. Another advantage of the stylized approach is that it allows for a streamlined art pipeline, where the new assets are created effectively without losing any of the aesthetic value. The stylized graphics look arguably great even on lower end platforms or mobile, which makes again game truly accessible for all. Finally, Hyperblade is meant to be played without any visual discomfort even years after the initial release, so having the graphics that will stand the test of time is essential. _Team Fortress 2_ is the benchmark in regards to longevity, and the stylized artstyle, switch to Free-to-Play and built in-trading platform are perhaps the reasons why this 14 year old game is just as popular as ever[^2].

[^2]: https://steamcharts.com/app/440

The setting is in an alternate-reality world, meaning that Hyperblade uses real world as the basis and adds a multitude of sci-fi and fantasy elements, bringing a brand new story-driven universe to life (just like _Overwatch_, _Fallout_, or _Soul Calibur_ do). This gives the game a solid framework to work with, not limited by the setting of any existing franchise, and a way to tie real-world cultural references to the story and universe. Being a fighting game revolving around melee combat, Hyperblade can embrace real-life martials like kendo or fencing, which now could be used for character lore as well as in the actual gameplay.

<img src={'../img/game/inspirationboard.png'} alt='Hyperblade Artboard'/>

## Story

<TextStyled fontSize="1.3rem" fontWeight="bold">TBD</TextStyled>
