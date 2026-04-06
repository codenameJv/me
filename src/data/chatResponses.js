export const greetingMessage =
  "So ayun, you can ask me here for random questions. Note lang po hahaha. Hindi po live chat ito and limited questions lang na I think you might ask? Not sure nga kung aabot ka dito or even open this random link from someone completely random."

const responses = [
  // Relationship status
  {
    keywords: ['single', 'jowa', 'girlfriend', 'gf', 'taken', 'relationship', 'status', 'love life', 'lovelife'],
    text: "Single po hahaha. Hindi naman ako naghahanap actively, pero if the right person comes along, why not di ba? Kaya nga nandito tayo eh 😅",
  },
  // Age / birthday
  {
    keywords: ['age', 'old', 'birthday', 'bday', 'born', 'edad', 'ilang taon', 'kailan'],
    text: "24 years old po ako. Born and raised sa Quezon Province. Hindi ko na sasabihin yung exact birthday ko dito, baka ma-hack pa ako HAHAHA. Pero ask mo na lang sa personal 😉",
  },
  // Location
  {
    keywords: ['taga saan', 'saan ka', 'location', 'where', 'place', 'nakatira', 'tayabas', 'quezon', 'address', 'san ka'],
    text: "City of Tayabas, Quezon Province! Tahimik lang dito, chill vibes. Malapit lang din sa Lucena if ever. Probinsya life pero may city naman na malapit haha.",
  },
  // Work / job
  {
    keywords: ['work', 'job', 'trabaho', 'career', 'profession', 'ginagawa', 'living', 'employed'],
    text: "Software developer po ako. Basically, gumagawa ako ng websites and apps. Fulfilling naman siya. At least yung work ko, pwede kahit saan basta may laptop at wifi haha.",
  },
  // Hobbies
  {
    keywords: ['hobby', 'hobbies', 'fun', 'free time', 'spare time', 'libangan', 'trip', 'interests', 'interest'],
    text: "Mag motor at mag explore ng mga places! Dagat, city lights, scenic roads — lahat trip ko. Mahilig din ako mag cook and mag drawing — arts in general trip ko. Dati gamer ako pero ngayon more on chill na lang, scrolling sa TikTok, and minsan nag cocode pa rin for fun haha.",
  },
  // Motorcycle / scooter
  {
    keywords: ['motorcycle', 'motor', 'bike', 'ride', 'riding', 'scooter'],
    text: "I have a scooter! Trip ko mag lakad lakad mag isa or with friends. 2 accidents na total ko, buhay pa naman HAHAHAHA. Favorite ko yung mga rides na may ocean view or city lights sa gabi.",
  },
  // Cooking
  {
    keywords: ['cook', 'cooking', 'luto', 'lutong', 'kusina', 'recipe', 'chef'],
    text: "Oo! Mahilig ako mag cook. Hindi naman ako chef level pero trip ko mag experiment sa kusina. Satisfying kasi pag nagustuhan yung niluto mo haha. Luto kita someday? 😄",
  },
  // Art / drawing
  {
    keywords: ['art', 'draw', 'drawing', 'sketch', 'paint', 'guhit', 'artwork', 'creative'],
    text: "Mahilig ako mag drawing! Minsan pag may free time, nag ssketch ako kahit random lang. Hindi naman ako super galing pero it's therapeutic for me. Arts in general trip ko talaga.",
  },
  // Looks / appearance
  {
    keywords: ['look', 'hitsura', 'itsura', 'pogi', 'gwapo', 'cute', 'tall', 'height', 'tangkad', 'face', 'mukha', 'pic', 'photo', 'picture', 'selfie'],
    text: "Hmmm, di ko masasagot yan ng objective HAHAHA. Check mo na lang siguro yung TikTok ko or IG. Pero yung height, average lang naman. Hindi ganun ka tangkad, hindi din maliit. Safe answer HAHAHAHA.",
  },
  // Food
  {
    keywords: ['food', 'kain', 'eat', 'favorite food', 'ulam', 'pagkain', 'restaurant', 'gutom', 'hungry', 'fave food'],
    text: "Hindi ako picky eater! Pero kung pipili talaga, yung mga may sabaw — sinigang, bulalo, ganon. Basic Pinoy taste lang haha. Mahilig din ako mag try ng mga random food spots pag nag eexplore.",
  },
  // Music
  {
    keywords: ['music', 'song', 'kanta', 'playlist', 'spotify', 'listen', 'tugtugin', 'artist', 'band', 'genre'],
    text: "Medyo diverse yung taste ko sa music eh. Pero lately more on chill/acoustic and OPM. Minsan naman pag nag momootor, rock or EDM para may energy haha. Depends sa mood talaga.",
  },
  // Type / ideal / gusto
  {
    keywords: ['type', 'ideal', 'gusto', 'hanap', 'hinahanap', 'girl', 'babae', 'preference', 'taste'],
    text: "Honestly, wala naman akong strict na type. Basta yung vibes match, may sense of humor, and kayang mag usap about anything — serious man or kalokohan. Yung comfortable ka lang na maging ikaw ganon.",
  },
  // Love language
  {
    keywords: ['love language', 'language', 'affection', 'mahal', 'pagmamahal', 'sweet', 'clingy'],
    text: "Quality time and acts of service siguro? Yung tipong nandyan ka lang, mag kakwentuhan, mag lalakad or kain — masaya na ko don. Hindi naman ako super clingy pero I make sure na nararamdaman mo na important ka haha.",
  },
  // Why her / bakit
  {
    keywords: ['bakit', 'why', 'ano', 'purpose', 'reason', 'message', 'chat', 'dm', 'tiktok', 'dahilan', 'gawa'],
    text: "Simple lang naman, I find you interesting. Yun lang talaga haha. Kaya nag effort pa ko gumawa nito just to get your attention. Sana naman effective 😅",
  },
  // Personality
  {
    keywords: ['personality', 'describe', 'sino', 'kamusta', 'person', 'attitude', 'ugali', 'traits'],
    text: "Chill lang naman ako as a person. Mahiyain at first pero pag comfortable na, makulit na hahaha. I like deep conversations pero keri din yung walang sense na usapan. Introvert with extrovert tendencies siguro?",
  },
  // Red/green flags
  {
    keywords: ['flag', 'red flag', 'green flag', 'ick', 'deal breaker', 'ayaw', 'turn off', 'turn on'],
    text: "Green flags: I actually listen, I remember small details, and I'll build you a whole website just to say hi HAHAHAHA. Red flags? Hmm, medyo workaholic minsan and I zone out pag nag cocode. Pero fixable naman yun haha.",
  },
  // Social media
  {
    keywords: ['ig', 'instagram', 'facebook', 'fb', 'social media', 'socmed', 'twitter', 'x', 'account', 'follow'],
    text: "Hindi din ako super active sa socmed tbh. Meron naman akong IG and FB pero more on lurker mode lang haha. TikTok yung pinaka active ko, scrolling lang naman mostly. Pero if you want, pwede kita i-add! 😄",
  },
  // Pet
  {
    keywords: ['pet', 'dog', 'cat', 'aso', 'pusa', 'animal', 'hayop', 'fur baby', 'furbaby'],
    text: "Actually, I have 7 dogs and 5 cats hahaha. Pet lover talaga ako eh, di ko kayang walang fur babies sa paligid 😄",
  },
  // Movie / series / show
  {
    keywords: ['movie', 'series', 'show', 'netflix', 'anime', 'watch', 'panoorin', 'pelikula', 'film'],
    text: "Dati mahilig ako mag anime at mag binge ng series. Ngayon medyo tamad na HAHAHA. Pero trip ko yung mga thriller at sci-fi. Pag may marerecommend ka, g lang!",
  },
  // Hello / greetings
  {
    keywords: ['hello', 'hi', 'hey', 'greet', 'sup', 'what\'s up', 'howdy', 'kumusta', 'musta'],
    text: "Huy hello! Nakaabot ka dito ah haha. G lang, tanong ka lang ng kahit ano. Promise, sasagutin ko nang honest... well, as honest as a pre-programmed chat allows HAHAHAHA.",
  },
  // Who / about
  {
    keywords: ['who', 'sino ka', 'about', 'yourself', 'javie', 'javier', 'ikaw'],
    text: "Ako si Javie! 24, taga Tayabas, software developer, and nag eeffort na kilalanin ka through this random website haha. Simple lang naman ako — mahilig mag motor, mag explore, at gumawa ng mga random stuff like this.",
  },
  // Joke / humor
  {
    keywords: ['joke', 'funny', 'humor', 'biro', 'patawa', 'laugh', 'haha'],
    text: "Ay, hindi ako magaling mag joke sa text eh HAHAHA. Mas funny ako in person promise! Pero eto try ko: Why did the programmer quit his job? Kasi walang arrays. Get it? A raise? HAHAHAHA okay sorry.",
  },
  // Thank you / thanks
  {
    keywords: ['thank', 'thanks', 'salamat', 'appreciate'],
    text: "Hala, ikaw pa nag tthank you? Ikaw nga yung nag open ng random link from a stranger eh HAHAHA. Thank YOU for giving this a chance! 😊",
  },
]

const fallbacks = [
  "I don't have a reply for that eh, maybe you can ask me directly 😉",
]

export function findResponse(input) {
  const lower = input.toLowerCase()
  for (const entry of responses) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.text
    }
  }
  return fallbacks[Math.floor(Math.random() * fallbacks.length)]
}
