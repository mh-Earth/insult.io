import React, { useState } from 'react';


export default function Main() {
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'en-US';
    utter.volume = 1;
    
    const [userName ,setUserName] = useState("")
    const [quotes, setquotes] = useState("")
    const [insults, setinsults] = useState("display-none")
    
    let all_quores = ["I don't believe in plastic surgery, But in your case,Go ahead.", "People like you are the reason we have middle fingers.", "Tell me… Is being stupid a profession or are you just gifted?", "People say that laughter is the best medicine… your face must be curing the world!", "Why Don't You Slip Into Something More Comfortable. Like A Coma?", "When your mom dropped you off at the school, she got a ticket for littering.", "Zombies eat brains. You're safe.", "Me pretending to listen should be enough for you.", "What's the point of putting on makeup, a monkey is gonna stay a monkey.", "I'd agree with you but then we'd both be wrong.", "Your intelligence is my common sense.", "No need for insults, your face says it all.", "If you're talking behind my back then you're in a perfect position to kiss my a**!", "If I say something that offends you, let me know so I can do it again later.", "You're so ugly that when you cry,  the tears roll down the back of your head…just to avoid your face.", "Wow! You have a huge pimple in between your shoulders! Oh wait that's your face.", "My mom says pigs don't eat biscuits… So I better take that one out of your hand.", "I'll try being nicer, if you try being smarter.", "Act your age not your shoe size.", "It's not that you are weird…it's just that everyone else is normal.", "Scientists are trying to figure out how long human can live without a brain. You can tell them your age.", "It's not that I'm smarter than you, its just that you're dumber than everyone else.", "Jealousy is a disease…get well soon!", "Stupidity is not a crime so you are free to go.", "Whatever permission you thought you had to speak to me, I hereby remove.", "Everyone has the right to be stupid, but you're abusing the privilege.", "Just keep talking, I yawn when I'm interested.", "Your lips are moving, but all I hear is “blah blah blah…”", "You know most days when I look in a mirror I feel ugly, but when I look at you I feel lucky.", "Your age doesn't lie. Neither does that face.", "You're so ugly, when you were born, the doctor said “Wheres the baby?” You're so ugly, when you were born, your parents sued the doctor. You're so ugly, when you were born, your parents asked for a refund. You're so ugly, when you were born, the doctor was the one screaming instead of your mother.", "My battery lasts longer than your relationships.", "You're so much smarter when you don't speak!", "You're very beautiful, no doubt about that but I'll still rate a monkey ahead of you.", "Where were you when God was giving out common sense?", "You don't have to disrespect and insult others simply to hold your own ground. If you do, that shows how shaky your own position is. Red Haircrowg", "If I hurt your feelings in any way I just want to know from the bottom of my heart that I don't care.", "I'm surprised at you level of stupidity.", "What would beauty be without ugliness? See, you are important!", "Don't take yourself so seriously, no one else does.", "I'd love to have this battle of wits with you but I don't like fighting an unarmed person.", "Lets play fetch a little differently! I'll throw the stick and you don't come back ;)", "Rose are red Violets are blue I have five fingers, And the middle one is for you.", "I don't hate you… I just don't appreciate your existence.", "He's not stupid; he's  possessed by a retarded ghost. Don't you have a terrible empty feeling in your skull? Do you want people to accept you as you are or do you want people to like you? Do you still love nature, despite what it did to you?", "Teacher: What tense is I am beautiful in? Student: It's surely the past tense.", "Frankly, my dear, I don't give a damn.", "If the stuff that comes out of my mouth upsets you, just think of all the things I keep to myself.", "Is that your face or did your neck throw up?", "Holy wow! it looks like your face caught fire and someone tried to put it out with a fork.", "You are literally too stupid to insult!", "Your teeth are so yellow, when you smile I can see the Spanish flag.", "I don't even need a dictionary to find out what a moron is. I've got the perfect definition standing right in front of me.", "It's not that I hate you, it's just that I wish I had never met you.", "Somewhere along the line, I must have given you the impression I cared. I apologize.", "Mirrors can't talk, lucky for you they can't laugh either.", "There are levels of ugliness which are acceptable… But looking at you…that is just illegal!!!!", "It could be that the purpose of your life is only to serve as a warning to others. Ashleigh Brilliant", "Where did you come from, awwww did some one leave your cage open?", "It's people like you, that make people like me, look good…", "I became so religious so that I could pray for you to burn in hell.", "You: When I grow up I'm gonna go to the moon. Me: I'm afraid you're too late, NASA isn't sending the monkeys anymore.", "Please don't interupt me when I'm ignoring you.", "I don't insult people, I just compliment them negatively.", "Person: Go to hell! Me: I must already be in Hell since you're still standing here.", "The difference between us is that I have a reflection and you don't. Yours ran away when she realized she looks exactly like you.", "If dignity was money, you could maybe buy a soda.", "Can I borrow your brain for half an hour, I'm building an idiot.", "You are not useless because you can still be used as a bad example.", "Looks like somebody fell out the ugly tree and hit every branch on the way down!!", "Your head is so big, you don't have dreams you have movies.", "I may not be super smart but compared to you I am Albert Einstein.", "The trash will get picked up tomorrow, be ready.", "I'd insult you but apparently you need qualities for me to insult!", "I would love to slap you but that would be animal abuse.", "Life is great …you should get one.", "Why bother talking? You'll end up embarrassing yourself in the end.", "You're as useless as the 'Ay' in 'Okay'.", "Life is good, you should get one.", "Girl- How do I look? Boy- I would rather stay blind…and let the mirror suffer!!!!", "I'm not listening, but keep talking. I enjoy the way your voice makes my ears bleed.", "Though two heads are better than one but not when one of the head is yours.", "The degree of your stupidity is enough to boil water.", "You're so ugly, that when people see you, they know what the meaning of 'dark and handsome' means. When its dark, your handsome.", "You look ugly when you cry, much more when you don't.", "Are you in stupid mode or does this come naturally?", "I'd insult you right now… But I was raised NOT to make fun of the mentally challenged… You're lucky!", "Please tell me about yourself, I enjoy horror stories.", "Do you mind not talking I am trying to ignore you?", "A friend of mine: Do you think I am funny? Me: yeah, every time I look at you.", "Gosh! If a single word that comes out of your mouth earns you 0.000001$, you would still get richer than bill gate in 2 hours.", "You're so ugly you have to sneak up on a glass of water just to see your reflection.", "Go be stupid somewhere else. Squidward", "Person 1 : Have I ever told you how much I appreciate you? Person 2 : No Person 1: Oh good cause I never did.", "Man, if YOU can get a girlfriend, there's hope for the rest of us!", "If stupidity was a profession then you'd be a billionaire.", "Roses are red, violets are blue, sugar is sweet and so are you… But the roses are wilting, the violets are dead, the sugar bowl is empty and so is your head!", "You must have fallen from heaven. That would explain how you messed up your face.", "Calling you ugly would be an insult to the ugly people.", "Your family tree must be a cactus. Everyone in it is a prick.","Envy me, rate me, bottom line: You aren't me", "Of course I talk like an idiot. How else could you understand me?", "Did you forget your brain in your mother's womb? Cause I'm pretty sure you did.", "I don't want to be alone… But with you I'd rather be…", "I never insult any people I only tell them what they are.", "I don't insult people. I just describe them.", "Don't sneeze! Your brain is so small, it might slip out", "A gentleman is one who never hurts anyone's feelings unintentionally.  Oscar Wilde", "You should really have an 'out of order' sign on your forehead so everyone knows how stupid you are.", "Can you turn around and look at me??..awwwww!!! turn back again.", "O you remind me of my Chinese friend …Ug Lee", "Last time I checked I didn't ask for your opinion.", "Girl 1 Talk to the elbow you aren't worth the attention. Girl 2 Okay it's better looking than your face!", "I heard you had a brain surgery… But the brain rejected you?", "Yes, you do have a right to your opinion…And I have a right to mine. And my opinion is that your opinion is ridiculously stupid!!", "If I could feed one child each time you did something stupid, I'd stop world hunger.", "I'm already visualizing the duct tape over your mouth.", "Notice how AWESOME ends with ME, and UGLY starts with U.", "There's no such thing as a stupid idea, It's just you!", "Wow! I'm impressed how long you are able to live without a brain.", "You are the reason scientists decided that we descended from apes.", "You can talk? Quick, call the science community we have a discovery!", "If you want to stay out of a zoo, then get a mask.", "Oh, look! The garbage truck is coming! You better hide!", "I would love to insult you, but I'm afraid I won't do as well as nature did.", "You can't control what other people say about you, but you can control how you respond.", "B*tch at least I still remember planetary motion. The world revolves around the sun.", "Boy: Did you fall from heaven? Girl: No why? Boy: Cause you're face is pretty messed up. Boy: Your lucky you were born beautiful Girl:…… Boy: As for me I was born a big fat liar", "Everyone is entitled to their own opinion…it's just that yours is stupid.", "The only reason Wiz Khalifa made the song black and yellow was because of your teeth.", "Oh, I'm sorry. Were you under the impression that I value your opinion?", "Are your parents siblings?", "Remove your facebook display pic, before it gets sold to “Ripley's Believe it or not”.", "Your face is so ugly even Bob the Builder said “We can't fix it!”.", "Yeah, she has a face like a saint- a saint Bernard.", "Don't worry you're not as dumb as you look.", "You saying you're pretty is like me saying I taught Gandhi about peace!", "It is not insult from another that causes you pain. It is the part of your mind that agrees with the insult. Agree only with the truth about you, and you are free.  Alan Cohen", "Intelligence is key and you are locked out.", "Insult: If beauty fades you have nothing to worry about.", "I'm not shy. I just don't like you.", "Roses are red violets are blue, faces like yours belong in the zoo. But don't worry I will be there too, not in the cage but laughing at you.", "You're so fake; you make barbie look real (:", "You're so ugly you make onions cry.", "Forget the ugly tree, you were hit by the ugly forest.", "No matter how many harmful drugs I take, you still don't seem any smarter.", "I used to think I was stupid… but the I met you.", "I saw a bug then I thought of you so I stepped on it.", "I asked God to punish me, next day I met you.", "I'm sorry, I don't speak idiot.", "You know why God put you on earth. . .  because he didn't want you up there.", "I'm trying to imagine you with a personality.", "Insult: If you're dating an idiot, you have found your perfect match.", "I never believed Charles Darwin's theory that we are descendants of apes. Not until I saw your Facebook picture.", "If you can't laugh at yourself, I'll be happy to do it for you.", "You, sir, are an oxygen thief.", "Boy: What are you looking at? Girl: Haven't figured it out yet! Boy: My face hurts. =( Girl: Yeah it's killing me too!!", "Father : You are an idiot, son! Son : Of course. Like father, like son:p", "I'm sorry, my fault. I forgot you were an idiot.", "I was dropped on my head as a baby. But you, my friend, you were clearly flung against a wall!", "Allowing you to survive childbirth was medical malpractice.", "Eat Your Make Up So You'll Be Pretty On The Inside Too.", "If I wanted to kill myself I'll have to climb your ego and then jump to your IQ.", "You can not help solve my problem. Because you are it.", "Hmmm, your hair looks wrong. Then again, everything ON you looks wrong…", "You look at me, you judge me then you imitate me. I look at you and I laugh.", "You wouldn't care what people thought about you, if you knew how little they did.", "Fake Nails. Fake Hair. Fake Smile. Are you sure, you weren't made in China?=)", "Do your kids a favor don't have any.  Robert Orben", "You're so fat you need a paint roller to put on lipstick. You're so fat you need a sock for each toe. You entered an ugly contest but the judges stopped you and said “Sorry, no experts allowed” When that master' beautician hit you with an ugly- stick he hit you real good.", "Wow I can tell that was the smartest thing you've ever said. And trust me that was the dumbest thing I've ever heard!", "Do you still love nature, despite what it did to you?", "My lack of attention seems to be your fault.", "No need to insult you anymore, your presence in this world has done it all.", "Your head is just there to keep your ears apart.", "(Credits to me please) Keep talking behind my back and that's where you'll always be.", "If you were half as funny as you thought you were you'd be twice as funny as you actually are.", "If brains are considered money, you would be a charity case.", "He is known as an idiot savant, minus the savant.", "Hey do you want a mint?  Nah I'm okay. No seriously buddy, just take the mint and do us all a favor.", "Before I met you, I didn't believe in Charles Darwin.", "You have a right to your opinions. I just don't want to hear them.", "Keep talking, someday you'll say something intelligent, like on the 30th of February.", "Your stupidity is so high I would like to kill myself and to do that I would have to jump from your ego to your IQ.", "If beauty is a crime…. Then arrest me… And You !! You're FREE !!", "Do you like black eyes? I'm really good at making them. You must be a mask model. Halloween already? You know that hole in the middle of your face? Can you shove a sock in that? Godzilla called. He wants his hair back. Look, it's not that I don't like you.. It's just.. Your voice is literally the most annoying thing on Earth.", "It's not that I don't have time to discuss, but it's just that I find you worthless for my worthwhile words.", "It's not you, it's your face.", "Random snob: Don't try to mess with me… I have a mouth and I'm not afraid to use it. Me: No wonder you are fat.", "If you can't ignore an insult, top it; if you can't top it, laugh it off; and if you can't laugh it off, it's probably deserved.  J. Russell Lynes", "If you're gonna be two faced.. At least try to make one pretty.  Marilyn Monroe", "How do you keep an idiot in suspense? Leave a message and I'll get back to you.", "Can I borrow your face for Halloween?", "Ohh…you should be on discovery…!!", "My door is always open for you so feel free to leave.", "Yes, we all sneeze, and that's hard to avoid, but maybe it's the time you work on making it sound less like an elephant trumpeting in agony.", "Sometimes I need what only you can provide: your absence.  Ashleigh Brilliant", "Your silence has grammatical errors.", "My face hurts from pretending to like you. How about a cup of shut up.", "Person: Go to hell. Me:I'm packing my bags, just promise me you won't end up there."]
    const getName = () =>{

        let name = userName
        window.speechSynthesis.cancel()
        if (name.toLowerCase() === "meherab" || name.toLowerCase() === "mehrab" ){

            setinsults("display-none")
            alert("Enter you name please")
            
        }
        else if (name !== ""){
            let a_quores = all_quores[Math.floor(Math.random() * all_quores.length)]
            setquotes(name.toUpperCase() + " " +  a_quores.toUpperCase())
            setinsults("insults")
            utter.text = `${name}, ${a_quores}`;
            window.speechSynthesis.speak(utter)
            
        }

        
        else{
            
            setinsults("display-none")
            alert("Enter you name please")

        }
    }

    const hendleCng = (event) =>{

        setUserName(event.target.value)

    }

    return <>

        <div className="container">

            <h2>&#x1F601; Don't take it seriously &#x1F601;</h2>
            <div className={insults}>{quotes}</div>
            <input value={userName} onChange={hendleCng} type="text" id="userName" placeholder='Enter your name'/>
            <button onClick={getName}>Go</button>
            
        </div>




    </>;
}
