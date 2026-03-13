// ========================================================================
// נושא: אנגלית (English)
// קטגוריה: Literature (אנגלית ספרותית לתיכון)
// פעימה 1: 30 שאלות - A Summer's Reading, The Enemy, The Road Not Taken
// רמה: הכנה לבגרויות (Modules B, D, F) - ניתוח ספרותי ו-HOTS
// קובץ מתוקן ובטוח (ללא שגיאות תחביר)
// ========================================================================

const questionsDB = [

    // ---------------------------------------------------------
    // Subtopic 1: A Summer's Reading (Bernard Malamud)
    // ---------------------------------------------------------

    {
        topic: "english",
        subTopic: "A Summer's Reading (Bernard Malamud)",
        question_text: `<strong>Basic Setting & Character:</strong><br>
        Why did George Stoyonovich quit high school at the age of sixteen?`,
        options: [
            "<span dir=\"ltr\">He left on an impulse because he ran out of patience and felt the teachers didn't respect him.</span>",
            "<span dir=\"ltr\">He had to find a full-time job to support his sister Sophie and his father.</span>",
            "<span dir=\"ltr\">He was offered a very good job as a carpenter in a big neighborhood.</span>",
            "<span dir=\"ltr\">His father forced him to leave school to work in a fish market.</span>"
        ],
        correctAnswer: 0,
        hint: "ג'ורג' הוא דמות אימפולסיבית שמחפשת כבוד מהיר. הוא לא עזב בגלל כסף או משפחה, אלא בגלל בעיה רגשית עם המסגרת.",
        solution: `<strong>הסבר מלא (מניעיו של ג'ורג'):</strong><br>
        בתחילת הסיפור מוצג ג'ורג' כנער צעיר, מתוסכל וחסר סבלנות.<br>
        הוא עזב את בית הספר <strong>"on an impulse" (מדחף רגשי רגעי)</strong> מכיוון שלטענתו <strong>"he ran out of patience"</strong> (נגמרה לו הסבלנות) והוא הרגיש שהמורים אינם מעניקים לו כבוד (respect).<br><br>
        החיפוש אחר "כבוד" (Respect) הוא המוטיב המרכזי (Theme) שילווה את ג'ורג' לאורך כל הסיפור.`
    },
    {
        topic: "english",
        subTopic: "A Summer's Reading (Bernard Malamud)",
        question_text: `<strong>The Lie:</strong><br>
        What lie does George tell Mr. Cattanzara when they meet on the street at night?`,
        options: [
            "<span dir=\"ltr\">He tells him that he is reading 100 books over the summer to pick up his education.</span>",
            "<span dir=\"ltr\">He tells him that he found a great job working in a large factory.</span>",
            "<span dir=\"ltr\">He tells him that he is going back to high school in September.</span>",
            "<span dir=\"ltr\">He tells him that he won the lottery and is buying a house for his sister.</span>"
        ],
        correctAnswer: 0,
        hint: "השקר הוא זה שנותן לסיפור את שמו ('קריאת קיץ'). ג'ורג' ממציא רשימה דמיונית.",
        solution: `<strong>הסבר מלא (השקר שמניע את העלילה):</strong><br>
        ג'ורג' מרגיש נחות ליד מר קטנזארה (אדם אינטליגנטי שקורא את הניו יורק טיימס). כדי להרשים אותו ולהשיג כבוד מהיר ללא מאמץ, ג'ורג' משקר ואומר לו:<br>
        <span dir="ltr"><strong>"I'm reading a hundred books this summer."</strong></span><br><br>
        המספר 100 הוא כמובן מוגזם, ומייצג את נטייתו של ג'ורג' לפנטזיות (daydreaming) במקום להציב יעדים מציאותיים קטנים.`
    },
    {
        topic: "english",
        subTopic: "A Summer's Reading (Bernard Malamud)",
        question_text: `<strong>HOTS: Uncovering Motives (חשיפת מניעים):</strong><br>
        <em>Why</em> did George lie to Mr. Cattanzara instead of telling the truth?`,
        options: [
            "<span dir=\"ltr\">Because he wanted Mr. Cattanzara to respect him, and he wanted to feel important without actually doing the hard work.</span>",
            "<span dir=\"ltr\">Because he wanted Mr. Cattanzara to give him money to buy books.</span>",
            "<span dir=\"ltr\">Because Mr. Cattanzara threatened to tell his father that he was not working.</span>",
            "<span dir=\"ltr\">Because George actually believed he had already read 100 books.</span>"
        ],
        correctAnswer: 0,
        hint: "ג'ורג' חי בפנטזיות. הוא רוצה את התוצאה (כבוד והערכה) מבלי לעבור את התהליך הקשה (לקרוא באמת).",
        solution: `<strong>הסבר מלא (Uncovering Motives):</strong><br>
        מיומנות חשיפת המניעים (HOTS) דורשת מאיתנו להבין את הפסיכולוגיה של הדמות.<br><br>
        המוטיבציה (Motive) של ג'ורג' לשקר נובעת מתוך חוסר הביטחון שלו. הוא רוצה לזכות ב<strong>כבוד (Respect)</strong> ובהערכה של סביבתו (ובמיוחד של דמות אב כמו מר קטנזארה), אבל הוא <strong>עצלן מדי ופסיבי מדי</strong> מכדי לעבוד קשה בשביל זה. השקר הוא "קיצור דרך" לתחושת ההצלחה שהוא מדמיין (The American Dream).`
    },
    {
        topic: "english",
        subTopic: "A Summer's Reading (Bernard Malamud)",
        question_text: `<strong>Character Reaction:</strong><br>
        How does the neighborhood react after Mr. Cattanzara spreads the rumor that George is reading 100 books?`,
        options: [
            "<span dir=\"ltr\">People start treating George with respect; the shoemaker and the butcher smile at him, and Sophie gives him a weekly allowance.</span>",
            "<span dir=\"ltr\">The neighborhood ignores him completely because they know he is lying.</span>",
            "<span dir=\"ltr\">They laugh at him because 100 books is an impossible number.</span>",
            "<span dir=\"ltr\">Mr. Cattanzara's wife forces George to come to her house and read to her.</span>"
        ],
        correctAnswer: 0,
        hint: "השקר עבד טוב מדי. ג'ורג' קיבל בדיוק את מה שהוא חיפש מהשכנים.",
        solution: `<strong>הסבר מלא (השפעת השמועה):</strong><br>
        לאחר שמר קטנזארה מפיץ את השמועה בעילום שם (rumor), ג'ורג' הופך ל"גיבור השכונה".<br>
        אנשים מחייכים אליו ברחוב (the shoemaker, the butcher), ואחותו סופי, שתמיד כעסה עליו שהוא בטלן, גאה בו כל כך עד שהיא מתחילה לתת לו דמי כיס שבועיים (<span dir="ltr">an allowance of a buck a week</span>).<br>
        זה יוצר לג'ורג' קונפליקט פנימי (Internal Conflict): מצד אחד הוא נהנה מהכבוד, מצד שני רגשות האשם (guilt) אוכלים אותו כי הוא יודע שזה שקר.`
    },
    {
        topic: "english",
        subTopic: "A Summer's Reading (Bernard Malamud)",
        question_text: `<strong>Climax of the Story:</strong><br>
        What happens when George and Mr. Cattanzara meet for the second time, when Mr. Cattanzara is drunk?`,
        options: [
            "<span dir=\"ltr\">Mr. Cattanzara offers George a nickel to buy lemon ice, recognizing he is still acting like a child, and asks him to name one book he read.</span>",
            "<span dir=\"ltr\">Mr. Cattanzara hits George and yells at him in front of the whole neighborhood for being a liar.</span>",
            "<span dir=\"ltr\">Mr. Cattanzara ignores George completely and walks past him.</span>",
            "<span dir=\"ltr\">George finally tells the truth and they become best friends immediately.</span>"
        ],
        correctAnswer: 0,
        hint: "מר קטנזארה לא צועק, אלא מתנהג אליו כמו אל ילד קטן ('לך תקנה לך ארטיק לימון'). זה יותר כואב מכל צעקה.",
        solution: `<strong>הסבר מלא (נקודת השיא - Climax):</strong><br>
        המפגש השני הוא שיא המתח. מר קטנזארה שיכור, והוא אומר לג'ורג': <span dir="ltr"><strong>"Go buy yourself a lemon ice, Georgie."</strong></span><br><br>
        זהו רגע משפיל מאוד. כשהוא נותן לו חמישה סנט (a nickel) לארטיק לימון, הוא רומז לג'ורג': <em>"רצית כבוד של מבוגר, אבל אתה מתנהג כמו ילד קטן שחי באשליות, אז אקנה לך ממתק של ילדים"</em>.<br>
        לאחר מכן הוא שואל אותו בלחש אם הוא יכול לנקוב בשם של ספר אחד, וג'ורג' לא מצליח (מה שמאשר למר קטנזארה שג'ורג' משקר).`
    },
    {
        topic: "english",
        subTopic: "A Summer's Reading (Bernard Malamud)",
        question_text: `<strong>The Ultimate Warning:</strong><br>
        What does Mr. Cattanzara mean when he tells George: <span dir="ltr">"George, don't do what I did"</span>?`,
        options: [
            "<span dir=\"ltr\">He warns George not to waste his potential and end up in a dead-end job reading newspapers, just dreaming about a better life.</span>",
            "<span dir=\"ltr\">He warns George not to drink alcohol because it ruins marriages.</span>",
            "<span dir=\"ltr\">He warns George not to lie to his sister Sophie about having a job.</span>",
            "<span dir=\"ltr\">He tells George not to read so many books because it makes you crazy.</span>"
        ],
        correctAnswer: 0,
        hint: "מר קטנזארה הוא ההשתקפות (מראה) של העתיד של ג'ורג'. אדם חכם, שקורא המון, אבל עובד בעבודה שחורה (מחליף אסימונים ברכבת התחתית).",
        solution: `<strong>הסבר מלא (המסר של הסיפור):</strong><br>
        משפט זה הוא לב הסיפור! <br>
        מר קטנזארה הוא אדם אינטליגנטי שיודע הרבה, אבל הוא החמיץ את ההזדמנויות שלו בחיים (wasted potential). כעת הוא עובד בעבודה פשוטה כקופאי (change maker) ושותה כדי לשכוח את תסכוליו.<br><br>
        הוא רואה את עצמו בג'ורג'. האזהרה שלו היא: <strong>"אל תהיה כמוני. אל תבזבז את הפוטנציאל שלך על פנטזיות. קח את החיים בידיים לפני שיהיה מאוחר מדי, אחרת תסיים כמוני - מתחרט ושותה."</strong>`
    },
    {
        topic: "english",
        subTopic: "A Summer's Reading (Bernard Malamud)",
        question_text: `<strong>HOTS: Inferring (הסקת מסקנות):</strong><br>
        After the confrontation, George locks himself in his room for a week. When he finally comes out, he discovers people <u>still</u> respect him. Why did Mr. Cattanzara tell the neighbors George finished reading the books?`,
        options: [
            "<span dir=\"ltr\">To give George a second chance and trap him into doing the right thing. The respect forces George to finally go to the library so he won't lose face.</span>",
            "<span dir=\"ltr\">Because Mr. Cattanzara was so drunk he actually forgot the truth and believed George.</span>",
            "<span dir=\"ltr\">Because he wanted to embarrass George in front of a larger group later.</span>",
            "<span dir=\"ltr\">Because Sophie paid Mr. Cattanzara to lie for her brother.</span>"
        ],
        correctAnswer: 0,
        hint: "זה מהלך גאוני של מר קטנזארה. אם הוא היה חושף את השקר, ג'ורג' היה נשבר לתמיד. במקום זאת, הוא מספר שקר שמכריח את ג'ורג' להוכיח את עצמו.",
        solution: `<strong>הסבר מלא (הפסיכולוגיה של מר קטנזארה):</strong><br>
        לאחר שג'ורג' נתפס בשקר, הוא בטוח שהשכונה תלעג לו (לכן הוא מסתגר בחדר). כשהוא יוצא, הוא המום לגלות שמר קטנזארה סיפר לכולם שהוא <strong>סיים</strong> את הספרים.<br><br>
        <strong>למה הוא עשה את זה?</strong> מר קטנזארה השתמש בפסיכולוגיה הפוכה. הוא נתן לג'ורג' את ה<strong>כבוד (Respect)</strong> כמקדמה. עכשיו, ג'ורג' מרגיש חובה פנימית עמוקה להצדיק את האמון הזה. הבושה (shame) והרצון לא לאכזב שוב, דוחפים את ג'ורג' למעשה האקטיבי הראשון בחייו - ללכת לספרייה.`
    },
    {
        topic: "english",
        subTopic: "A Summer's Reading (Bernard Malamud)",
        question_text: `<strong>Symbolism:</strong><br>
        What does <strong>the park</strong> symbolize for George at the beginning of the story?`,
        options: [
            "<span dir=\"ltr\">It symbolizes his fantasy world, his escape from reality, and his desire for a better, peaceful life with a private house.</span>",
            "<span dir=\"ltr\">It symbolizes his hard work and dedication to education.</span>",
            "<span dir=\"ltr\">It symbolizes his fear of the neighbors and Mr. Cattanzara.</span>",
            "<span dir=\"ltr\">It symbolizes the school he ran away from.</span>"
        ],
        correctAnswer: 0,
        hint: "ג'ורג' הולך לפארק בכל לילה כי השכונה שלו מכוערת, שבורה וחמה. בפארק הוא מסתכל על העצים ומדמיין.",
        solution: `<strong>הסבר מלא (Symbolism - הפארק):</strong><br>
        הפארק הוא סמל (Symbol) מובהק לאסקפיזם (בריחה מהמציאות).<br>
        דירתו של ג'ורג' מתוארת כחמה, צפופה, מעל חנות קצבים בשכונה ענייה בניו יורק.<br><br>
        כשהוא הולך בלילה לפארק, הוא בורח מהמציאות הקשה ומשקיע עצמו ב<strong>חלומות בהקיץ (daydreaming)</strong>. שם הוא מדמיין שיש לו עבודה טובה, בית פרטי עם מרפסת (a house with a porch), ואישה שאוהבת אותו. הפארק מסמל את ה"חלום האמריקאי" של ג'ורג' שלא מגובה במעשים.`
    },
    {
        topic: "english",
        subTopic: "A Summer's Reading (Bernard Malamud)",
        question_text: `<strong>The Climax/Resolution:</strong><br>
        What is the significance of the final sentence of the story: <span dir="ltr">"He counted off a hundred, then sat down to read"</span>?`,
        options: [
            "<span dir=\"ltr\">It shows that George finally takes responsibility, shifts from passivity to activity, and begins the real process of changing his life.</span>",
            "<span dir=\"ltr\">It proves that George only went to the library to read math books about counting.</span>",
            "<span dir=\"ltr\">It shows he is still lying, as nobody can read a hundred books in one sitting.</span>",
            "<span dir=\"ltr\">It means he gave up and decided to go to sleep in the library.</span>"
        ],
        correctAnswer: 0,
        hint: "לאורך כל הקיץ ג'ורג' רק 'דיבר' ודמיין. בסתיו, כשהוא יושב בספרייה ומתחיל לקרוא, זו הפעולה הפיזית האמיתית הראשונה שלו בסיפור.",
        solution: `<strong>הסבר מלא (התפתחות הדמות בסיום):</strong><br>
        הסיפור מסתיים בנימה אופטימית של שינוי (Coming of age).<br>
        ג'ורג' היה פסיבי במשך כל הקיץ (רק טייל, הקשיב לרדיו וחלם). העובדה שבסוף הסתיו הוא קם, הולך פיזית לספרייה, מוציא מאה ספרים, וחשוב מכל - <strong>יושב לקרוא (sat down to read)</strong>, מראה שהוא הפנים את הלקח של מר קטנזארה.<br><br>
        הוא מבין שכדי לקבל כבוד והצלחה, אי אפשר רק לחלום (to dream), אלא חייבים לעשות מעשה אקטיבי (taking responsibility for his life).`
    },
    {
        topic: "english",
        subTopic: "A Summer's Reading (Bernard Malamud)",
        question_text: `<strong>HOTS: Comparing and Contrasting (השוואה):</strong><br>
        How is George's character <u>at the beginning</u> of the summer different from his character <u>at the end</u> of the story (the fall)?`,
        options: [
            "<span dir=\"ltr\">At the beginning, he is passive, lives in illusions, and looks for shortcuts to get respect. By the end, he is active, takes responsibility, and faces reality.</span>",
            "<span dir=\"ltr\">At the beginning he reads books, but at the end he decides to become a shoemaker.</span>",
            "<span dir=\"ltr\">At the beginning he is rich, but at the end he loses all his money.</span>",
            "<span dir=\"ltr\">At the beginning he respects Mr. Cattanzara, but at the end he hates him.</span>"
        ],
        correctAnswer: 0,
        hint: "הסיפור הוא 'סיפור התבגרות'. מתחיל כילד שמשקר כדי לקבל פרס, ומסתיים כגבר שלוקח אחריות ומתיישב לעבוד קשה.",
        solution: `<strong>הסבר מלא (Comparing and Contrasting):</strong><br>
        כדי להשוות את דמותו של ג'ורג', נסתכל על הקשת העלילתית שלו (Character Arc):<br><br>
        - <strong>תחילת הקיץ (The Beginning):</strong> פסיבי, שקרן, מתרץ תירוצים (excuses), חי בפנטזיות, רוצה כבוד ללא מאמץ.<br>
        - <strong>הסתיו (The End):</strong> הולך לספרייה. הופך לאקטיבי, מפסיק להתחבא בחדר, ומוכן להתמודד עם המציאות והעבודה הקשה הדרושה להשגת החלום האמריקאי (Takes responsibility).`
    },

    // ---------------------------------------------------------
    // Subtopic 2: The Enemy (Pearl S. Buck)
    // ---------------------------------------------------------

    {
        topic: "english",
        subTopic: "The Enemy (Pearl S. Buck)",
        question_text: `<strong>Historical and Geographical Setting:</strong><br>
        In what context and location does the story "The Enemy" take place?`,
        options: [
            "<span dir=\"ltr\">In Japan, during World War II, on the coast near Sadao's house.</span>",
            "<span dir=\"ltr\">In the United States, during the Vietnam War, in a hospital.</span>",
            "<span dir=\"ltr\">In China, during the 19th century, on a battlefield.</span>",
            "<span dir=\"ltr\">In Japan, during peacetime, at a medical university.</span>"
        ],
        correctAnswer: 0,
        hint: "הסיפור עוסק ברופא יפני שמוצא שבוי מלחמה אמריקאי. זה מתרחש בתקופה שבה יפן וארה'ב היו אויבות מרות.",
        solution: `<strong>הסבר מלא (רקע וסביבה עלילתית):</strong><br>
        הרקע (Setting) קריטי להבנת הסיפור. העלילה מתרחשת ב<strong>יפן (Japan)</strong>, בביתו של ד"ר סדאו הממוקם על צוק מעל הים.<br><br>
        הזמן הוא <strong>מלחמת העולם השנייה (World War II)</strong>, תקופה שבה יפן וארה"ב נמצאות במלחמה עקובה מדם. הקשר זה יוצר את הקונפליקט המרכזי: הגבר האמריקאי הנשטף לחוף הוא בפירוש "אויב" מובהק של המדינה (The Enemy).`
    },
    {
        topic: "english",
        subTopic: "The Enemy (Pearl S. Buck)",
        question_text: `<strong>The Core Conflict (הקונפליקט המרכזי):</strong><br>
        What is the main internal conflict that Dr. Sadao faces when he finds the wounded American soldier?`,
        options: [
            "<span dir=\"ltr\">The conflict between his duty as a doctor to save a life, and his duty as a patriotic Japanese citizen to hand the enemy over to the police.</span>",
            "<span dir=\"ltr\">The conflict between loving his wife Hana and wanting to leave her for an American woman.</span>",
            "<span dir=\"ltr\">The conflict between moving back to America to study or staying in Japan.</span>",
            "<span dir=\"ltr\">The conflict between asking his servants for money or paying them more.</span>"
        ],
        correctAnswer: 0,
        hint: "מצד אחד, שבועת הרופאים שלו אומרת לו להציל חיים. מצד שני, חוקי המדינה שלו אומרים לו שאם הוא עוזר לאמריקאי, הוא בוגד ומועמד להוצאה להורג.",
        solution: `<strong>הסבר מלא (Internal Conflict):</strong><br>
        סדאו קרוע בין שני כוחות אדירים (דילמה מוסרית):<br><br>
        1. <strong>חובתו הרפואית והאנושית (Medical and Human Duty):</strong> הוא אומן באמריקה להציל חיים, ללא קשר לזהות המטופל ("שבועת הרופאים").<br>
        2. <strong>חובתו הלאומית / פטריוטיות (Patriotic Duty):</strong> הוא אזרח יפני בזמן מלחמה. הגנה על אמריקאי היא בגדר בגידה (Treason) שדינה מוות.<br><br>
        זהו הקונפליקט הפנימי המניע את כל יצירת המופת הזו.`
    },
    {
        topic: "english",
        subTopic: "The Enemy (Pearl S. Buck)",
        question_text: `<strong>Character Analysis (The General):</strong><br>
        Why did the old General keep Dr. Sadao in Japan instead of sending him abroad with the Japanese troops?`,
        options: [
            "<span dir=\"ltr\">Because the General was very sick, trusted only Sadao to perform surgery on him, and was completely selfish.</span>",
            "<span dir=\"ltr\">Because Sadao was a bad doctor and the military didn't want him.</span>",
            "<span dir=\"ltr\">Because Sadao's father paid the General to keep him at home.</span>",
            "<span dir=\"ltr\">Because Sadao was secretly working as an American spy.</span>"
        ],
        correctAnswer: 0,
        hint: "הגנרל אינו חומל או דואג לסדאו. הוא משאיר אותו ביפן מסיבות אנוכיות (אגואיסטיות) בלבד - הבריאות שלו עצמו.",
        solution: `<strong>הסבר מלא (האנוכיות של הגנרל):</strong><br>
        סדאו לא נשלח לחזית במלחמה (עם החיילים) מסיבה אחת ויחידה: <strong>הגנרל הזקן (The old General)</strong> סובל מבעיה רפואית קשה ועלול להזדקק לניתוח חירום.<br><br>
        הגנרל הוא אדם אכזר (מכה את אשתו) ו<strong>אנוכי (Selfish)</strong> לחלוטין. הוא אינו סומך על אף רופא אחר ביפן (אלו שלמדו בגרמניה), אלא רק על המיומנות של סדאו שלמד באמריקה. האנוכיות הזו של הגנרל היא מה שמציל את סדאו מאוחר יותר בסיפור.`
    },
    {
        topic: "english",
        subTopic: "The Enemy (Pearl S. Buck)",
        question_text: `<strong>The Servants' Reaction (תגובת המשרתים):</strong><br>
        How do the servants react to Sadao and Hana's decision to treat the American prisoner?`,
        options: [
            "<span dir=\"ltr\">They are frightened, very nationalistic, and superstitious. They refuse to help, claiming the sea wanted him dead, and eventually they leave the house.</span>",
            "<span dir=\"ltr\">They are very supportive and help Sadao operate on the soldier out of human kindness.</span>",
            "<span dir=\"ltr\">They immediately call the police and get Sadao arrested.</span>",
            "<span dir=\"ltr\">They steal Sadao's money and run away because they hate the Americans.</span>"
        ],
        correctAnswer: 0,
        hint: "המשרתים מייצגים את 'העם היפני הפשוט' – הם מסורתיים, מאמינים באמונות תפלות (הים רצה אותו מת), ורואים באמריקאי שד. הם לא מוכנים להיות שותפים לפשע.",
        solution: `<strong>הסבר מלא (תפקיד המשרתים בסיפור):</strong><br>
        המשרתים (הטבחית, הגנן, והאומנת יומי) מייצגים את הפטריוטיות והאמונות התפלות של יפן המסורתית.<br><br>
        הם מתנגדים בתוקף לנוכחות ה"אויב הלבן" בבית. הגנן אפילו טוען שיש לכך משמעות מיסטית: "הים ניסה להרוג אותו, אם תציל אותו, הים ינקום בך".<br>
        הם <strong>מסרבים לעזור להאנה</strong> (יומי מסרבת לשטוף את האמריקאי), ובסופו של דבר הם פשוט <strong>עוזבים את הבית (leave the house)</strong> ביום השביעי במחאה.`
    },
    {
        topic: "english",
        subTopic: "The Enemy (Pearl S. Buck)",
        question_text: `<strong>HOTS: Explaining Patterns (הסבר תבניות התנהגות):</strong><br>
        Throughout the surgery, Sadao refers to the American soldier as "my friend". Why is this pattern of speech significant?`,
        options: [
            "<span dir=\"ltr\">It shows that when Sadao acts as a doctor, he forgets national borders and treats his patient purely as a human being, acting on habit from his training in America.</span>",
            "<span dir=\"ltr\">It shows that Sadao secretly knows the American from his days studying in college in America.</span>",
            "<span dir=\"ltr\">It proves that Sadao is actually a traitor to Japan and loves Americans.</span>",
            "<span dir=\"ltr\">It is a sarcastic remark meant to hurt the soldier before killing him.</span>"
        ],
        correctAnswer: 0,
        hint: "כרופא מנתח, סדאו נכנס ל'זון' (Zone). ברגע שהוא מתחיל לנתח, האדם שעל השולחן מפסיק להיות 'אויב' וחוזר להיות פשוט 'פציינט/אדם שצריך עזרה'.",
        solution: `<strong>הסבר מלא (מיומנות חשיבה: Patterns):</strong><br>
        בזמן הניתוח הקשה להוצאת הקליע (bullet), סדאו שוכח לחלוטין שמדובר באויב מלחמה וממלמל לעצמו "My friend" (חברי).<br><br>
        זה מעיד על ההתניה והמקצועיות העמוקה שלו כרופא (The Doctor's Instinct). כאשר הוא מתרכז ברפואה, <strong>כל גבולות הגזע והלאום נמחקים</strong>. ברגע זה מנצחת ה"אנושיות" (Humanity) שבו על פני הפטריוטיות היפנית.`
    },
    {
        topic: "english",
        subTopic: "The Enemy (Pearl S. Buck)",
        question_text: `<strong>The General's Promise:</strong><br>
        When Sadao finally confesses to the General about the prisoner, what does the General promise to do?`,
        options: [
            "<span dir=\"ltr\">He promises to send his private assassins to kill the American quietly at night and remove the body, saving Sadao from arrest.</span>",
            "<span dir=\"ltr\">He promises to arrest Sadao immediately for treason.</span>",
            "<span dir=\"ltr\">He promises to help the American escape back to his country.</span>",
            "<span dir=\"ltr\">He promises to send the Japanese police to capture the soldier and put him in jail.</span>"
        ],
        correctAnswer: 0,
        hint: "הגנרל צריך את סדאו כרופא אישי שלו, לכן הוא לא יכול לתת לו להיכנס לכלא. הוא מציע פתרון אכזרי אך שקט - מתנקשים (assassins).",
        solution: `<strong>הסבר מלא (ההבטחה של הגנרל):</strong><br>
        סדאו מבין שהסכנה למשפחתו גדולה (המשרתים עזבו) והולך לדווח לגנרל.<br>
        הגנרל, מתוך אנוכיות טהורה (הוא זקוק לסדאו חי כדי שינתח אותו), מציע תוכנית קרה:<br>
        <span dir="ltr">"I will send my private <strong>assassins</strong> tonight or tomorrow night... they will kill him and remove the body."</span><br>
        סדאו מסכים ונשאר ער שלוש לילות בחרדה, מחכה למתנקשים. <strong>אבל הגנרל חולה, ושוכח מההבטחה!</strong>`
    },
    {
        topic: "english",
        subTopic: "The Enemy (Pearl S. Buck)",
        question_text: `<strong>Resolution (סיום העלילה):</strong><br>
        How does Sadao ultimately solve the problem of the American prisoner (Tom)?`,
        options: [
            "<span dir=\"ltr\">He gives him his personal boat, food, water, and a flashlight, and helps him escape to a nearby island to wait for a Korean fishing boat.</span>",
            "<span dir=\"ltr\">He poisons him during the final medical checkup.</span>",
            "<span dir=\"ltr\">He calls the police because the General forgot to send the assassins.</span>",
            "<span dir=\"ltr\">He lets the servants return and kill the American.</span>"
        ],
        correctAnswer: 0,
        hint: "לאחר שהמתנקשים לא הגיעו, סדאו מבין שהוא לא מסוגל להיות שותף לרצח. הוא בוחר בפתרון אקטיבי של הצלה.",
        solution: `<strong>הסבר מלא (הבחירה הסופית של סדאו):</strong><br>
        לאחר 3 לילות של חרדה שבהם המתנקשים לא הגיעו, סדאו מבין שהוא לא יכול יותר לשאת את הנטל הנפשי, והוא <strong>לא מסוגל לרצוח אדם (או לאפשר את רציחתו) לאחר שהציל אותו</strong>.<br><br>
        הוא לוקח את גורלו בידיו ועוזר לטום (האמריקאי) לברוח: הוא מספק לו סירה קטנה, ציוד, מזון, ומנחה אותו לשוט לאי סמוך ולחכות שם לספינת דייגים קוריאנית. (ואומר לו לאותת לו בפנס פעמיים אם האוכל נגמר). זה מוכיח את הניצחון הסופי של ההומניזם על הפטריוטיות.`
    },
    {
        topic: "english",
        subTopic: "The Enemy (Pearl S. Buck)",
        question_text: `<strong>HOTS: Distinguishing Different Perspectives (הבחנה בין נקודות מבט):</strong><br>
        How is Hana’s attitude towards the American prisoner different from the servants' attitude?`,
        options: [
            "<span dir=\"ltr\">Although Hana is also prejudiced and repulsed by the American, her humanity and loyalty to her husband force her to help him (like washing him). The servants lack this humanity and entirely refuse.</span>",
            "<span dir=\"ltr\">Hana loves Americans because she studied in the USA, while the servants hate them.</span>",
            "<span dir=\"ltr\">Hana wants to kill the American immediately, but the servants want to save him for ransom money.</span>",
            "<span dir=\"ltr\">There is no difference; both Hana and the servants refuse to touch the American at all.</span>"
        ],
        correctAnswer: 0,
        hint: "האנה (אשתו של סדאו) ממש לא אוהבת את האמריקאי (היא נגעלת ממנו ומהדם שלו). אבל בניגוד למשרתים שפשוט עזבו, אצלה האנושיות והמסירות לבעלה גוברות על הגזענות.",
        solution: `<strong>הסבר מלא (מיומנות הבחנה בין נקודות מבט):</strong><br>
        האנה (Hana) היא הדמות האנושית והמורכבת ביותר בסיפור.<br>
        כמו המשרתים, גם היא שטופת אמונות קדומות, והיא <strong>נגעלת (repulsed)</strong> מהאמריקאי הלבן. כשהיא נאלצת לשטוף אותו, היא חשה בחילה.<br><br>
        עם זאת, בניגוד למשרתים (שרואים בשבוי רק שד / אויב), האנה רואה בו <strong>אדם פצוע שסובל</strong>. היא מרחמת עליו בעל כורחה, ובנוסף היא עומדת לצד בעלה מתוך נאמנות עמוקה. ההומניזם שלה, גם אם הוא מלא בקונפליקטים, מבדיל אותה מהעיוורון של המשרתים.`
    },
    {
        topic: "english",
        subTopic: "The Enemy (Pearl S. Buck)",
        question_text: `<strong>Symbolism of the Sea / Fog:</strong><br>
        What might the thick fog (ערפל) that hides the house from the sea symbolize in the story?`,
        options: [
            "<span dir=\"ltr\">It symbolizes secrecy, the blurring of lines between friend and enemy, and Sadao's internal confusion and moral blindness.</span>",
            "<span dir=\"ltr\">It symbolizes the strength of the Japanese military preventing American ships from entering.</span>",
            "<span dir=\"ltr\">It symbolizes Hana's great cooking skills, creating smoke in the kitchen.</span>",
            "<span dir=\"ltr\">It symbolizes the bad weather that killed the soldier's friends.</span>"
        ],
        correctAnswer: 0,
        hint: "כשיש ערפל, קשה לראות ברור (מי חבר ומי אויב). הערפל מגיע יחד עם האמריקאי ועוטף את הבית בסודות ואפלה מוסרית.",
        solution: `<strong>הסבר מלא (סמליות הערפל - Symbolism):</strong><br>
        האמריקאי מגיע מהים (המסמל את הסכנה והעולם החיצון), ומיד לאחר מכן <strong>ערפל כבד (thick fog)</strong> עולה ומכסה את הבית.<br><br>
        הערפל משמש כסמל כפול:<br>
        1. <strong>סודיות (Secrecy):</strong> הערפל "שומר" עליהם ומסתיר את הפשע שלהם מעיני השלטונות.<br>
        2. <strong>בלבול מוסרי (Moral Confusion):</strong> בתוך הערפל, אי אפשר לראות את המציאות בשחור ולבן. הגבולות בין "אויב" ל"בן אדם" מטשטשים, בדיוק כמו שקורה בתוך מוחו של סדאו.`
    },
    {
        topic: "english",
        subTopic: "The Enemy (Pearl S. Buck)",
        question_text: `<strong>The Final Thought:</strong><br>
        At the very end of the story, looking out at the sea, Sadao thinks of all the Americans he knew (his professor, his landlady, his teacher) and asks himself:<br>
        <span dir="ltr" style="font-size: 1.1em; color: #1e40af;">"I wonder why I could not kill him?"</span><br>
        What is the true answer to his question?`,
        options: [
            "<span dir=\"ltr\">He couldn't kill him because universal human values (saving lives) are ultimately stronger than political hatred and racism.</span>",
            "<span dir=\"ltr\">He couldn't kill him because he was afraid the American government would arrest him after the war.</span>",
            "<span dir=\"ltr\">He couldn't kill him because he didn't have a gun or a knife in his house.</span>",
            "<span dir=\"ltr\">He couldn't kill him because Tom promised to pay him a million dollars.</span>"
        ],
        correctAnswer: 0,
        hint: "סדאו מנסה לשכנע את עצמו שהוא 'שונא אמריקאים' (כי הם גזענים ויהירים לפי זכרונותיו מהקולג'). אבל הפעולות שלו מוכיחות את ההפך - האנושיות שלו חזקה משנאתו.",
        solution: `<strong>הסבר מלא (המסר האוניברסלי של היצירה):</strong><br>
        המשפט האחרון מסכם את <strong>הנושא המרכזי (Theme)</strong> של הסיפור.<br>
        סדאו מזכיר לעצמו כמה סבל מאמריקאים גזענים בעבר ("The white people are repulsive"), והוא באמת ניסה לשנוא את השבוי.<br><br>
        אך התשובה לשאלתו "מדוע לא יכולתי להרוג אותו?" היא ש<strong>השנאה הלאומנית היא מלאכותית ונלמדת, בעוד שהרצון האנושי להגן על חיי אדם (קדושת החיים) הוא טבעי וחזק יותר מכל פוליטיקה או מלחמה.</strong>`
    },


    // ---------------------------------------------------------
    // Subtopic 3: The Road Not Taken (Robert Frost)
    // ---------------------------------------------------------

    {
        topic: "english",
        subTopic: "The Road Not Taken (Robert Frost)",
        question_text: `<strong>Literal Setting (המשמעות המילולית של השיר):</strong><br>
        Literally speaking, where is the speaker standing in the first stanza of the poem?`,
        options: [
            "<span dir=\"ltr\">He is standing in a yellow wood at a point where the road divides (forks) into two different paths.</span>",
            "<span dir=\"ltr\">He is driving a car on a modern highway wondering which exit to take.</span>",
            "<span dir=\"ltr\">He is sitting in a classroom deciding which career to choose.</span>",
            "<span dir=\"ltr\">He is lost in a dark, scary forest at midnight without a map.</span>"
        ],
        correctAnswer: 0,
        hint: "השורה הראשונה בשיר היא: 'Two roads diverged in a yellow wood'.",
        solution: `<strong>הסבר מלא (רובד מילולי לעומת מטפורי):</strong><br>
        בניתוח שירה, עלינו להבדיל בין מה שכתוב מילולית (Literal) לבין המשמעות הנסתרת.<br><br>
        מילולית, הדובר בשיר (The speaker / The traveler) עומד <strong>בתוך יער צהוב</strong> (yellow wood - כנראה בעונת הסתיו), ומגיע לצומת T שבה הדרך המרכזית <strong>מתפצלת לשתי דרכים שונות</strong> (Two roads diverged).`
    },
    {
        topic: "english",
        subTopic: "The Road Not Taken (Robert Frost)",
        question_text: `<strong>The Dilemma (הקונפליקט של הדובר):</strong><br>
        What is the speaker's main feeling and problem as he stands at the fork in the road?`,
        options: [
            "<span dir=\"ltr\">He feels sorry that he cannot travel both roads and be one traveler. He stands for a long time trying to decide.</span>",
            "<span dir=\"ltr\">He is angry because there are no signs telling him where to go.</span>",
            "<span dir=\"ltr\">He is happy because he knows exactly which road leads to success.</span>",
            "<span dir=\"ltr\">He feels scared because there are dangerous animals in the yellow wood.</span>"
        ],
        correctAnswer: 0,
        hint: "השורה השנייה אומרת: 'And sorry I could not travel both / And be one traveler...'",
        solution: `<strong>הסבר מלא (הדילמה):</strong><br>
        הקונפליקט המרכזי של השיר (והחיים) מוצג כאן:<br>
        הדובר מצטער (<strong>sorry</strong>) מכיוון שהוא <u>אדם אחד בלבד</u> (one traveler), ולכן הוא לא יכול להתפצל וללכת בשתי הדרכים במקביל כדי לבדוק מה יש בהן.<br><br>
        לכן הוא עומד שם זמן רב (<span dir="ltr">long I stood</span>) ומנסה להסתכל כמה שיותר רחוק אל תוך אחת הדרכים כדי לחזות את העתיד, אך הדרך מתעקלת לתוך השיחים והוא אינו יכול לראות את סופה.`
    },
    {
        topic: "english",
        subTopic: "The Road Not Taken (Robert Frost)",
        question_text: `<strong>The Comparison of the Roads:</strong><br>
        In the second and third stanzas, how does the speaker describe the two roads in reality? Are they completely different?`,
        options: [
            "<span dir=\"ltr\">No. He admits that passing there had worn them 'really about the same', and both mornings lay in leaves no step had trodden black. They were practically identical.</span>",
            "<span dir=\"ltr\">Yes. One road was made of gold and the other was full of mud and thorns.</span>",
            "<span dir=\"ltr\">Yes. One road was much shorter and brighter than the other.</span>",
            "<span dir=\"ltr\">He describes one road as highly dangerous and the other as extremely safe.</span>"
        ],
        correctAnswer: 0,
        hint: "זה ה'סוד' הגדול של השיר. הרבה חושבים שהוא בחר בדרך שונה לחלוטין. אבל המשורר מדגיש: 'the passing there had worn them really about the same'.",
        solution: `<strong>הסבר מלא (אשליית ההבדל - שאלת בגרות מכשילה!):</strong><br>
        תלמידים רבים נופלים כאן וחושבים שדרך אחת הייתה נטושה ודרך שנייה הייתה עמוסה.<br><br>
        אך כשהדובר מתאר את הדרכים ברגע הבחירה, הוא מודה באמת: <strong>שתי הדרכים נראו זהות כמעט לחלוטין!</strong><br>
        - <span dir="ltr">"worn them really <strong>about the same</strong>"</span> (ההליכה שם שחקה אותן פחות או יותר אותו הדבר).<br>
        - <span dir="ltr">"<strong>Both</strong> that morning equally lay"</span> (שתיהן היו מכוסות בעלים שאף אחד לא דרך עליהם והשחיר אותם באותו בוקר).<br><br>
        כלומר, בזמן ההחלטה – אין לנו באמת יכולת לדעת איזו דרך טובה יותר, ואנו עושים הימור. (הוא לקח את השנייה פשוט כי היא "wanted wear" - דרשה שידרכו עליה קצת).`
    },
    {
        topic: "english",
        subTopic: "The Road Not Taken (Robert Frost)",
        question_text: `<strong>HOTS: Uncovering Motives (The Self-Deception):</strong><br>
        The speaker says: <span dir="ltr">"Oh, I kept the first for another day!"</span> but immediately adds: <span dir="ltr">"Yet knowing how way leads on to way, I doubted if I should ever come back."</span><br>
        What does this realization tell us about life choices?`,
        options: [
            "<span dir=\"ltr\">It shows that life choices are permanent. One decision leads to another, making it impossible to go back in time and change the past or take the missed path.</span>",
            "<span dir=\"ltr\">It shows that he plans to buy a map and return to the forest tomorrow.</span>",
            "<span dir=\"ltr\">It means that roads are circles and eventually lead you back to where you started.</span>",
            "<span dir=\"ltr\">It proves that he made the wrong choice and died on the road.</span>"
        ],
        correctAnswer: 0,
        hint: "המציאות היא שכשבוחרים בדרך אחת, היא מובילה לעוד בחירות (צומת מובילה לצומת), ואי אפשר ללחוץ 'Undo' (אחורה) בחיים.",
        solution: `<strong>הסבר מלא (בלתי הפיכותה של הבחירה):</strong><br>
        הדובר מנסה לנחם את עצמו (Uncovering Motives) ואומר: "לא נורא, אשמור את הדרך הראשונה ליום אחר".<br><br>
        מיד לאחר מכן מכה בו המציאות הקרה: <strong>דרך מובילה לדרך</strong> (<span dir="ltr">way leads on to way</span>). בחיים, כל בחירה שאנו עושים (למשל, בחירת מקצוע) פותחת דלתות חדשות ומרחיקה אותנו מנקודת ההתחלה. לכן, הוא מטיל ספק (I doubted) אם אי פעם תהיה לו ההזדמנות לחזור לאותו צומת ולבחור מחדש. בחירות בחיים הן לרוב אבסולוטיות וסופיות.`
    },
    {
        topic: "english",
        subTopic: "The Road Not Taken (Robert Frost)",
        question_text: `<strong>The Climax: The Sigh (האנחה בסוף השיר):</strong><br>
        In the final stanza, the speaker says he will be telling this story <span dir="ltr">"with a <strong>sigh</strong> / Somewhere ages and ages hence."</span><br>
        Why is the word "sigh" (אנחה) highly ambiguous (בעלת כפל משמעות)?`,
        options: [
            "<span dir=\"ltr\">A sigh can represent either relief and satisfaction (אנחת רווחה) over making a good choice, or regret and sorrow (אנחת חרטה) over what was missed. The poet leaves it open to interpretation.</span>",
            "<span dir=\"ltr\">A sigh always means anger, proving he hates the path he chose.</span>",
            "<span dir=\"ltr\">A sigh means he is out of breath because the road was steep and hard to walk.</span>",
            "<span dir=\"ltr\">A sigh proves he is talking to a ghost in the future.</span>"
        ],
        correctAnswer: 0,
        hint: "אנשים נאנחים משתי סיבות שונות בחיים: 'האאא.. איזה מזל שניצלתי!' (רווחה), או 'אוי.. חבל שלא עשיתי את זה' (חרטה). המשורר בנה את המילה הזו במיוחד כך שתתאים לשניהם.",
        solution: `<strong>הסבר מלא (כפל המשמעות של Sigh):</strong><br>
        בשאלות בגרות על השיר הזה, המילה <span dir="ltr"><strong>Sigh</strong></span> (אנחה) היא המפתח להבנת המורכבות שלו.<br><br>
        הדובר טוען שבעתיד הרחוק ("ages and ages hence") הוא יספר את סיפור הצומת עם <strong>אנחה</strong>.<br>
        האנחה הזו יכולה להתפרש לשני כיוונים סותרים:<br>
        1. <strong>Relief (רווחה) וגאווה:</strong> "איזה מזל שלקחתי את הדרך שפחות הלכו בה, זה מה שעשה אותי למוצלח וייחודי!".<br>
        2. <strong>Regret (חרטה) ופספוס:</strong> "אוי, כמה חבל שוויתרתי על הדרך ההיא, לעולם לא אדע מה יכולתי להיות".<br>
        פרוסט מתכוון שהקורא יבין שכל בחירה גוררת עמה גם הישג וגם ויתור (פספוס).`
    },
    {
        topic: "english",
        subTopic: "The Road Not Taken (Robert Frost)",
        question_text: `<strong>Symbolism: The Metaphor of the Poem:</strong><br>
        What does the "fork in the road" (הפיצול בדרך) symbolize in the context of human life?`,
        options: [
            "<span dir=\"ltr\">It is a metaphor for a major crossroad in life where a person must make a crucial choice between two options without knowing what the future holds.</span>",
            "<span dir=\"ltr\">It symbolizes the importance of protecting nature and yellow woods.</span>",
            "<span dir=\"ltr\">It is a metaphor for learning how to drive in rural America.</span>",
            "<span dir=\"ltr\">It symbolizes death and the afterlife.</span>"
        ],
        correctAnswer: 0,
        hint: "השיר הוא סמל. היער הוא מסע החיים, והפיצול בדרך הוא צומת קבלת החלטות חשובה.",
        solution: `<strong>הסבר מלא (מטפורות וסמלים - Symbolism):</strong><br>
        השיר "The Road Not Taken" הוא מטפורה ענקית ומורחבת לחיים (Extended Metaphor).<br><br>
        - <strong>היער הסתווי (Yellow wood):</strong> מייצג את "סתיו החיים", אולי תקופת בגרות שבה החלטות הופכות לגורליות.<br>
        - <strong>הפיצול בדרך (The two roads):</strong> מייצג דילמה, החלטה גורלית (קרייירה, חתונה, מעבר מדינה) שצריך לקבל.<br>
        - <strong>העלים שלא הושחרו (Leaves no step had trodden black):</strong> מייצג את העובדה שהעתיד בתול, חלק ולא ידוע עבור הבוחר.`
    },
    {
        topic: "english",
        subTopic: "The Road Not Taken (Robert Frost)",
        question_text: `<strong>HOTS: Distinguishing Different Perspectives (שינוי זווית הראייה בעתיד):</strong><br>
        In the last stanza, the speaker claims: <em>"I took the one less traveled by, / And that has made all the difference."</em><br>
        Why is this a psychological self-deception (שקר עצמי / אשליה) based on what he said in stanza 2?`,
        options: [
            "<span dir=\"ltr\">Because earlier he admitted that both roads were worn 'really about the same'. He is telling a romanticized story in the future to give meaning to his choice, making it sound more heroic than it actually was.</span>",
            "<span dir=\"ltr\">Because the road he took was actually a paved highway with many cars.</span>",
            "<span dir=\"ltr\">Because he didn't actually walk; he took a horse.</span>",
            "<span dir=\"ltr\">Because he went back and took the first road eventually.</span>"
        ],
        correctAnswer: 0,
        hint: "לפני עשרות שנים כשהוא עמד בצומת, הוא אמר 'שתיהן נראות בדיוק אותו הדבר'. אבל כשהוא זקן, הוא פתאום מספר לאנשים 'אני בחרתי בדרך שאף אחד לא העז ללכת בה!'. למה אנשים משכתבים את העבר?",
        solution: `<strong>הסבר מלא (מיומנות הבחנה בין נקודות מבט):</strong><br>
        זהו העוקץ הפסיכולוגי הגאוני של רוברט פרוסט.<br><br>
        <strong>פרספקטיבה א' (המציאות בצומת):</strong> "שתי הדרכים נראות פחות או יותר אותו הדבר. סתם בחרתי אחת".<br>
        <strong>פרספקטיבה ב' (הזיכרון בגיל מבוגר):</strong> "אני מרדן! לקחתי את הדרך שפחות אנשים הלכו בה, וזה שינה את חיי!".<br><br>
        השיר מראה כיצד בני אדם נוטים <strong>לעשות רציונליזציה (לתרץ)</strong> לבחירות שלהם בדיעבד, ולהפוך אותן לאגדה הירואית, כדי שיוכלו לחיות בשלום עם העובדה שוויתרו על הדרך השנייה.`
    },
    {
        topic: "english",
        subTopic: "The Road Not Taken (Robert Frost)",
        question_text: `<strong>The Title's Meaning (משמעות הכותרת):</strong><br>
        The poem is famous for its final line about the road "less traveled". However, the title of the poem is "The Road <strong>NOT</strong> Taken". <br>
        What does this title emphasize?`,
        options: [
            "<span dir=\"ltr\">It emphasizes the psychological focus on the missed opportunity—the human tendency to always wonder 'What if?' about the choice we did not make.</span>",
            "<span dir=\"ltr\">It shows that the poem is about a road that was closed for construction and could not be taken by anyone.</span>",
            "<span dir=\"ltr\">It emphasizes that the speaker didn't take any road and stayed in the forest forever.</span>",
            "<span dir=\"ltr\">It proves that the speaker took the wrong road and regrets it terribly.</span>"
        ],
        correctAnswer: 0,
        hint: "אם השיר היה על הגאווה של הדרך שבחרתי, הוא היה קורא לו 'The Road Taken'. אבל הוא קרא לו 'הדרך *שלא* נבחרה'. זה מצביע על כך שהמוח שלנו תמיד חושב על מה שפספסנו.",
        solution: `<strong>הסבר מלא (משמעות הכותרת לשיר):</strong><br>
        רבים מתבלבלים וחושבים ששם השיר הוא "The Road Less Traveled". אבל פרוסט בחר בכותרת <strong>"הדרך שלא נבחרה"</strong>.<br><br>
        בחירה זו היא קריטית: היא שמה את הזרקור לא על מה שיש לי, אלא על <strong>מה שאיבדתי (החמצה)</strong>.<br>
        טבע האדם הוא להיות רדוף על ידי ה"מה היה קורה אילו?" (What if?). גם אם בחרנו בחירה נהדרת שהובילה אותנו להצלחה, תמיד חלק בנו יישאר בצומת ההיא, בוהה בדרך השנייה ותוהה לאן היא הייתה מובילה.`
    },
    {
        topic: "english",
        subTopic: "The Road Not Taken (Robert Frost)",
        question_text: `<strong>All the Difference:</strong><br>
        What is the meaning of the famous last line: <span dir="ltr">"And that has made all the difference"</span>?`,
        options: [
            "<span dir=\"ltr\">It means that the one specific choice he made at the fork dictated the entire course of his life, shaping his destiny completely.</span>",
            "<span dir=\"ltr\">It means that walking in the forest is good for your health and makes a difference in your mood.</span>",
            "<span dir=\"ltr\">It means that there was a huge difference in the color of the leaves between the two roads.</span>",
            "<span dir=\"ltr\">It means that he reached a dead end and his trip was different from what he expected.</span>"
        ],
        correctAnswer: 0,
        hint: "לחיוב או לשלילה, הבחירה שלו 'עשתה את כל ההבדל'. היא עצבה מי הוא ומה הוא יהיה בעתיד.",
        solution: `<strong>הסבר מלא (And that has made all the difference):</strong><br>
        השורה החותמת את השיר היא אולי שורת השירה האמריקאית המצוטטת ביותר בהיסטוריה.<br><br>
        המשמעות שלה היא מוחלטת: ההחלטה לעשות ימינה או שמאלה באותה נקודה בעבר, היא הפעולה ש<strong>הכתיבה ועיצבה את כל מהלך החיים שלו (Shape his destiny)</strong>.<br>
        הוא לא אומר שזה עשה הבדל "טוב" או הבדל "רע" – הוא משאיר את זה מעורפל. הוא פשוט מצהיר עובדה: הבחירה הזו בנתה את מי שאני היום.`
    },
    {
        topic: "english",
        subTopic: "The Road Not Taken (Robert Frost)",
        question_text: `<strong>HOTS: Explaining Patterns (מבנה ותבנית):</strong><br>
        Why is the poem divided into neat stanzas of 5 lines with a steady, rhythmic rhyme scheme (ABAAB)?`,
        options: [
            "<span dir=\"ltr\">The steady walking rhythm represents the continuous, unstoppable journey of life and the deliberate steps taken when making a choice.</span>",
            "<span dir=\"ltr\">Because Robert Frost was a poor poet who only knew one type of rhyming style.</span>",
            "<span dir=\"ltr\">To make the poem easier for children to sing in a chorus.</span>",
            "<span dir=\"ltr\">The pattern shows the chaotic and crazy nature of the forest.</span>"
        ],
        correctAnswer: 0,
        hint: "כשהשיר נשמע כמו פסיעות קבועות ושקטות (אחד-שתיים-שלוש, אחד-שתיים-שלוש), זה מדמה את ההליכה הרציפה של האדם במסע החיים, ללא יכולת לעצור את הזמן.",
        solution: `<strong>הסבר מלא (Explaining Patterns - תבניות שירה):</strong><br>
        בשאלות ספרות על שירה (Poetry), יש קשר בין <strong>המבנה (Structure)</strong> לבין <strong>המשמעות (Meaning)</strong>.<br><br>
        השיר כולל 4 בתים זהים באורכם (5 שורות), וחריזה עקבית וזורמת בצורת ABAAB (למשל: wood / both / stood / could / undergrowth).<br>
        המבנה המאורגן הזה יוצר קצב קריאה שמדמה <strong>צעדים פיזיים של אדם הולך (A walking pace)</strong>. הוא מסמל את הזרימה הבלתי פוסקת של החיים: אתה יכול להתעכב בצומת, אך בסוף אתה חייב לעשות את הצעד הבא ולהמשיך הלאה במסע.`
    },// ========================================================================
// נושא: אנגלית (English)
// קטגוריה: Literature (אנגלית ספרותית לתיכון)
// פעימה 2: 30 שאלות - Mr. Know All, All My Sons, Count That Day Lost
// רמה: הכנה לבגרויות (Modules D, F) - ניתוח ספרותי ו-HOTS
// ========================================================================

    // ---------------------------------------------------------
    // Subtopic 4: Mr. Know All
    // ---------------------------------------------------------

    {
        topic: "english",
        subTopic: "Mr. Know All (Bernard Malamud)",
        question_text: `<strong>Setting the Scene (The Narrator's Prejudice):</strong><br>
        Why did the narrator hate Mr. Kelada even before he met him?`,
        options: [
            "<span dir=\"ltr\">Because he saw his name on the passenger list and judged him based on prejudice. He didn't want to share a cabin with someone who wasn't British.</span>",
            "<span dir=\"ltr\">Because Mr. Kelada stole his luggage before the ship left the port.</span>",
            "<span dir=\"ltr\">Because Mr. Kelada was famous for being a terrible and noisy person in the newspaper.</span>",
            "<span dir=\"ltr\">Because they had a fight on a previous ship journey to Japan.</span>"
        ],
        correctAnswer: 0,
        hint: "המספר הוא סנוב בריטי. כשהוא רואה שם 'זר' (מזרח תיכוני) על הדלת, הוא מיד מפתח אנטי כלפיו. זהו שורש הגזענות בסיפור.",
        solution: `<strong>הסבר מלא (Prejudice - דעות קדומות):</strong><br>
        המוטיב המרכזי בסיפור הוא <strong>דעות קדומות (Prejudice) וסטריאוטיפים</strong>.<br><br>
        המספר שונא את קלדה עוד לפני שראה את פניו, רק בגלל שמו (Max Kelada) שאינו שם בריטי טיפוסי. המספר הוא סנוב אנגלי שציפה לחלוק חדר עם מישהו כמוהו (עם שם כמו סמית' או בראון). השנאה המוקדמת הזו (I disliked Mr. Kelada even before I saw him) מוכיחה שהמספר שופט אנשים על סמך מוצאם ולא על סמך אופיים.`
    },
    {
        topic: "english",
        subTopic: "Mr. Know All (Bernard Malamud)",
        question_text: `<strong>Character Analysis (Mr. Kelada's Behavior):</strong><br>
        Why was Max Kelada given the nickname "Mr. Know All" by the passengers on the ship?`,
        options: [
            "<span dir=\"ltr\">Because he was loud, bossy, involved himself in everyone's business, and argued confidently about every subject, believing he was always right.</span>",
            "<span dir=\"ltr\">Because he was the captain of the ship and knew all the rules of the ocean.</span>",
            "<span dir=\"ltr\">Because he won a famous trivia game show before boarding the ship.</span>",
            "<span dir=\"ltr\">Because he read all the books in the ship's library and told everyone the endings.</span>"
        ],
        correctAnswer: 0,
        hint: "הוא מארגן את כל המסיבות, מתערב בכל שיחה, ומתווכח על כל נושא שבעולם. הוא פשוט 'יודע הכל'.",
        solution: `<strong>הסבר מלא (מקור הכינוי 'מר יודע כל'):</strong><br>
        הנוסעים באונייה סולדים מקלדה משום שהוא נדחף לכל מקום. הוא מארגן נשפים, תחרויות ספורט, ומנהל את חיי החברה. <br>
        חשוב מכך: בכל שיחה (פוליטיקה, אמנות, אלכוהול) הוא מתערב ומתווכח בביטחון מוחלט (He argued bitterly). הוא לא מוכן להפסיד בשום ויכוח, ולכן כולם קוראים לו בלעג <strong>"Mr. Know All"</strong>.`
    },
    {
        topic: "english",
        subTopic: "Mr. Know All (Bernard Malamud)",
        question_text: `<strong>The Bet (ההתערבות):</strong><br>
        What was the specific subject of the bet between Mr. Kelada and Mr. Ramsay?`,
        options: [
            "<span dir=\"ltr\">Whether Mrs. Ramsay's pearl necklace was made of real, expensive pearls or cheap, artificial imitations.</span>",
            "<span dir=\"ltr\">Whether the ship would arrive in Japan on time.</span>",
            "<span dir=\"ltr\">Whether Mr. Kelada could beat Mr. Ramsay in a game of cards.</span>",
            "<span dir=\"ltr\">Whether Mrs. Ramsay bought her dress in New York or in Paris.</span>"
        ],
        correctAnswer: 0,
        hint: "ההתערבות היא סביב המקצוע של מר קטנז... סליחה, מר קלדה. הוא נוסע ליפן כדי לחקור את תעשיית הפנינים.",
        solution: `<strong>הסבר מלא (ההתערבות הגורלית):</strong><br>
        מר קלדה נוסע ליפן לעסוק בסחר בפנינים (Pearls). במהלך ארוחת הערב, הוא טוען ששרשרת הפנינים של גברת רמזי עולה עשרות אלפי דולרים.<br><br>
        מר רמזי (הבעל הדוגמטי והעקשן) מזלזל בו וטוען שהוא קנה את השרשרת ב-18 דולר בניו יורק (חיקוי). רמזי מאתגר את קלדה בהתערבות על 100 דולר שיוכיח שאלו פנינים אמיתיות.`
    },
    {
        topic: "english",
        subTopic: "Mr. Know All (Bernard Malamud)",
        question_text: `<strong>The Climax (נקודת השיא):</strong><br>
        What did Mr. Kelada see when he examined the pearls with his magnifying glass?`,
        options: [
            "<span dir=\"ltr\">He saw that the pearls were real, but he also saw Mrs. Ramsay's pale, terrified face, realizing she was begging him to lie.</span>",
            "<span dir=\"ltr\">He saw that the pearls were fake and realized he had lost the bet to Mr. Ramsay.</span>",
            "<span dir=\"ltr\">He saw that the pearls were stolen from a museum in London.</span>",
            "<span dir=\"ltr\">He saw a tiny message written inside one of the pearls.</span>"
        ],
        correctAnswer: 0,
        hint: "כשהוא מסתכל מקרוב, הוא לא רואה רק את הפנינים. הוא קולט את המבט של גברת רמזי שעומדת להתעלף מפחד.",
        solution: `<strong>הסבר מלא (הקונפליקט ונקודת השיא):</strong><br>
        זהו רגע השיא (Climax) של הסיפור.<br>
        מר קלדה בוחן את הפנינים בזכוכית מגדלת ויודע מיד שהן <strong>אמיתיות ויקרות מאוד</strong>.<br><br>
        אבל בדיוק כשהוא עומד להכריז על ניצחונו, הוא קולט את פניה של גברת רמזי (She looked as if she were about to faint). הוא מבין את האמת הסמויה: בזמן שבעלה היה באמריקה לשנה, מישהו אחר (מאהב) קנה לה את הפנינים. אם הוא יגיד את האמת - הוא יהרוס לה את הנישואים.`
    },
    {
        topic: "english",
        subTopic: "Mr. Know All (Bernard Malamud)",
        question_text: `<strong>HOTS: Uncovering Motives (חשיפת מניעים):</strong><br>
        <em>Why</em> did Mr. Kelada choose to lose the bet and look like a fool in front of everyone?`,
        options: [
            "<span dir=\"ltr\">He sacrificed his pride and his reputation as \"Mr. Know All\" in order to save Mrs. Ramsay's marriage and protect her secret.</span>",
            "<span dir=\"ltr\">He felt bad for Mr. Ramsay because Ramsay didn't have enough money to pay the 100 dollars.</span>",
            "<span dir=\"ltr\">He actually made a mistake and only realized it was a fake necklace at the last second.</span>",
            "<span dir=\"ltr\">He wanted to trick the narrator into liking him.</span>"
        ],
        correctAnswer: 0,
        hint: "עבור אדם שגאוותו היא 'תמיד להיות צודק', להגיד 'טעיתי' זו הקרבה עצומה. הוא עשה זאת מתוך רחמים על האישה.",
        solution: `<strong>הסבר מלא (ההקרבה של קלדה - Sacrifice):</strong><br>
        כאן מתגלה אופיו האמיתי (True character) של מר קלדה.<br>
        למרות שהוא מוצג כנודניק וגאוותן, ברגע האמת יש לו <strong>מצפן מוסרי ורגישות אנושית</strong>. הוא בוחר לבלוע את הגאווה שלו (to swallow his pride), להודות כביכול ב"טעות", ולשלם 100 דולר, וכל זאת אך ורק כדי לא להרוס את חייה של גברת רמזי.`
    },
    {
        topic: "english",
        subTopic: "Mr. Know All (Bernard Malamud)",
        question_text: `<strong>The Resolution (The Envelope):</strong><br>
        Why did someone push a 100-dollar bill in an envelope under Mr. Kelada's door?`,
        options: [
            "<span dir=\"ltr\">It was Mrs. Ramsay returning the money to silently thank him for keeping her secret and saving her marriage.</span>",
            "<span dir=\"ltr\">It was Mr. Ramsay paying him because he realized later that the pearls were actually real.</span>",
            "<span dir=\"ltr\">It was the narrator paying him back for a previous debt.</span>",
            "<span dir=\"ltr\">It was the captain of the ship giving him a prize for organizing the parties.</span>"
        ],
        correctAnswer: 0,
        hint: "מי היחיד בספינה שידע שמר קלדה באמת צדק (והקריב את עצמו למענה)? גברת רמזי.",
        solution: `<strong>הסבר מלא (סגירת המעגל בסוף הסיפור):</strong><br>
        למחרת בבוקר, מעטפה עם השטר של 100 דולר מושחלת מתחת לדלת התא.<br>
        המספר וקלדה מבינים מיד: <strong>גברת רמזי (Mrs. Ramsay)</strong> שלחה את הכסף.<br><br>
        זוהי הדרך האילמת שלה להגיד <strong>"תודה" (Gratitude)</strong> על כך שלא חשף את בגידתה מול בעלה, וגם להחזיר לו את הכסף שהוא הפסיד בגללה ביושר.`
    },
    {
        topic: "english",
        subTopic: "Mr. Know All (Bernard Malamud)",
        question_text: `<strong>HOTS: Distinguishing Different Perspectives (הבחנה בין נקודות מבט):</strong><br>
        How does the narrator's attitude towards Mr. Kelada change at the very end of the story?`,
        options: [
            "<span dir=\"ltr\">He stops hating him. After witnessing Kelada's noble sacrifice for Mrs. Ramsay, he states: \"At that moment I did not entirely dislike Mr. Kelada.\"</span>",
            "<span dir=\"ltr\">He hates him even more because he thinks Kelada is a liar who can't even identify real pearls.</span>",
            "<span dir=\"ltr\">He becomes his best friend and invites him to visit his home in England.</span>",
            "<span dir=\"ltr\">His perspective doesn't change; he still wants to change his cabin.</span>"
        ],
        correctAnswer: 0,
        hint: "המספר היה העד היחיד למבט בין קלדה לגברת רמזי. הוא היחיד באולם שהבין מה באמת קרה. וזה שינה את דעתו.",
        solution: `<strong>הסבר מלא (שינוי נקודת המבט):</strong><br>
        זהו השינוי שעובר על המספר (The Narrator). בתחילת הסיפור, נקודת המבט שלו הייתה מבוססת על סנוביות וסטריאוטיפים (הוא נגעל מקלדה).<br><br>
        אך בסוף הסיפור, כשהוא מבין שקלדה הוא "ג'נטלמן אמיתי" שהציל אישה במחיר ההשפלה שלו עצמו, החומה של המספר נסדקת. הוא מסיים במשפט: <strong>"באותו רגע, לא לגמרי שנאתי אותו"</strong>. זוהי הכרה בכך שהוא שפט ספר לפי הכריכה שלו.`
    },
    {
        topic: "english",
        subTopic: "Mr. Know All (Bernard Malamud)",
        question_text: `<strong>Irony in the Story:</strong><br>
        What is the main <strong>irony</strong> regarding the title "Mr. Know All"?`,
        options: [
            "<span dir=\"ltr\">The only time he actually *does* know everything (about the pearls), he is forced to say that he is wrong.</span>",
            "<span dir=\"ltr\">He thinks he knows everything but he actually knows nothing at all.</span>",
            "<span dir=\"ltr\">The narrator is the one who really knows everything.</span>",
            "<span dir=\"ltr\">He knows everything about pearls but nothing about diamonds.</span>"
        ],
        correctAnswer: 0,
        hint: "אירוניה היא מצב שבו התוצאה הפוכה ממה שהיינו מצפים. כולם צחקו עליו שהוא 'יודע הכל'. דווקא כשהוא צדק, הוא היה חייב לשקר.",
        solution: `<strong>הסבר מלא (אירוניה בספרות - Irony):</strong><br>
        אירוניה מצבית (Situational Irony) היא כלי חזק בסיפור זה.<br>
        הכינוי של קלדה הוא "מר יודע כל", משום שהוא תמיד מתעקש להוכיח שהוא צודק בכל מחיר.<br><br>
        האירוניה בשיאה מגיעה כשהוא <strong>באמת צודק ומומחה (יודע שהפנינים אמיתיות)</strong>, אבל מסיבות מוסריות, זהו בדיוק הרגע היחיד בסיפור שבו הוא חייב <strong>להודות שהוא 'לא יודע כלום' ולומר שזו טעות</strong>. הניצחון שלו הופך לתבוסה שלו.`
    },
    {
        topic: "english",
        subTopic: "Mr. Know All (Bernard Malamud)",
        question_text: `<strong>Character Contrast (Mr. Ramsay):</strong><br>
        How is Mr. Ramsay described in contrast to his wife, Mrs. Ramsay?`,
        options: [
            "<span dir=\"ltr\">He is described as heavy, dogmatic, and argumentative, while she is described as modest, quiet, and having pleasant manners.</span>",
            "<span dir=\"ltr\">He is described as shy and polite, while she is loud and argumenative.</span>",
            "<span dir=\"ltr\">He is very rich and generous, while she is poor and greedy.</span>",
            "<span dir=\"ltr\">They are described as exactly the same: both are loud and rude.</span>"
        ],
        correctAnswer: 0,
        hint: "הוא דוגמטי (Dogmatic - עקשן על דעותיו) ואוהב להתווכח כמו קלדה. היא לעומתו 'האישה המושלמת' לכאורה - צנועה ושקטה.",
        solution: `<strong>הסבר מלא (ניגוד דמויות - Mr. Ramsay vs. Mrs. Ramsay):</strong><br>
        מר רמזי מתואר כאיש גדול, כבד ו<strong>דוגמטי (Dogmatic)</strong> - מישהו שחושב שהאמת תמיד אצלו. הוא זה שגורר את קלדה להתערבות מתוך יהירות, למרות שאשתו מתחננת שירד מזה.<br><br>
        לעומתו, גברת רמזי נראית בתחילת הסיפור כאישה האידיאלית: צנועה (<span dir="ltr">modest</span>) ועדינה. הניגוד הזה מעצים את ההלם בסוף הסיפור, כשמגלים שדווקא האישה ה"צנועה" מסתירה סוד גדול (מאהב), והבעל ה"חכם" הוא בעצם טיפש עיוור שלא רואה מה קורה אצלו בבית.`
    },
    {
        topic: "english",
        subTopic: "Mr. Know All (Bernard Malamud)",
        question_text: `<strong>The Message / Theme:</strong><br>
        What is the main moral lesson of the story "Mr. Know All"?`,
        options: [
            "<span dir=\"ltr\">Don't judge a book by its cover. People's true character is revealed by their actions in hard times, not by their outward appearance or stereotypes.</span>",
            "<span dir=\"ltr\">Never make a bet involving money when you are on a ship.</span>",
            "<span dir=\"ltr\">English people are always right and Middle Eastern people are always wrong.</span>",
            "<span dir=\"ltr\">Pearls are very hard to identify, even for experts.</span>"
        ],
        correctAnswer: 0,
        hint: "המספר שפט את קלדה בגלל השם והמראה שלו. בסוף הוא גילה שהוא ג'נטלמן אמיתי.",
        solution: `<strong>הסבר מלא (המסר - Theme):</strong><br>
        המסר המרכזי של הסיפור הוא ביקורת חריפה נגד <strong>סטריאוטיפים ודעות קדומות</strong>.<br>
        הביטוי הידוע ביותר לתיאור הסיפור הוא: <strong>"Don't judge a book by its cover"</strong> (אל תשפוט ספר לפי הכריכה שלו).<br><br>
        - מר קלדה נראה מבחוץ נודניק וגס רוח, אך מבפנים הוא רגיש וג'נטלמן אמיתי שהקריב את כבודו למען אישה.<br>
        - גברת רמזי נראתה מבחוץ צנועה ותמימה, אך מבפנים הסתירה בגידה ושקרים.`
    },


    // ---------------------------------------------------------
    // Subtopic 5: All My Sons (W. Somerset Maugham -> Arthur Miller)
    // ---------------------------------------------------------

    {
        topic: "english",
        subTopic: "All My Sons (W. Somerset Maugham)",
        question_text: `<strong>The Core Crime:</strong><br>
        What terrible crime did Joe Keller commit during World War II?`,
        options: [
            "<span dir=\"ltr\">He ordered his partner to ship cracked (defective) cylinder heads for airplanes to the military, which caused 21 pilots to crash and die.</span>",
            "<span dir=\"ltr\">He stole money from the military base to build his factory.</span>",
            "<span dir=\"ltr\">He shot 21 pilots while serving in the army.</span>",
            "<span dir=\"ltr\">He blamed his son Larry for stealing airplane parts.</span>"
        ],
        correctAnswer: 0,
        hint: "מפעל קלר יצר ראשי מנוע למטוסים (cylinder heads). באחד הימים יצאו מהמפעל חלקים סדוקים.",
        solution: `<strong>הסבר מלא (הפשע של ג'ו קלר):</strong><br>
        עלילת המחזה נשענת על חטא נורא מהעבר. במהלך המלחמה, המפעל של ג'ו קלר ייצר <strong>ראשי מנוע פגומים/סדוקים (cracked cylinder heads)</strong>.<br><br>
        במקום לדווח ולהרוס אותם, ג'ו נתן פקודה טלפונית לשותפו (סטיב דיבר) לרתך אותם ולהסוות את הסדקים, ולשלוח אותם לצבא (כדי לא להפסיד חוזים וכסף). כתוצאה מכך, <strong>21 טייסים צעירים התרסקו ומתו (21 pilots died)</strong>.`
    },
    {
        topic: "english",
        subTopic: "All My Sons (W. Somerset Maugham)",
        question_text: `<strong>The Scapegoat (השעיר לעזאזל):</strong><br>
        How did Joe Keller manage to stay out of jail after the crime was discovered?`,
        options: [
            "<span dir=\"ltr\">He lied and blamed his partner, Steve Deever, saying Steve acted alone while Joe was \"sick in bed\" with the flu. Steve went to prison instead.</span>",
            "<span dir=\"ltr\">He paid a lot of money to the judge to drop the charges.</span>",
            "<span dir=\"ltr\">He ran away to another country until the war ended.</span>",
            "<span dir=\"ltr\">He blamed his son Chris for sending the parts.</span>"
        ],
        correctAnswer: 0,
        hint: "ג'ו לא רצה לאבד הכל, אז הוא מצא לעצמו אליבי (alibi). הוא טען שהיה חולה בשפעת ולכן לא היה במפעל.",
        solution: `<strong>הסבר מלא (השקר שהציל את ג'ו):</strong><br>
        כשהצבא גילה את הפשע, ג'ו קלר ושותפו <strong>סטיב דיבר (Steve Deever)</strong> הועמדו למשפט.<br><br>
        ג'ו ניצל על ידי אליבי שקרי: הוא טען שבאותו יום גורלי הוא שכב בבית חולה בשפעת (sick with the flu), ולכן סטיב עשה הכל על דעת עצמו. בית המשפט האמין לג'ו, שוחרר וחזר להיות איש עסקים מצליח, בעוד סטיב המסכן נשלח ל<strong>כלא (prison)</strong> כשעיר לעזאזל.`
    },
    {
        topic: "english",
        subTopic: "All My Sons (W. Somerset Maugham)",
        question_text: `<strong>Kate's Denial (ההכחשה של האם):</strong><br>
        Why does Kate Keller absolutely refuse to believe that her son Larry is dead?`,
        options: [
            "<span dir=\"ltr\">Because if she accepts that Larry is dead, she must also accept that Joe killed him (since Joe shipped the defective parts that killed pilots). Her denial protects Joe's secret.</span>",
            "<span dir=\"ltr\">Because she received a phone call from Larry saying he is living in South America.</span>",
            "<span dir=\"ltr\">Because she hates Chris and only wants Larry to inherit the factory.</span>",
            "<span dir=\"ltr\">Because Larry was too good of a pilot to ever crash an airplane.</span>"
        ],
        correctAnswer: 0,
        hint: "האמונה שלה קשורה לאשמה. 'אם לארי מת, זה אומר שאבא שלו הרג אותו'. כדי לא לצאת מדעתה, היא חייבת להאמין שלארי חי.",
        solution: `<strong>הסבר מלא (הפסיכולוגיה של קייט קלר):</strong><br>
        קייט נראית משוגעת שמחכה לבן שנעדר 3 שנים, אך <strong>יש היגיון בשיגעון שלה</strong>.<br><br>
        היא יודעת את האמת על הפשע של ג'ו (שג'ו אשם במות הטייסים). אם היא תכיר בכך שלארי (שהיה טייס) התרסק ומת, המשמעות המוסרית והפסיכולוגית היא ש<strong>האבא הרג את הבן שלו</strong>. <br>
        המוח של קייט לא מסוגל לשאת את העול הזה, ולכן היא בוחרת בהכחשה מוחלטת (Denial) וטוענת שאלוהים לא ייתן לאב להרוג את בנו.`
    },
    {
        topic: "english",
        subTopic: "All My Sons (W. Somerset Maugham)",
        question_text: `<strong>HOTS: Comparing and Contrasting (Chris vs. Joe):</strong><br>
        What is the fundamental difference between Joe's worldview and Chris's worldview?`,
        options: [
            "<span dir=\"ltr\">Joe believes that family is the most important thing in the world and justifies crimes for it. Chris is an idealist who believes in a wider responsibility to society and brotherhood.</span>",
            "<span dir=\"ltr\">Joe believes in giving all his money to charity, while Chris only cares about making money for the family.</span>",
            "<span dir=\"ltr\">Joe wants to go to war, while Chris is a coward who stayed home.</span>",
            "<span dir=\"ltr\">Joe believes in God, while Chris does not believe in anything.</span>"
        ],
        correctAnswer: 0,
        hint: "ג'ו הוא איש של פעם (Practical). הכל אצלו זה 'למען המשפחה והעסק'. כריס הוא אידאליסט, שחזר מהמלחמה עם תחושת סולידריות ואחריות לכלל.",
        solution: `<strong>הסבר מלא (התנגשות אידיאולוגיות - Idealism vs. Pragmatism):</strong><br>
        המחזה מבוסס על התנגשות בין שתי תפיסות עולם:<br><br>
        - <strong>ג'ו (Joe):</strong> מייצג את ה"אדם המעשי" (Pragmatism). עבורו, ה<strong>משפחה נמצאת מעל החוק ומעל המוסר</strong> ("אין דבר גדול יותר מהמשפחה"). הוא מצדיק את הפשע שלו בכך שעשה הכל כדי להוריש את העסק לכריס.<br>
        - <strong>כריס (Chris):</strong> מייצג <strong>אידיאליזם (Idealism)</strong>. אחרי שראה את חבריו מקריבים את עצמם במלחמה, הוא מאמין באחריות חברתית (Social responsibility) וב"אחוות אחים" (Brotherhood). הוא מאמין שאדם אחראי לעולם, לא רק לחצר האחורית שלו.`
    },
    {
        topic: "english",
        subTopic: "All My Sons (W. Somerset Maugham)",
        question_text: `<strong>The Symbolism of the Apple Tree:</strong><br>
        What does Larry's apple tree, which is snapped by the wind, symbolize in the play?`,
        options: [
            "<span dir=\"ltr\">It symbolizes Larry's memory and the fragile lies of the Keller family. Its breaking foreshadows the breaking of the family's secrets and the revelation of the truth.</span>",
            "<span dir=\"ltr\">It symbolizes the success of Joe's business and his growing wealth.</span>",
            "<span dir=\"ltr\">It symbolizes Kate's love for Chris and Ann's upcoming wedding.</span>",
            "<span dir=\"ltr\">It symbolizes the American dream and a bright future.</span>"
        ],
        correctAnswer: 0,
        hint: "העץ שניטע לזכר לארי נשבר בסופה בתחילת המחזה. שבירת העץ מרמזת (foreshadowing) על שבירת השקר הגדול של המשפחה.",
        solution: `<strong>הסבר מלא (סמליות - The Apple Tree):</strong><br>
        עץ התפוח (שניטע לזכר לארי כשחשבו שהוא נהרג) הוא סמל מרכזי.<br>
        בתחילת המחזה, סופה שוברת את העץ. <br><br>
        <strong>מה זה מסמל?</strong><br>
        זהו רמז מקדים מבריק (Foreshadowing). שבירת העץ מסמלת ש<strong>ההגנות, השקרים וההכחשה של משפחת קלר עומדים להישבר</strong>. כמו שהעץ נפל, כך גם השקר הגדול של ג'ו (ושל קייט לגבי כך שלארי חי) עומד לקרוס מול האמת הכואבת שתתגלה במהלך היום.`
    },
    {
        topic: "english",
        subTopic: "All My Sons (W. Somerset Maugham)",
        question_text: `<strong>George's Arrival:</strong><br>
        Why does George Deever suddenly arrive at the Keller house, trying to take Ann away?`,
        options: [
            "<span dir=\"ltr\">He visited his father (Steve) in prison, finally realized that Joe Keller was the one who gave the order to ship the bad parts, and came to stop Ann from marrying the son of the man who destroyed their family.</span>",
            "<span dir=\"ltr\">He came to ask Joe for a job in his factory because he had no money.</span>",
            "<span dir=\"ltr\">He wanted to tell them that he found Larry alive in a different state.</span>",
            "<span dir=\"ltr\">He came to arrest Joe because he became a police officer.</span>"
        ],
        correctAnswer: 0,
        hint: "ג'ורג' חזר הרגע מביקור בכלא אצל אבא שלו, סטיב. הוא גילה שכל החיים הוא שנא את אבא שלו בטעות, ושהאשם האמיתי הוא ג'ו.",
        solution: `<strong>הסבר מלא (נקודת המפנה העלילתית - George's Arrival):</strong><br>
        הגעתו של ג'ורג' (אחיה של אן, ובנו של סטיב) מערערת את כל הביטחון של משפחת קלר.<br>
        ג'ורג' לא דיבר עם אביו (סטיב) 3 שנים מרוב בושה. אבל כשהוא מבקר אותו בכלא, הוא שומע את הצד של סטיב ומבין ש<strong>ג'ו קלר הוא זה שהרס את משפחת דיבר</strong> (Joe destroyed his family).<br>
        לכן הוא מגיע בזעם כדי לקחת את אחותו (Ann) משם, ולאסור עליה להתחתן עם כריס (הבן של קלר הרמאי).`
    },
    {
        topic: "english",
        subTopic: "All My Sons (W. Somerset Maugham)",
        question_text: `<strong>The Letter (מכתב ההתאבדות):</strong><br>
        What shocking truth is revealed in the letter that Ann reads to Chris and Joe at the end of the play?`,
        options: [
            "<span dir=\"ltr\">It reveals that Larry did not die in battle. He crashed his plane on purpose (committed suicide) out of deep shame after reading in the news that his father sent defective parts that killed other pilots.</span>",
            "<span dir=\"ltr\">It reveals that Larry is alive and well, living in secret in another country because he hates his family.</span>",
            "<span dir=\"ltr\">It reveals that Larry actually killed Steve Deever.</span>",
            "<span dir=\"ltr\">It reveals that Larry hated Ann and never wanted to marry her.</span>"
        ],
        correctAnswer: 0,
        hint: "המכתב הוא פצצת האטום של המחזה. לארי קרא בעיתון שאבא שלו מואשם בהרג טייסים, ומרוב בושה הוא לא היה מסוגל להמשיך לחיות.",
        solution: `<strong>הסבר מלא (תפנית העלילה - The Letter):</strong><br>
        אן שומרת אצלה מכתב שלארי שלח לה ממש לפני מותו (לפני 3 שנים). היא מוציאה אותו רק כמוצא אחרון, כדי להוכיח לקייט שלארי מת ולא יחזור.<br><br>
        המכתב חושף שלארי קרא בעיתון על המעצר של אביו. לארי (שהיה טייס גאה בעצמו) חש <strong>בושה עצומה (shame) ואשמה (guilt)</strong>. הוא כותב שהוא יוצא למשימה ממנה לא יחזור – <strong>כלומר, הוא מתאבד (committed suicide)</strong>, כפעולת עונש לאביו על פשעו. הגילוי הזה שובר סופית את ג'ו.`
    },
    {
        topic: "english",
        subTopic: "All My Sons (W. Somerset Maugham)",
        question_text: `<strong>The Title's Meaning (משמעות שם המחזה):</strong><br>
        After hearing Larry's letter, Joe finally understands his crime and says: <em>"Sure, he was my son. But I think to him they were <strong>all my sons</strong>."</em> What does he mean?`,
        options: [
            "<span dir=\"ltr\">Joe finally understands Chris and Larry's worldview: a man is responsible for everyone in society, not just his biological family. The 21 dead pilots were like his own sons, and he killed them.</span>",
            "<span dir=\"ltr\">He realizes that he actually has many secret children around the world that he needs to take care of.</span>",
            "<span dir=\"ltr\">He means that the pilots worked for him like loyal sons in the factory.</span>",
            "<span dir=\"ltr\">He is angry that Larry cared more about strangers than about his own father.</span>"
        ],
        correctAnswer: 0,
        hint: "זהו רגע ההארה (Epiphany) של ג'ו. הוא קולט שהאחריות לא עוצרת בגדר של הגינה שלו. הטייסים שמתו היו יכולים להיות לארי, הם היו 'כמו הבנים שלו'.",
        solution: `<strong>הסבר מלא (הארה ומשמעות הכותרת - All My Sons):</strong><br>
        במשך כל המחזה, ג'ו מצדיק את הפשע שלו בטענה ש"עשיתי את זה בשביל הבנים שלי!" (למען המשפחה).<br><br>
        אחרי שהוא שומע שלארי התאבד בגלל אותם 21 טייסים (שהיו חבריו לנשק), ג'ו חווה <strong>הארה (Epiphany)</strong>. הוא מבין סוף סוף את הפילוסופיה של בניו (Brotherhood): אי אפשר לדאוג רק לדם שלך. 21 הטייסים הצעירים שנהרגו בגללו היו באחריותו <strong>כאילו היו בניו שלו ("they were all my sons")</strong>.`
    },
    {
        topic: "english",
        subTopic: "All My Sons (W. Somerset Maugham)",
        question_text: `<strong>HOTS: Cause and Effect (סיבה ותוצאה - הסוף המר):</strong><br>
        What is the direct consequence of Joe's realization at the end of the play?`,
        options: [
            "<span dir=\"ltr\">Unable to live with the heavy guilt of killing 21 pilots and causing his own son's suicide, Joe goes into the house and shoots himself.</span>",
            "<span dir=\"ltr\">Joe goes to the police station to confess his crime and free Steve Deever from prison.</span>",
            "<span dir=\"ltr\">Joe attacks Chris and kicks him out of the house forever.</span>",
            "<span dir=\"ltr\">Joe gives all his money to Ann and George as an apology.</span>"
        ],
        correctAnswer: 0,
        hint: "כשהוא מבין שהוא בעצם רצח את הבן שלו (ואת חבריו), הוא אומר 'אני הולך לשים על עצמי ז'קט' (כדי ללכת למשטרה), אבל עושה משהו קיצוני יותר.",
        solution: `<strong>הסבר מלא (סיום המחזה הטרגי):</strong><br>
        התוצאה הישירה (Effect) של גילוי האמת על לארי והבנת משמעות ה"כל בניי" היא התרסקותו הנפשית של ג'ו קלר.<br><br>
        הוא אינו יכול לשאת את <strong>רגשות האשם (Guilt)</strong> על כך שרצח טייסים ובמו ידיו דחף את בנו האהוב להתאבדות. <br>
        במקום ללכת למשטרה ולהתמודד עם כלא ובושה ציבורית, ג'ו נכנס לבית, נשמעת ירייה, והוא <strong>מתאבד (shoots himself / commits suicide)</strong>. (סוף טרגי קלאסי של מחזה מוסר).`
    },
    {
        topic: "english",
        subTopic: "All My Sons (W. Somerset Maugham)",
        question_text: `<strong>Theme: The American Dream (ביקורת על החלום האמריקאי):</strong><br>
        How does the play criticize the "American Dream"?`,
        options: [
            "<span dir=\"ltr\">It shows that the relentless pursuit of money and success can lead to moral corruption, greed, and the destruction of human lives.</span>",
            "<span dir=\"ltr\">It proves that anyone who works hard in America will eventually become rich and happy.</span>",
            "<span dir=\"ltr\">It shows that owning a factory is the only way to be a good father.</span>",
            "<span dir=\"ltr\">It criticizes the military for not paying enough money to factory owners.</span>"
        ],
        correctAnswer: 0,
        hint: "החלום האמריקאי אומר 'תעשה כסף ותבנה בית יפה ותצליח'. ג'ו עשה את זה, אבל המחיר היה דם של צעירים. ארתור מילר מעביר ביקורת על הקפיטליזם החזירי.",
        solution: `<strong>הסבר מלא (ביקורת על החלום האמריקאי):</strong><br>
        המחזאי (Arthur Miller) משתמש בסיפורה של משפחת קלר כדי לתקוף את הקפיטליזם הדורסני של ארה"ב.<br><br>
        <strong>החלום האמריקאי (The American Dream):</strong> אומר שהצלחה חומרית וכלכלית היא חזות הכל. ג'ו עשה הכל כדי להשיג את זה: הקים מפעל, קנה בית יפה. <br>
        <strong>הביקורת:</strong> המרדף העיוור אחרי כסף רווח והצלחה עסקית גורם לאנשים לאבד את המוסר שלהם (Moral corruption). ג'ו איבד את מצפונו בגלל תאוות הבצע (Greed), וזה הוביל למותו שלו ולמות טייסים חפים מפשע.`
    },


    // ---------------------------------------------------------
    // Subtopic 6: Count That Day Lost (George Eliot)
    // ---------------------------------------------------------

    {
        topic: "english",
        subTopic: "Count That Day Lost (George Eliot)",
        question_text: `<strong>Basic Structure and Contrast:</strong><br>
        How is the poem "Count That Day Lost" structured?`,
        options: [
            "<span dir=\"ltr\">It is divided into two stanzas that contrast each other: the first stanza describes a \"well-spent\" day, and the second describes a \"worse than lost\" day.</span>",
            "<span dir=\"ltr\">It is one long stanza that tells a story about an old woman counting her money.</span>",
            "<span dir=\"ltr\">It has three stanzas, each describing a different season of the year.</span>",
            "<span dir=\"ltr\">It is structured as a conversation between two people who are lost in the woods.</span>"
        ],
        correctAnswer: 0,
        hint: "השיר בנוי מ-2 בתים (stanzas). הבית הראשון מספר על דברים טובים, והשני על דברים רעים. יש פה ניגוד מובהק.",
        solution: `<strong>הסבר מלא (מבנה השיר - Structure):</strong><br>
        ניתוח שירה מתחיל במבנה. השיר של ג'ורג' אליוט קצר וקולע, והוא מבוסס על <strong>ניגוד מוחלט (Contrast)</strong>.<br><br>
        - <strong>הבית הראשון (First Stanza):</strong> מתאר "יום שנוצל היטב" (a well-spent day). מה עליך לעשות כדי להרגיש סיפוק בסוף היום.<br>
        - <strong>הבית השני (Second Stanza):</strong> מציג את ההיפך הגמור - "יום גרוע מאבוד" (a day worse than lost). מה קורה כשלא עשית שום דבר מועיל.`
    },
    {
        topic: "english",
        subTopic: "Count That Day Lost (George Eliot)",
        question_text: `<strong>A Well-Spent Day (יום שנוצל היטב):</strong><br>
        According to the first stanza, what makes a day "well spent"?`,
        options: [
            "<span dir=\"ltr\">Doing at least one self-denying deed, saying a kind word, or giving a supportive glance that brings sunshine to someone's face.</span>",
            "<span dir=\"ltr\">Making a lot of money and buying something expensive for yourself.</span>",
            "<span dir=\"ltr\">Sleeping all day and resting your body.</span>",
            "<span dir=\"ltr\">Traveling to a new country and taking pictures.</span>"
        ],
        correctAnswer: 0,
        hint: "השיר מתמקד בעזרה לזולת. מעשה טוב קטן, מילה טובה, אפילו מבט מעודד - מספיקים כדי להפוך את היום למוצלח.",
        solution: `<strong>הסבר מלא (קריטריונים ליום מוצלח):</strong><br>
        המשוררת מציבה רף נמוך ומקסים כדי להחשיב יום כמוצלח.<br>
        אתה לא צריך להיות גיבור על או לתרום מיליונים.<br>
        מספיק שעשית אחד משלושת הדברים הבאים:<br>
        1. <strong>Self-denying deed</strong> (מעשה של ביטול עצמי / הקרבה קטנה למען האחר).<br>
        2. <strong>A word that eased the heart</strong> (מילה טובה שהקלה על כאב של מישהו).<br>
        3. <strong>A glance</strong> (מבט חם ומעודד שגרם למישהו לחייך).`
    },
    {
        topic: "english",
        subTopic: "Count That Day Lost (George Eliot)",
        question_text: `<strong>Visual Imagery (דימויים ויזואליים):</strong><br>
        What does the metaphor <span dir="ltr">"That fell like sunshine where it went"</span> describe?`,
        options: [
            "<span dir=\"ltr\">It describes the positive and warm effect of a kind glance or word on another person's face, bringing them joy and light.</span>",
            "<span dir=\"ltr\">It describes the hot weather during the summer when the poem was written.</span>",
            "<span dir=\"ltr\">It describes a person who is sweating from working hard all day.</span>",
            "<span dir=\"ltr\">It describes a literal sun setting at the end of the day.</span>"
        ],
        correctAnswer: 0,
        hint: "מטאפורה: כשאתה מחייך למישהו והוא שמח, זה כאילו 'שמש זורחת על הפנים שלו'.",
        solution: `<strong>הסבר מלא (Metaphor and Imagery):</strong><br>
        המשוררת משתמשת בדימוי חזותי ורגשי יפהפה.<br>
        <span dir="ltr">"Sunshine"</span> (קרני שמש) מסמלת אור, חום, תקווה ושמחה.<br><br>
        כשהיא אומרת שהמבט שלך <strong>"נפל כמו קרן שמש"</strong> על האדם השני, היא מתכוונת לכך שמעשה החסד הקטן שלך האיר את עולמו החשוך או העצוב של האדם וגרם לו לחייך או להרגיש אהוב.`
    },
    {
        topic: "english",
        subTopic: "Count That Day Lost (George Eliot)",
        question_text: `<strong>A Wasted Day (יום אבוד):</strong><br>
        According to the second stanza, why is a day considered "worse than lost"?`,
        options: [
            "<span dir=\"ltr\">Because the person did absolutely nothing to help, comfort, or bring joy to another human being during the entire day.</span>",
            "<span dir=\"ltr\">Because the person lost their money on a bad business deal.</span>",
            "<span dir=\"ltr\">Because the person forgot to count how many good deeds they did.</span>",
            "<span dir=\"ltr\">Because the day went by too fast and the sun went down.</span>"
        ],
        correctAnswer: 0,
        hint: "אם מצאת (עשית חישוב) שעברת 24 שעות שלמות ולא עשית אפילו מעשה קטן אחד למען מישהו אחר (לא עודדת, לא עזרת) - היום הזה גרוע מאבוד.",
        solution: `<strong>הסבר מלא (מהו יום גרוע מאבוד?):</strong><br>
        בבית השני, המשוררת אומרת שאם בסוף היום אתה סוקר את מעשיך (trace) ומוצא שלא עשית שום מעשה טוב (no act most small) ולא הבאת שמחה לאיש... אז היום הזה אינו רק מבוזבז, אלא <strong>"גרוע מאבוד" (Worse than lost)</strong>.<br>
        זה גרוע יותר משום שחיית יום שלם על כדור הארץ באנוכיות מוחלטת ובלי להשאיר שום חותם חיובי בעולם.`
    },
    {
        topic: "english",
        subTopic: "Count That Day Lost (George Eliot)",
        question_text: `<strong>HOTS: Explaining Patterns (הסבר תבניות זמן):</strong><br>
        The poem asks us to reflect on our actions at a specific time: <span dir="ltr">"If you sit down at set of sun"</span>. Why is sunset the chosen time?`,
        options: [
            "<span dir=\"ltr\">Sunset symbolizes the end of the day, a natural time for self-reflection and evaluating our actions before the day is completely gone.</span>",
            "<span dir=\"ltr\">Because it is too hot to sit down during the middle of the day.</span>",
            "<span dir=\"ltr\">Because the poet only liked to write poetry at night.</span>",
            "<span dir=\"ltr\">Because good deeds can only be done in the dark.</span>"
        ],
        correctAnswer: 0,
        hint: "שקיעת השמש (set of sun) היא זמן סמלי לסיום. כמו שבסוף שנה עושים 'סיכום שנה', בסוף היום עושים 'חשבון נפש' יומיומי.",
        solution: `<strong>הסבר מלא (סמליות של שקיעה - Reflection):</strong><br>
        מיומנות זיהוי התבניות מראה שהשיר חוזר על רעיון "סוף היום".<br><br>
        השקיעה (<span dir="ltr"><strong>set of sun</strong></span>) מסמלת את סגירת המעגל היומי.<br>
        זהו זמן קלאסי ושקט שבו אדם חוזר מעמלו, יושב עם עצמו ועושה <strong>חשבון נפש (Self-reflection)</strong>. המשוררת מבקשת מאיתנו לא ללכת לישון לפני שבדקנו עם עצמנו: "האם הייתי אדם טוב היום?".`
    },
    {
        topic: "english",
        subTopic: "Count That Day Lost (George Eliot)",
        question_text: `<strong>The Meaning of the Title:</strong><br>
        What does the word "Count" mean in the context of the title "Count That Day Lost"?`,
        options: [
            "<span dir=\"ltr\">It means \"Consider\" or \"Declare\". You should consider that day as a total waste.</span>",
            "<span dir=\"ltr\">It means to literally count the numbers 1, 2, 3 to see how many days are left.</span>",
            "<span dir=\"ltr\">It refers to a royal title, like a \"Count\" or \"Duke\" in a castle.</span>",
            "<span dir=\"ltr\">It means to count the money you made during that day.</span>"
        ],
        correctAnswer: 0,
        hint: "המילה Count פירושה 'לספור', אבל בהקשר הזה המשמעות היא 'להחשיב / לראות בזה כ...'. 'החשיבו את היום הזה כאבוד'.",
        solution: `<strong>הסבר מלא (משמעות פועלית של Count):</strong><br>
        הכותרת של השיר היא ציווי (Imperative).<br>
        המילה <span dir="ltr"><strong>Count</strong></span> לא משמשת כאן לספירת מתמטיקה (1,2,3).<br>
        המשמעות היא: <strong>להחשיב / לשקול / להתייחס אל (To consider / To regard)</strong>.<br><br>
        המשוררת פוקדת על הקורא: "תחשיב את היום הזה כיום אבוד!" (אם לא עזרת לאיש).`
    },
    {
        topic: "english",
        subTopic: "Count That Day Lost (George Eliot)",
        question_text: `<strong>Theme and Message (מסר השיר):</strong><br>
        What is the central theme (moral message) of the poem?`,
        options: [
            "<span dir=\"ltr\">Our lives only have meaning and value when we help others and show compassion. Selfishness makes life worthless.</span>",
            "<span dir=\"ltr\">Time is money, so you must work hard every day to become rich.</span>",
            "<span dir=\"ltr\">It is important to keep a diary and write down everything you do at sunset.</span>",
            "<span dir=\"ltr\">Nature is beautiful, especially when the sun sets.</span>"
        ],
        correctAnswer: 0,
        hint: "השיר הוא בעל טון דידקטי (מחנך). הוא אומר לך מה עושה את החיים ל'חיים ששווים משהו' (עזרה לזולת).",
        solution: `<strong>הסבר מלא (The Central Theme):</strong><br>
        "Count That Day Lost" הוא שיר דידקטי (חינוכי-מוסרי) מובהק.<br><br>
        המסר המרכזי שלו הוא <strong>קשר אנושי (Human Connection) וחסד (Compassion)</strong>.<br>
        המשוררת טוענת שלזמן אין ערך משל עצמו. יום הוא בעל ערך אך ורק אם ניצלנו אותו כדי להביא טוב לאחרים (אפילו במילה קטנה). אגואיזם ועיסוק בעצמי הופכים את החיים לריקים מתוכן (worse than lost).`
    },
    {
        topic: "english",
        subTopic: "Count That Day Lost (George Eliot)",
        question_text: `<strong>Understanding Vocabulary (Self-denying deed):</strong><br>
        What is an example of a <strong>"self-denying deed"</strong> (as mentioned in the first stanza)?`,
        options: [
            "<span dir=\"ltr\">Giving up your seat on a crowded bus to an elderly person, putting their comfort before your own.</span>",
            "<span dir=\"ltr\">Denying that you made a mistake on your test.</span>",
            "<span dir=\"ltr\">Buying yourself a nice present to feel good.</span>",
            "<span dir=\"ltr\">Refusing to talk to anyone all day to have quiet time.</span>"
        ],
        correctAnswer: 0,
        hint: "ביטול עצמי (Self-denying) אומר שאתה שם את עצמך במקום השני, כדי לעשות טוב למישהו אחר במקום הראשון.",
        solution: `<strong>הסבר מלא (Self-denying deed - מעשה של הקרבה עצמית):</strong><br>
        <span dir="ltr">Self-denial</span> (ביטול עצמי / ויתור) הוא מעשה שבו אדם מוותר על הנוחות שלו למען מישהו אחר (Altruism).<br><br>
        - מתן המושב שלך באוטובוס לזקן.<br>
        - לוותר על פרוסת העוגה האחרונה לטובת חבר.<br>
        - לעזור לחבר בשיעורי בית למרות שרצית ללכת לישון.<br>
        אלו בדיוק המעשים הקטנים שעושים יום ל"מנוצל היטב" (Well-spent).`
    },
    {
        topic: "english",
        subTopic: "Count That Day Lost (George Eliot)",
        question_text: `<strong>HOTS: Distinguishing Different Perspectives (נקודות מבט על זמן):</strong><br>
        How does the poet's perspective on the "value of time" differ from the modern business world's perspective?`,
        options: [
            "<span dir=\"ltr\">The business world measures time by money and productivity (\"Time is money\"), while the poet measures the value of time by kindness and human connection.</span>",
            "<span dir=\"ltr\">There is no difference; both believe that time should be spent resting and doing nothing.</span>",
            "<span dir=\"ltr\">The poet believes time is completely useless, while the business world values it highly.</span>",
            "<span dir=\"ltr\">The poet measures time by how many books you read, while the business world measures it by hours.</span>"
        ],
        correctAnswer: 0,
        hint: "בעולם הקפיטליסטי, אם לא עשית כסף היום - הפסדת את היום (Time is money). בשיר הזה, אם לא עזרת למישהו - הפסדת את היום.",
        solution: `<strong>הסבר מלא (HOTS - הבדל בנקודות מבט):</strong><br>
        זהו ניתוח חשיבה ברמה גבוהה של מהות השיר.<br>
        - <strong>נקודת המבט המודרנית/החומרית:</strong> יום שנוצל היטב הוא יום שבו עבדתי, ייצרתי כסף, קודמתי בעבודה ("זמן שווה כסף").<br>
        - <strong>נקודת המבט של המשוררת (George Eliot):</strong> הערך של 24 שעות לא נמדד בחומר, אלא ברגש (Emotion). המטבע שבו היא סופרת את החיים הוא <strong>חסד (Kindness)</strong>. יום בלי חסד הוא 'אבוד'.`
    },
    {
        topic: "english",
        subTopic: "Count That Day Lost (George Eliot)",
        question_text: `<strong>Tone (נימת השיר):</strong><br>
        What is the general <strong>tone</strong> of the poem?`,
        options: [
            "<span dir=\"ltr\">Didactic and moralizing (instructive, guiding people to be better).</span>",
            "<span dir=\"ltr\">Angry and violent (threatening people who don't help others).</span>",
            "<span dir=\"ltr\">Humorous and funny (making jokes about the sunset).</span>",
            "<span dir=\"ltr\">Depressed and hopeless (giving up on humanity).</span>"
        ],
        correctAnswer: 0,
        hint: "המשוררת נשמעת כמו מורה רוחנית שאומרת לנו 'אם תעשו ככה תצליחו, ואם לא - תפסידו'. זוהי נימה חינוכית.",
        solution: `<strong>הסבר מלא (נימת השיר - Tone):</strong><br>
        נימת השיר היא <span dir="ltr"><strong>Didactic</strong></span> (דידקטית - חינוכית/הדרכתית) ו-<span dir="ltr"><strong>Moral</strong></span> (מוסרית).<br><br>
        השיר לא בא לבדר אותנו ולא לכעוס עלינו. הוא משמש כ"מדריך לחיים נכונים" (A guide to living a good life). המחברת פונה אלינו ישירות (You) ונותנת לנו עצות מעשיות כיצד לבחון את עצמנו וכיצד להיות אנשים טובים יותר בחברה.`
    },// ========================================================================
// נושא: אנגלית (English)
// קטגוריה: Literature (אנגלית ספרותית לתיכון)
// פעימה 3: 30 שאלות - Lemon Brown, A View from the Bridge, The Wave
// רמה: הכנה לבגרויות (Modules D, F) - ניתוח ספרותי ו-HOTS
// ========================================================================

    // ---------------------------------------------------------
    // Subtopic 7: The Treasure of Lemon Brown
    // ---------------------------------------------------------

    {
        topic: "english",
        subTopic: "The Treasure of Lemon Brown (W. Somerset Maugham)",
        question_text: `<strong>Setting & Conflict:</strong><br>
        At the beginning of the story, why is Greg Ridley so angry and frustrated?`,
        options: [
            "<span dir=\"ltr\">His father is lecturing him about his poor math grades and refuses to let him play on the Scorpions basketball team.</span>",
            "<span dir=\"ltr\">He lost his favorite basketball and doesn't have money to buy a new one.</span>",
            "<span dir=\"ltr\">He wants to become a blues singer, but his father wants him to go to college.</span>",
            "<span dir=\"ltr\">He was expelled from school because he fought with his math teacher.</span>"
        ],
        correctAnswer: 0,
        hint: "הקונפליקט בסיפור מתחיל בבית. גרג אוהב כדורסל, אבא שלו אוהב ציונים טובים. ההתנגשות ביניהם שולחת את גרג לרחוב בגשם.",
        solution: `<strong>הסבר מלא (The Initial Conflict):</strong><br>
        הסיפור נפתח בקונפליקט בין אב לבנו (Father-son relationship). <br>
        אביו של גרג, עובד דואר קשה-יום שמעריך חינוך, גילה שגרג עומד להיכשל במתמטיקה. הוא נותן לו "הרצאה" נוקשה ואוסר עליו לשחק בקבוצת הכדורסל של השכונה (The Scorpions). מתוך כעס ומרד נעורים, גרג בורח אל בניין נטוש במקום להישאר וללמוד, ושם הוא פוגש את למון בראון.`
    },
    {
        topic: "english",
        subTopic: "The Treasure of Lemon Brown (W. Somerset Maugham)",
        question_text: `<strong>Character Introduction:</strong><br>
        Who is Lemon Brown and what is his current situation?`,
        options: [
            "<span dir=\"ltr\">He is a homeless, old man dressed in rags who used to be a famous blues singer playing the harmonica.</span>",
            "<span dir=\"ltr\">He is a rich, retired musician who lives in a penthouse in Harlem.</span>",
            "<span dir=\"ltr\">He is a local gangster who hides stolen money in abandoned buildings.</span>",
            "<span dir=\"ltr\">He is Greg's grandfather who ran away from home many years ago.</span>"
        ],
        correctAnswer: 0,
        hint: "למון בראון לבוש בסמרטוטים. בעבר הוא היה מוזיקאי מצליח (Sweet Lemon Brown).",
        solution: `<strong>הסבר מלא (Lemon Brown's Character):</strong><br>
        למון בראון מתואר כחסר בית (Homeless) שלבוש בבגדים קרועים ומלוכלכים (rags). <br>
        אולם, מתחת לחזות העלובה מסתתר עבר עשיר: הוא היה בעברו זמר בלוז (Blues singer) מפורסם למדי. השקיעה שלו לעוני מראה את הקשיים והטרגדיות של החיים, נושא מרכזי בסיפור שמלמד את גרג לא לשפוט אנשים לפי מראם החיצוני.`
    },
    {
        topic: "english",
        subTopic: "The Treasure of Lemon Brown (W. Somerset Maugham)",
        question_text: `<strong>The Threat (The Thugs):</strong><br>
        Why do the neighborhood thugs (the bad men) enter the abandoned building?`,
        options: [
            "<span dir=\"ltr\">They heard Lemon Brown saying he has a \"treasure\" and they want to rob him, thinking it is money or gold.</span>",
            "<span dir=\"ltr\">They are looking for Greg to beat him up because he wants to join the Scorpions.</span>",
            "<span dir=\"ltr\">They want to seek shelter from the heavy rain storm outside.</span>",
            "<span dir=\"ltr\">They are the owners of the building and want to throw the homeless out.</span>"
        ],
        correctAnswer: 0,
        hint: "בריונים שומעים את המילה 'אוצר' וישר חושבים על מטבעות וזהב.",
        solution: `<strong>הסבר מלא (The Rising Action):</strong><br>
        רגע המתח המרכזי בסיפור קורה כשהבריונים נכנסים למבנה. <br>
        הם שמעו שלמון בראון הזקן מסתובב ומתגאה בכך שיש לו "אוצר" (Treasure). המוח השטחי שלהם מתרגם את זה מיד לערך חומרי (כסף, תכשיטים). הם מגיעים במטרה לשדוד אותו (Rob him), מבלי להבין ש"אוצר" יכול להיות משהו בעל משמעות רגשית בלבד.`
    },
    {
        topic: "english",
        subTopic: "The Treasure of Lemon Brown (W. Somerset Maugham)",
        question_text: `<strong>HOTS: Problem Solving / Teamwork:</strong><br>
        How do Greg and Lemon Brown defeat the thugs in the dark building?`,
        options: [
            "<span dir=\"ltr\">Greg howls like a spooky ghost in the dark, and Lemon hurls his body down the stairs at them, scaring the thugs away.</span>",
            "<span dir=\"ltr\">Greg calls the police on his cell phone and they arrest the thugs.</span>",
            "<span dir=\"ltr\">Lemon Brown gives them the treasure so they will leave Greg alone.</span>",
            "<span dir=\"ltr\">Greg uses his basketball skills to throw heavy rocks at them.</span>"
        ],
        correctAnswer: 0,
        hint: "הם משתמשים באפקט ההפתעה בחושך. גרג עושה קולות מפחידים, ולמון משתמש בגוף שלו.",
        solution: `<strong>הסבר מלא (מיומנות פתרון בעיות - Problem Solving):</strong><br>
        למרות שגרג הוא רק נער ולמון הוא זקן חסר אונים, הם עובדים כצוות כדי לנצח את הבריונים המסוכנים.<br>
        גרג משתמש בחושך ומשמיע יללה מפחידה ומוזרה (<span dir="ltr">Howls</span>) שמבלבלת ומפחידה את הפורצים. בדיוק באותו רגע, למון משליך את גופו הזקן במורד המדרגות עליהם. השילוב של קול מפחיד בחשיכה והתקפה פתאומית מבריח את השודדים.`
    },
    {
        topic: "english",
        subTopic: "The Treasure of Lemon Brown (W. Somerset Maugham)",
        question_text: `<strong>The Reveal (התגלית):</strong><br>
        What exactly is Lemon Brown's famous "treasure"?`,
        options: [
            "<span dir=\"ltr\">A battered harmonica and old, yellowed newspaper clippings about his past success as a blues singer.</span>",
            "<span dir=\"ltr\">A solid gold watch given to him by the president of the United States.</span>",
            "<span dir=\"ltr\">A large bag of dollar bills he saved from his singing days.</span>",
            "<span dir=\"ltr\">A letter from his wife saying she will come back to him.</span>"
        ],
        correctAnswer: 0,
        hint: "האוצר אינו חומרי. אלו חפצים פשוטים וישנים שמייצגים את הקריירה שלו.",
        solution: `<strong>הסבר מלא (מהות האוצר):</strong><br>
        לאחר שהבריונים בורחים, למון חושף את ה"אוצר" המסתורי שהוא שמר עליו בחייו.<br>
        אלו בסך הכל: מפוחית ישנה ושבורה (a battered harmonica) וכמה גזרי עיתון מצהיבים (yellowed newspaper clippings) שמספרים על ימי התהילה שלו כ"למון בראון המתוק". <br>
        בעיני הבריונים אלו חתיכות זבל (Trash), אך בעיני למון הם האוצר הגדול ביותר בעולם.`
    },
    {
        topic: "english",
        subTopic: "The Treasure of Lemon Brown (W. Somerset Maugham)",
        question_text: `<strong>HOTS: Uncovering Motives (הבנת מניעים):</strong><br>
        <em>Why</em> did these simple items become the most valuable "treasure" in the world to Lemon Brown?`,
        options: [
            "<span dir=\"ltr\">Because he gave them to his son Jesse before the war to show him his legacy. When Jesse was killed in battle, they found the treasure on his body, proving the son respected and loved his father.</span>",
            "<span dir=\"ltr\">Because he was planning to sell them on eBay to buy a new house in Harlem.</span>",
            "<span dir=\"ltr\">Because the harmonica is made of pure silver and is worth a lot of money to collectors.</span>",
            "<span dir=\"ltr\">Because he wanted to play them for Greg to prove he was a real musician.</span>"
        ],
        correctAnswer: 0,
        hint: "הערך האמיתי של האוצר קשור לבן של למון, ג'סי, ולמה שקרה לו במלחמה.",
        solution: `<strong>הסבר מלא (Uncovering Motives - הערך הרגשי):</strong><br>
        הסיפור קורע הלב מאחורי האוצר (The Backstory): למון נתן את הפריטים לבנו ג'סי (Jesse) לפני שיצא למלחמה, כדי שהבן יידע מי היה אביו וישא עמו את המורשת (Legacy) שלו.<br><br>
        כשג'סי נהרג במלחמה, הצבא החזיר ללמון את חפציו של ג'סי. למון גילה שג'סי נשא את המפוחית וגזרי העיתון עליו כשיצא לקרב! זה הוכיח ללמון שהבן שלו <strong>העריך אותו, אהב אותו וכיבד את מי שהוא היה</strong>. לכן זהו האוצר היקר מכל - סמל לקשר ולאהבה בין אב לבנו.`
    },
    {
        topic: "english",
        subTopic: "The Treasure of Lemon Brown (W. Somerset Maugham)",
        question_text: `<strong>Theme (מסר מרכזי):</strong><br>
        What is the main lesson the author teaches us about the meaning of "Treasure"?`,
        options: [
            "<span dir=\"ltr\">A treasure doesn't have to be money or gold; its true value is subjective and comes from the emotional meaning, memories, and love it represents to a person.</span>",
            "<span dir=\"ltr\">If you tell people you have a treasure, they will always try to steal it from you.</span>",
            "<span dir=\"ltr\">A true treasure is the education you get in high school math classes.</span>",
            "<span dir=\"ltr\">Homeless people should hide their belongings better to survive.</span>"
        ],
        correctAnswer: 0,
        hint: "אוצר יכול להיות ציור שילד צייר לך, או מכתב ישן מסבא. הערך הוא רגשי, לא כספי.",
        solution: `<strong>הסבר מלא (המסר המרכזי - Theme):</strong><br>
        המוטיב המרכזי של היצירה הוא <strong>ההגדרה של אוצר (The Definition of Treasure)</strong>.<br>
        הסיפור מנפץ את התפיסה הקפיטליסטית שאוצר נמדד בכסף.<br>
        אוצר אמיתי הוא <strong>סובייקטיבי</strong>. הוא נמדד על פי הערך הרגשי (Emotional value), הזיכרונות שהוא נושא (Memories), והקשר האנושי שהוא מסמל. מה שעבור האחד הוא זבל, עבור האחר הוא סיבת הקיום.`
    },
    {
        topic: "english",
        subTopic: "The Treasure of Lemon Brown (W. Somerset Maugham)",
        question_text: `<strong>HOTS: Comparing and Contrasting (שינוי דמות):</strong><br>
        How does Greg's attitude towards his own father change after meeting Lemon Brown?`,
        options: [
            "<span dir=\"ltr\">He realizes that his father's strict lectures are actually his father's \"treasure\"—a legacy of love and care meant to give Greg a better future. He stops being angry.</span>",
            "<span dir=\"ltr\">He becomes even more angry because he realizes his father is acting like the bad thugs in the story.</span>",
            "<span dir=\"ltr\">He decides to run away from home forever and become a blues singer like Lemon.</span>",
            "<span dir=\"ltr\">He realizes he must drop out of school to help his father make more money.</span>"
        ],
        correctAnswer: 0,
        hint: "כשגרג חוזר הביתה בסוף הסיפור, הוא כבר לא כועס על ההרצאות של אבא שלו, אלא מעלה חיוך. למה?",
        solution: `<strong>הסבר מלא (שינוי והתבגרות הדמות - Character Arc):</strong><br>
        המפגש עם למון בראון גורם לגרג ל<strong>הארה (Epiphany)</strong>.<br>
        למון לימד אותו שאב מעביר לבנו את הדבר היקר לו מכל (המורשת שלו).<br><br>
        גרג מבין פתאום שה"הרצאות" הנוקשות של אבא שלו על ציונים הן לא עונש, אלא הדרך של אביו (שעובד קשה כדי לשרוד) להעניק לו "אוצר" - עתיד טוב יותר, השכלה, והזדמנויות שלאביו מעולם לא היו. גרג מחייך כי הוא מזהה את האהבה מאחורי הכעס של אביו.`
    },
    {
        topic: "english",
        subTopic: "The Treasure of Lemon Brown (W. Somerset Maugham)",
        question_text: `<strong>Foreshadowing (רמז מקדים):</strong><br>
        At the beginning of the story, the sky is described as dark, cloudy, and a storm begins. What does this weather symbolize in literature?`,
        options: [
            "<span dir=\"ltr\">It sets a gloomy mood and foreshadows (hints at) the upcoming danger, conflict, and Greg's own internal stormy feelings.</span>",
            "<span dir=\"ltr\">It symbolizes that Greg will soon become a rich man.</span>",
            "<span dir=\"ltr\">It shows that playing basketball is best done in the rain.</span>",
            "<span dir=\"ltr\">It implies that Lemon Brown can control the weather with his harmonica.</span>"
        ],
        correctAnswer: 0,
        hint: "בספרות, כשיש סערה בחוץ, יש גם סערה בלב של הגיבור (או סכנה שמתקרבת).",
        solution: `<strong>הסבר מלא (אמצעי ספרותי - Foreshadowing & Pathetic Fallacy):</strong><br>
        השימוש במזג האוויר בסיפורים אינו מקרי.<br>
        השמיים האפורים, הרעמים והגשם הכבד בתחילת הסיפור עושים שני דברים:<br>
        1. <strong>משקפים את מצבו הנפשי של גרג:</strong> כועס, זועף, וסוער מבפנים על אבא שלו.<br>
        2. <strong>מהווים רמז מטרים (Foreshadowing) לעלילה:</strong> הם יוצרים אווירה קודרת ומאיימת (Ominous mood) שמרמזת לקורא שבקרוב מאוד תגיע סכנה אמיתית (הבריונים בבניין הנטוש).`
    },
    {
        topic: "english",
        subTopic: "The Treasure of Lemon Brown (W. Somerset Maugham)",
        question_text: `<strong>Resolution (הסיום):</strong><br>
        As Greg is about to enter his house at the end of the story, why does he smile?`,
        options: [
            "<span dir=\"ltr\">He smiles because he knows his father is going to lecture him, but he now understands and appreciates the love and concern behind those lectures.</span>",
            "<span dir=\"ltr\">He smiles because he stole Lemon Brown's harmonica and plans to sell it.</span>",
            "<span dir=\"ltr\">He smiles because he knows his father finally changed his mind and will let him play basketball.</span>",
            "<span dir=\"ltr\">He smiles because he won the fight against the thugs and feels like a hero.</span>"
        ],
        correctAnswer: 0,
        hint: "החיוך בסוף הוא חיוך של בגרות והבנה. הוא יודע שההרצאה בדרך, אבל עכשיו הוא יודע שזה בא מאהבה.",
        solution: `<strong>הסבר מלא (החיוך שסוגר מעגל):</strong><br>
        הסיפור נפתח בגרג שכועס על ההרצאות של אבא שלו, ומסתיים בגרג שמחייך לקראתן.<br>
        החיוך הזה (He smiled) מסמל את ה<strong>התבגרות (Coming of age)</strong> של גרג. הוא כבר לא נער מורד שלא מבין שום דבר. הוא חוזר הביתה עם פרספקטיבה חדשה על החיים: הוא מוכן לקבל את ההרצאה, כי הוא מבין שהיא ה"אוצר" שאביו מנסה להוריש לו להמשך הדרך.`
    },


    // ---------------------------------------------------------
    // Subtopic 8: A View from the Bridge (Arthur Miller)
    // ---------------------------------------------------------

    {
        topic: "english",
        subTopic: "A View from the Bridge (Arthur Miller)",
        question_text: `<strong>The Narrator's Role:</strong><br>
        Who is Alfieri and what is his unique function in the play?`,
        options: [
            "<span dir=\"ltr\">He is a local Italian-American lawyer. He acts as the narrator and a \"Greek Chorus\", knowing the tragic ending from the start but unable to stop it. He represents the bridge between the American law and Italian code of honor.</span>",
            "<span dir=\"ltr\">He is the immigration officer who arrests Marco and Rodolpho. He acts as the main villain of the play.</span>",
            "<span dir=\"ltr\">He is Eddie's best friend from the docks who encourages Eddie to turn the brothers in to the police.</span>",
            "<span dir=\"ltr\">He is Catherine's secret father who arrives from Italy to stop the wedding.</span>"
        ],
        correctAnswer: 0,
        hint: "אלפיירי (Alfieri) מספר את הסיפור במבט לאחור. הוא כמו צופה מהצד שיודע שרכבת עומדת להתרסק, ואין לו איך לעצור אותה.",
        solution: `<strong>הסבר מלא (תפקידו של אלפיירי):</strong><br>
        אלפיירי (Alfieri) הוא <strong>עורך דין</strong> בשכונת מהגרים בניו יורק (Red Hook).<br>
        אבל התפקיד הספרותי שלו הוא להיות <strong>מקהלה יוונית (Greek Chorus)</strong>.<br><br>
        - הוא מדבר ישירות לקהל ומספק רקע.<br>
        - הוא מייצג את ה"גשר" (The Bridge) בין שני עולמות: החוק האמריקאי הכתוב (American Law) לבין חוקי הכבוד הבלתי-כתובים של המהגרים האיטלקים (Italian Omerta/Justice).<br>
        - הוא מזהיר את אדי מראש מהאסון, אך יודע שאיש לא יכול להתערב בגורל הטרגי (Fate).`
    },
    {
        topic: "english",
        subTopic: "A View from the Bridge (Arthur Miller)",
        question_text: `<strong>The Inciting Incident:</strong><br>
        What event disrupts the routine of the Carbone family and starts the conflict in the play?`,
        options: [
            "<span dir=\"ltr\">The arrival of Beatrice's cousins, Marco and Rodolpho, who enter the US illegally from Italy to work and live in the Carbone house.</span>",
            "<span dir=\"ltr\">Catherine's decision to drop out of high school and become an actress in Hollywood.</span>",
            "<span dir=\"ltr\">Eddie getting fired from his job at the docks for stealing cargo.</span>",
            "<span dir=\"ltr\">Beatrice threatening to divorce Eddie if he doesn't earn more money.</span>"
        ],
        correctAnswer: 0,
        hint: "עד שהאורחים מאיטליה הגיעו, החיים של משפחת קרבון היו שקטים ונורמליים. ההגעה שלהם מדליקה את חבית הנפץ.",
        solution: `<strong>הסבר מלא (נקודת ההתנעה - Inciting Incident):</strong><br>
        האיזון בבית משפחת קרבון מופר ברגע ששני בני הדודים של ביאטריס מגיעים לאמריקה באופן בלתי חוקי ("Submarines" - מהגרים לא חוקיים).<br><br>
        <strong>מרקו (Marco):</strong> שקט, חזק, מגיע כדי לשלוח כסף לאשתו וילדיו העניים באיטליה.<br>
        <strong>רודולפו (Rodolpho):</strong> רווק צעיר, בלונדיני, אוהב לשיר, לרקוד, ולהוציא כסף על בגדים. ההתאהבות המיידית בינו לבין קתרין (Catherine) היא זו שמציתה את הטירוף והקנאה של אדי.`
    },
    {
        topic: "english",
        subTopic: "A View from the Bridge (Arthur Miller)",
        question_text: `<strong>Eddie's Inner Conflict (האובססיה):</strong><br>
        Why is Eddie Carbone so opposed to Rodolpho and Catherine's relationship?`,
        options: [
            "<span dir=\"ltr\">Eddie has unnatural, over-protective (and suppressed romantic) feelings for Catherine. He projects his jealousy by claiming Rodolpho is a homosexual (\"not right\") who only wants an American passport.</span>",
            "<span dir=\"ltr\">Eddie knows that Rodolpho is a criminal wanted by the mafia in Italy, and wants to protect Catherine's life.</span>",
            "<span dir=\"ltr\">Eddie hates Italians and wants Catherine to marry a pure American boy.</span>",
            "<span dir=\"ltr\">Eddie is angry that Marco doesn't pay rent, so he takes it out on Rodolpho.</span>"
        ],
        correctAnswer: 0,
        hint: "אדי לא מוכן לשחרר את קתרין (אחייניתו) לאף גבר. הוא תמיד ימצא תירוץ. במקרה של רודולפו, הוא נטפל לזה שרודולפו שר ועושה תסרוקות.",
        solution: `<strong>הסבר מלא (הטרגדיה של אדי - Obsession):</strong><br>
        זהו הלב הפסיכולוגי של המחזה!<br>
        אדי מפתח <strong>רגשות מודחקים (Suppressed feelings)</strong> והגנת-יתר כלפי אחייניתו קתרין. הוא מסרב לקבל את העובדה שהיא גדלה והופכת לאישה.<br><br>
        כדי להצדיק את השנאה שלו לרודולפו (שהיא למעשה קנאה עיוורת), הוא מתרץ זאת בשני תירוצים (Rationalization):<br>
        1. <strong>"הוא לא גבר אמיתי":</strong> לרודולפו יש שיער בלונדיני, הוא שר בקול גבוה, ותופר בגדים. אדי רומז שהוא הומוסקסואל (He is "not right").<br>
        2. <strong>"הוא רוצה אזרחות":</strong> אדי טוען שרודולפו משתמש בקתרין רק כדי לקבל דרכון אמריקאי ולברוח מההגירה.`
    },
    {
        topic: "english",
        subTopic: "A View from the Bridge (Arthur Miller)",
        question_text: `<strong>HOTS: Uncovering Motives (נשיקת הבושה):</strong><br>
        In a shocking scene, Eddie suddenly kisses Catherine on the mouth, and then kisses Rodolpho. <em>Why</em> does Eddie kiss Rodolpho?`,
        options: [
            "<span dir=\"ltr\">He kisses Rodolpho to humiliate him and \"prove\" to Catherine that Rodolpho is not a real man (a homosexual), hoping this will stop the wedding.</span>",
            "<span dir=\"ltr\">He kisses him because it is a traditional Italian Mafia greeting to show respect before a wedding.</span>",
            "<span dir=\"ltr\">He accidentally kissed him while trying to push him out the door.</span>",
            "<span dir=\"ltr\">He kisses him to show Marco that he accepts Rodolpho into the family.</span>"
        ],
        correctAnswer: 0,
        hint: "זהו אקט של אלימות והשפלה (Humiliation), לא אקט של חיבה. אדי מנסה להוכיח לקתרין שרודולפו לא יגן עליה כגבר.",
        solution: `<strong>הסבר מלא (הנשיקה - The Kiss):</strong><br>
        זו אחת הסצנות החזקות בתיאטרון האמריקאי.<br>
        אדי שותה וחוזר הביתה עצבני. הוא קודם מנשק את קתרין (כדי להראות בעלות ולהפגין את תשוקתו האסורה).<br>
        אחר כך הוא מצמיד את רודולפו לקיר ומנשק גם אותו (Humiliation).<br><br>
        <strong>המניע (Motive):</strong> הוא מנסה להוכיח לקתרין ולעצמו שרודולפו הוא חלש, לא גברי (Homosexual), ולא מסוגל להגן על עצמו פיזית מגבר אחר. הוא חושב שזה מה שיגרום לקתרין להיגעל ממנו ולבטל את החתונה (אך זה משיג בדיוק את התוצאה ההפוכה).`
    },
    {
        topic: "english",
        subTopic: "A View from the Bridge (Arthur Miller)",
        question_text: `<strong>The Ultimate Betrayal:</strong><br>
        What unforgivable crime does Eddie commit against his community at the climax of the play?`,
        options: [
            "<span dir=\"ltr\">He calls the Immigration Bureau to report Marco and Rodolpho as illegal immigrants, breaking the absolute code of silence and loyalty in the Italian neighborhood.</span>",
            "<span dir=\"ltr\">He steals Marco's hard-earned money and sends it back to Italy.</span>",
            "<span dir=\"ltr\">He physically murders Rodolpho before the wedding can take place.</span>",
            "<span dir=\"ltr\">He divorces his wife Beatrice and forces her to live on the street.</span>"
        ],
        correctAnswer: 0,
        hint: "יש חוק אחד שאסור לשבור בשכונת רד-הוק: אסור להלשין למשטרה. אדי עושה בדיוק את זה.",
        solution: `<strong>הסבר מלא (The Betrayal - הבגידה הגדולה):</strong><br>
        לאחר שאלפיירי מזהיר את אדי שהחוק היחיד שהוא יכול להפעיל יעשה אותו מנודה, אדי נכנע לאובססיה שלו.<br><br>
        הוא הולך לטלפון הציבורי ו<strong>מתקשר לרשויות ההגירה (The Immigration Bureau)</strong> כדי לדווח על מרקו ורודולפו שהם שוהים בלתי חוקיים.<br>
        בכך, אדי שובר את החוק המקודש ביותר של הקהילה הסיציליאנית: <strong>קוד השתיקה (Omerta / Loyalty)</strong>. להלשין (to snitch) על בן משפחה ועל מהגרים, זהו פשע שעליו השכונה לעולם לא תסלח לו.`
    },
    {
        topic: "english",
        subTopic: "A View from the Bridge (Arthur Miller)",
        question_text: `<strong>The Spitting Scene:</strong><br>
        When the immigration officers arrest Marco and Rodolpho, what does Marco do to Eddie in front of the entire neighborhood?`,
        options: [
            "<span dir=\"ltr\">Marco spits in Eddie's face and yells \"That one! He killed my children!\", publicly destroying Eddie's name and honor.</span>",
            "<span dir=\"ltr\">Marco begs Eddie on his knees to save them and offers him all his money.</span>",
            "<span dir=\"ltr\">Marco tries to shoot Eddie with a gun but misses.</span>",
            "<span dir=\"ltr\">Marco hugs Eddie and thanks him for letting them stay so long.</span>"
        ],
        correctAnswer: 0,
        hint: "מרקו מבין מיד מי הלשין עליהם. הוא מגיב באקט הכי משפיל שיש כדי להרוס לאדי את הכבוד בשכונה.",
        solution: `<strong>הסבר מלא (אובדן ה'שם' - Loss of Name):</strong><br>
        כאשר קציני ההגירה מוציאים את מרקו החוצה אל הרחוב לעיני כל השכנים, מרקו מבין שאדי בוגד.<br>
        הוא <strong>יורק לאדי בפרצוף (Spits in his face)</strong>, וצועק לכל השכונה שאדי הוא זה שהלשין עליהם, ובכך הוא "רוצח את ילדיו" של מרקו (שיישארו רעבים באיטליה כעת).<br><br>
        אקט זה מוחק לחלוטין את ה<strong>כבוד (Honor)</strong> ואת ה<strong>שם (Name)</strong> של אדי ברחוב. חבריו מפנים לו גב ועוזבים את המקום.`
    },
    {
        topic: "english",
        subTopic: "A View from the Bridge (Arthur Miller)",
        question_text: `<strong>HOTS: Distinguishing Different Perspectives (American Law vs. Italian Justice):</strong><br>
        How does Alfieri's perspective on justice differ from Marco's perspective when Marco is in jail?`,
        options: [
            "<span dir=\"ltr\">Alfieri represents written American Law, stating Eddie did nothing illegal. Marco represents Italian Honor (Justice), believing a man who betrays his family and starves children must be punished by death, even if the law protects him.</span>",
            "<span dir=\"ltr\">Alfieri believes Eddie must be executed, while Marco thinks Eddie should just pay a fine.</span>",
            "<span dir=\"ltr\">There is no difference; both agree that Eddie is completely innocent and should be forgiven.</span>",
            "<span dir=\"ltr\">Marco believes in calling the police, while Alfieri believes in mafia justice.</span>"
        ],
        correctAnswer: 0,
        hint: "אלפיירי אומר למרקו בכלא: 'אדי לא עבר על שום חוק. אי אפשר להרוג אותו'. מרקו עונה לו: 'כל החוק לא נמצא בספרים'.",
        solution: `<strong>הסבר מלא (Law vs. Justice - חוק מול צדק):</strong><br>
        זוהי אחת התימות המרכזיות של מילר (Theme).<br>
        כאשר מרקו יושב במעצר, הוא דורש לנקום באדי (נקמת דם). <br>
        - <strong>אלפיירי (American Law):</strong> אומר שאין שום חוק שאדי עבר עליו. להפך, אדי פעל לפי החוק (דיווח על מהגרים לא חוקיים), ולכן אין עילה למשפט.<br>
        - <strong>מרקו (Italian Justice/Honor):</strong> לא מעניין אותו חוק יבש. אדי בגד במשפחה וגרם להרעבת ילדיו. עבור מרקו, הצדק הטבעי מחייב שאדם כזה ישלם בחייו, גם אם החוק האמריקאי מגן עליו.`
    },
    {
        topic: "english",
        subTopic: "A View from the Bridge (Arthur Miller)",
        question_text: `<strong>The Demands of the Tragic Hero:</strong><br>
        In the final scene, what does Eddie obsessively demand from Marco before they fight?`,
        options: [
            "<span dir=\"ltr\">Eddie demands his \"Name\" back. He wants Marco to apologize in front of the neighborhood and restore his lost honor.</span>",
            "<span dir=\"ltr\">Eddie demands that Marco give him half of the money he earned in America.</span>",
            "<span dir=\"ltr\">Eddie demands that Catherine cancel the wedding immediately.</span>",
            "<span dir=\"ltr\">Eddie demands that Marco teach him how to speak Italian.</span>"
        ],
        correctAnswer: 0,
        hint: "אדי לא מחפש כסף, ולא מעניין אותו יותר רודולפו. הוא יוצא לרחוב וצועק שוב ושוב: 'אני רוצה את ה... שלי!' (I want my...).",
        solution: `<strong>הסבר מלא (The Importance of a "Name"):</strong><br>
        בקהילות מהגרים סגורות, ה"שם" (מוניטין/כבוד) של אדם הוא הנכס היחיד שיש לו.<br>
        בסצנת הסיום, אדי מסרב לברוח או לחזור הביתה. הוא יוצא לרחוב עם סכין, עיוור מזעם, ודורש ממרקו דבר אחד: <strong>"I want my name! He's gonna take that back or I'll kill him!"</strong><br><br>
        אדי דורש שמרקו יחזיר לו את הכבוד שהרס כשיורק עליו. הוא לא מבין (The Tragic Flaw) שהוא זה שהרס לעצמו את השם כשהלשין, ולא מרקו.`
    },
    {
        topic: "english",
        subTopic: "A View from the Bridge (Arthur Miller)",
        question_text: `<strong>The Resolution (The Death of Eddie):</strong><br>
        How exactly does Eddie Carbone die at the end of the play?`,
        options: [
            "<span dir=\"ltr\">Eddie attacks Marco with a knife, but Marco turns Eddie's arm around, causing Eddie to be stabbed by his own knife.</span>",
            "<span dir=\"ltr\">Marco shoots Eddie with a gun he bought from a local gangster.</span>",
            "<span dir=\"ltr\">Eddie jumps off the Brooklyn Bridge out of terrible guilt and shame.</span>",
            "<span dir=\"ltr\">The immigration officers shoot Eddie while trying to protect Marco.</span>"
        ],
        correctAnswer: 0,
        hint: "המוות שלו הוא מאוד סמלי. הוא מביא את הנשק כדי לפגוע במרקו, אבל הנשק שלו מסתובב ופוגע בו עצמו.",
        solution: `<strong>הסבר מלא (המוות הסמלי):</strong><br>
        המוות של אדי הוא שיא הטרגדיה היוונית (Greek Tragedy) שמילר יצר.<br>
        אדי שולף סכין כדי לדקור את מרקו. במאבק ביניהם, מרקו (שחזק ממנו בהרבה) תופס לאדי את היד, <strong>מסובב את הסכין (Turns the knife inward)</strong>, ואדי נדקר למוות מהסכין של עצמו.<br><br>
        <strong>הסמליות:</strong> אדי הרס את עצמו. האובססיה שלו, השנאה שלו, והסכין שלו – הם אלו שהביאו לסופו, ולא אף גורם חיצוני.`
    },
    {
        topic: "english",
        subTopic: "A View from the Bridge (Arthur Miller)",
        question_text: `<strong>Symbolism: The Bridge:</strong><br>
        What does the "Bridge" (specifically the Brooklyn Bridge) symbolize in the title "A View from the Bridge"?`,
        options: [
            "<span dir=\"ltr\">It symbolizes a high, objective viewpoint (Alfieri's view) watching the tragic events unfold below. It also represents the link between the old Italian culture and modern American society.</span>",
            "<span dir=\"ltr\">It symbolizes Eddie's job as a construction worker building bridges in New York.</span>",
            "<span dir=\"ltr\">It symbolizes the physical distance between Eddie and Catherine's love.</span>",
            "<span dir=\"ltr\">It symbolizes the boats that bring the illegal immigrants safely to shore.</span>"
        ],
        correctAnswer: 0,
        hint: "הגשר הוא גם מקום תצפית (Alfieri רואה הכל מלמעלה אבל לא יכול להתערב), וגם חיבור בין שתי ארצות ושני עולמות מוסריים.",
        solution: `<strong>הסבר מלא (משמעות הכותרת - The Bridge):</strong><br>
        לכותרת "מראה מעל הגשר" יש משמעות כפולה עמוקה:<br><br>
        1. <strong>נקודת המבט (The Viewpoint):</strong> אלפיירי יושב (מטפורית) על הגשר, צופה מלמעלה בחיי המהגרים ברד-הוק שבברוקלין. הוא רואה את הטרגדיה מתפתחת (כמו תאונת דרכים) ויש לו ראייה אובייקטיבית וברורה של ההרס, אך הוא אינו יכול לעצור אותו.<br>
        2. <strong>חיבור בין עולמות (The Link):</strong> גשר ברוקלין מחבר בין שכונת המהגרים (איטליה/עולם ישן) לבין מנהטן (אמריקה המודרנית/החוק הכתוב). המחזה כולו מתרחש על התפר שבין שני העולמות הללו.`
    },


    // ---------------------------------------------------------
    // Subtopic 9: The Wave (Morton Rhue)
    // ---------------------------------------------------------

    {
        topic: "english",
        subTopic: "The Wave (Morton Rhue)",
        question_text: `<strong>The Trigger (הגורם לניסוי):</strong><br>
        What question asked by the students during history class motivated Mr. Ben Ross to start "The Wave" experiment?`,
        options: [
            "<span dir=\"ltr\">\"Why didn't the ordinary German citizens try to stop the Nazis and the Holocaust?\"</span>",
            "<span dir=\"ltr\">\"Why did the Americans enter World War II so late?\"</span>",
            "<span dir=\"ltr\">\"How do we win the upcoming football game against the rival school?\"</span>",
            "<span dir=\"ltr\">\"Why is the principal allowing bullying in the school yard?\"</span>"
        ],
        correctAnswer: 0,
        hint: "בן רוס מראה להם סרט דוקומנטרי על השואה. התלמידים בהלם ולא מבינים איך כל שאר התושבים עמדו מהצד ולא עשו כלום.",
        solution: `<strong>הסבר מלא (The Catalyst / Trigger):</strong><br>
        הספר נפתח בשיעור היסטוריה שבו המורה, בן רוס (Ben Ross), מקרין סרט על מחנות הריכוז (The Holocaust).<br>
        התלמידים שואלים שאלה שהוא לא יודע לענות עליה במילים: <strong>"איך ייתכן שהגרמנים הרגילים (Ordinary Germans) אמרו שהם לא ידעו על כך, ומדוע הם לא ניסו לעצור את הנאצים?"</strong><br><br>
        כדי לענות להם על שאלת העיוורון העדרי (Mob mentality), רוס מחליט לבצע ניסוי פסיכולוגי קטן, שמהר מאוד יוצא מכלל שליטה.`
    },
    {
        topic: "english",
        subTopic: "The Wave (Morton Rhue)",
        question_text: `<strong>The Mottos (הסיסמאות של הנחשול):</strong><br>
        What are the three main mottos (principles) that Ben Ross introduces to build the fascist movement in his class?`,
        options: [
            "<span dir=\"ltr\">Strength through Discipline, Strength through Community, Strength through Action.</span>",
            "<span dir=\"ltr\">Freedom through Joy, Peace through Love, Equality through Law.</span>",
            "<span dir=\"ltr\">Study hard, Play hard, Win the game.</span>",
            "<span dir=\"ltr\">Strength through Money, Power through War, Victory through Hate.</span>"
        ],
        correctAnswer: 0,
        hint: "בן רוס בונה את הדיקטטורה בשלושה שלבים. קודם משמעת (משמעת בכיתה), אחר כך קהילה (אנחנו גוף אחד), ואז פעולה (לגייס עוד אנשים).",
        solution: `<strong>הסבר מלא (The 3 Mottos of the Wave):</strong><br>
        כדי לשטוף את מוחם של התלמידים, רוס מכניס סיסמאות קליטות וקצביות שגורמות להם להרגיש חזקים. הן מוצגות בהדרגה:<br><br>
        1. <strong>Strength through Discipline (כוח מתוך משמעת):</strong> ישיבה זקופה, קריאה למורה "מר רוס".<br>
        2. <strong>Strength through Community (כוח מתוך קהילה):</strong> מחיקת האינדיבידואל (Individuality). כולם שווים, כולם קבוצה אחת גדולה (סמל הנחשול).<br>
        3. <strong>Strength through Action (כוח מתוך פעולה):</strong> יציאה החוצה לגייס חברים נוספים, ריגול אחרי מתנגדים.`
    },
    {
        topic: "english",
        subTopic: "The Wave (Morton Rhue)",
        question_text: `<strong>Character Analysis (Robert Billings):</strong><br>
        Why does Robert Billings, the class loser, benefit the most from The Wave in the beginning?`,
        options: [
            "<span dir=\"ltr\">Because The Wave eliminates individual competition. In this \"equal\" community, nobody laughs at him anymore, and he gains sudden respect, false confidence, and a sense of belonging.</span>",
            "<span dir=\"ltr\">Because Mr. Ross pays him money to be his personal bodyguard during the experiment.</span>",
            "<span dir=\"ltr\">Because he is secretly a genius and uses The Wave to get straight A's in math.</span>",
            "<span dir=\"ltr\">Because he uses The Wave to become the captain of the football team.</span>"
        ],
        correctAnswer: 0,
        hint: "רוברט היה הילד השקוף שכולם צחקו עליו, ותמיד חי בצל של אחיו המוצלח. ברגע ש'הנחשול' הפך את כולם ל'שווים', רוברט נולד מחדש.",
        solution: `<strong>הסבר מלא (האטרקטיביות של הפשיזם לחלשים):</strong><br>
        רוברט בילינגס (Robert Billings) הוא הדמות שעוברת את השינוי הקיצוני ביותר.<br>
        לפני הנחשול הוא היה "הלוזר של הכיתה", תמיד בצל של אחיו הגדול והמוצלח, חסר ביטחון, ומושא ללעג.<br><br>
        הנחשול מציע <strong>קהילה שבה כולם שווים ואין תחרות אישית</strong>. פתאום, אף אחד לא טוב ממנו (מחיקת התחרות). הוא הופך לחייל המצטיין של התנועה, ואף ממנה את עצמו לשומר הראש (Bodyguard) של בן רוס. זה נותן לו מקום שייכות (Sense of belonging), שבלעדיו הניסוי לא היה עובד.`
    },
    {
        topic: "english",
        subTopic: "The Wave (Morton Rhue)",
        question_text: `<strong>Character Conflict (Laurie Saunders):</strong><br>
        What is Laurie's role in stopping The Wave?`,
        options: [
            "<span dir=\"ltr\">As the editor-in-chief of the school newspaper (The Grapevine), she investigates the dark side of The Wave and publishes an article exposing the bullying and loss of freedom, becoming its main opponent.</span>",
            "<span dir=\"ltr\">She organizes a violent protest with the school's principal to physically fight The Wave members.</span>",
            "<span dir=\"ltr\">She drops out of school and calls the local police to arrest Mr. Ross.</span>",
            "<span dir=\"ltr\">She joins The Wave but destroys it from the inside by giving them wrong orders.</span>"
        ],
        correctAnswer: 0,
        hint: "לורי היא העורכת של עיתון בית הספר 'The Grapevine'. היא משתמשת בעיתונות חופשית כדי להילחם בדיקטטורה.",
        solution: `<strong>הסבר מלא (כוחה של עיתונות חופשית):</strong><br>
        לורי סונדרס (Laurie Saunders) היא גיבורת הספר, המייצגת את ה<strong>אינדיבידואליזם (Individuality)</strong> והחשיבה העצמאית (Critical thinking).<br><br>
        בתחילת הניסוי היא מעט מהססת, אך כשהיא שומעת על מקרי אלימות והפחדה נגד תלמידים שלא רצו להצטרף (Bullying), היא משתמשת בכוח שלה כעורכת העיתון <span dir="ltr">The Grapevine</span>. <br>
        היא מפרסמת גיליון חריף שחושף את שטיפת המוח, ובכך הופכת ל"אויבת מספר אחת" של התנועה ושל חבר שלה, דייויד.`
    },
    {
        topic: "english",
        subTopic: "The Wave (Morton Rhue)",
        question_text: `<strong>HOTS: Cause and Effect (The Turning Point for David):</strong><br>
        What horrifying event finally makes David Collins wake up and realize that The Wave is dangerous and wrong?`,
        options: [
            "<span dir=\"ltr\">He gets into a heated argument with Laurie, loses his temper, and physically pushes her to the ground. Seeing that The Wave made him hurt the girl he loves snaps him back to reality.</span>",
            "<span dir=\"ltr\">He gets a bad grade on his history test because he spent too much time organizing The Wave rallies.</span>",
            "<span dir=\"ltr\">He sees Mr. Ross stealing money from the school to fund The Wave.</span>",
            "<span dir=\"ltr\">The football team loses the game despite using The Wave chants, proving the movement is useless.</span>"
        ],
        correctAnswer: 0,
        hint: "דייויד מנסה לשכנע את לורי להפסיק לכתוב נגד הנחשול. היא מסרבת, והוא מגיב באלימות פיזית שמעירה אותו מהטראנס.",
        solution: `<strong>הסבר מלא (נקודת המפנה - The Wake-up Call):</strong><br>
        דייויד (David Collins) נשאב עמוק לתוך הנחשול מתוך תקווה שזה יגבש את קבוצת הכדורסל שלו.<br><br>
        <strong>השיא (Climax) עבור דייויד:</strong> כשהוא דורש מלורי, חברתו, להפסיק לכתוב נגד הנחשול, היא מסרבת. הוא מאבד שליטה ו<strong>דוחף אותה לרצפה (Pushes her down)</strong>.<br>
        ברגע שהיא נופלת, הוא חווה הארה (Epiphany). הוא מזועזע מכך שתנועה שאמורה לעשות "טוב" הפכה אותו למפלצת שפוגעת באדם שהוא הכי אוהב. זה הרגע שבו הוא מבין שהנחשול מסוכן ומתנתק ממנו.`
    },
    {
        topic: "english",
        subTopic: "The Wave (Morton Rhue)",
        question_text: `<strong>The Climax of the Novel (The Rally):</strong><br>
        During the final emergency rally in the auditorium, Mr. Ross says he will reveal the "National Leader" of The Wave on the big screen. Who appears on the screen?`,
        options: [
            "<span dir=\"ltr\">A giant image of Adolf Hitler giving a speech to the Nazi crowds.</span>",
            "<span dir=\"ltr\">The principal of Gordon High School, Mr. Owens.</span>",
            "<span dir=\"ltr\">A famous American football coach.</span>",
            "<span dir=\"ltr\">Mr. Ross himself, declaring that he is the ultimate dictator.</span>"
        ],
        correctAnswer: 0,
        hint: "הניסוי התחיל בשאלה על השואה וגרמניה הנאצית. הסוף של הניסוי נסגר בדיוק עם אותו אדם.",
        solution: `<strong>הסבר מלא (סגירת המעגל בסוף הניסוי):</strong><br>
        בן רוס מבין שעליו לעצור את הניסוי ב"זעזוע מוחלט" כדי שהלקח יילמד לתמיד.<br>
        הוא מכנס את כל חברי התנועה באודיטוריום ומבטיח להראות להם את "המנהיג הלאומי" שלהם שעומד להקים תנועות נוער בכל המדינה.<br><br>
        כשהמסך נדלק, מופיע <strong>אדולף היטלר (Adolf Hitler)</strong> על המסך לצד צלבי קרס. תדהמה מוחלטת יורדת על האולם. רוס צועק עליהם: "הנה המנהיג שלכם! הייתם מוכנים לוותר על החופש שלכם וללכת אחריו לעשות הכל!"`
    },
    {
        topic: "english",
        subTopic: "The Wave (Morton Rhue)",
        question_text: `<strong>The Ultimate Lesson:</strong><br>
        What is the main lesson that Ben Ross forces the students to learn at the end of the experiment?`,
        options: [
            "<span dir=\"ltr\">That fascism can happen anywhere, even in modern America, if people stop thinking for themselves and blindly follow a group.</span>",
            "<span dir=\"ltr\">That strict discipline and sitting straight are the keys to getting good grades in high school.</span>",
            "<span dir=\"ltr\">That high school students are too young to understand history correctly.</span>",
            "<span dir=\"ltr\">That history repeats itself only in European countries.</span>"
        ],
        correctAnswer: 0,
        hint: "בתחילת הספר הם אמרו: 'זה קרה רק בגרמניה, לנו זה בחיים לא יקרה'. בסוף הספר הם מבינים שהם היו רחוקים צעד אחד מלהפוך ל'נאצים' בעצמם.",
        solution: `<strong>הסבר מלא (המסר של הספר - The Central Theme):</strong><br>
        הספר מתמודד עם הסכנה של <strong>קונפורמיות (Conformity - הליכה בתלם)</strong> מול הצורך ב<strong>אינדיבידואליזם (Individuality) וחשיבה ביקורתית</strong>.<br><br>
        הלקח הוא שהפשיזם לא שמור רק לגרמניה של 1930. הוא טבוע בטבע האנושי (הרצון להיות שייך, להיות שווה, לקבל כוח מקבוצה). ברגע שאנשים מוותרים על זכותם לחשוב בעצמם (Think for themselves) ומצייתים בעיוורון לקבוצה ולמנהיג – הדרך לרודנות ולאלימות (כמו הרחבת תלמידים מחוץ לנחשול) היא קצרה מאוד.`
    },
    {
        topic: "english",
        subTopic: "The Wave (Morton Rhue)",
        question_text: `<strong>HOTS: Inferring (הבנת רגשותיו של המורה):</strong><br>
        After the shocking rally, when everyone is leaving in tears, Mr. Ross sees Robert Billings crying alone. Why does Mr. Ross feel immensely guilty at this moment?`,
        options: [
            "<span dir=\"ltr\">He realizes that his psychological experiment had real, devastating victims. Robert lost his new identity, confidence, and community, and is now returning to be the class loser.</span>",
            "<span dir=\"ltr\">He is sad because Robert didn't bring him his coffee that morning as the bodyguard.</span>",
            "<span dir=\"ltr\">He feels guilty because he stole Robert's money to buy the projectors.</span>",
            "<span dir=\"ltr\">He realizes Robert was actually a better leader than him.</span>"
        ],
        correctAnswer: 0,
        hint: "עבור כולם הניסוי היה רק 'שיעור כואב בהיסטוריה'. עבור רוברט, הניסוי היה החיים עצמם (המקום היחיד שבו העריכו אותו). עכשיו לקחו לו את זה.",
        solution: `<strong>הסבר מלא (המחיר האמיתי של הניסוי):</strong><br>
        בן רוס שיחק באש (ניסוי פסיכולוגי בבני אדם ללא אישור וללא פיקוח).<br><br>
        בסוף העצרת, רוב התלמידים מפיקים את הלקח, זורקים את כרטיסי החבר שלהם והולכים הביתה.<br>
        אבל <strong>רוברט בילינגס נשאר שבור ובוכה</strong>. הנחשול היה הדבר היחיד שהעניק לו מעמד וכבוד בחיים. ביטול הנחשול מחזיר אותו מיד למעמד של הילד הדחוי (Class loser). <br>
        רוס מרגיש אשמה נוראית (Guilt) כי הוא מבין שהוא השתמש בילד פגיע ככלי ניסוי, ולכן הוא מזמין אותו לאכול איתו כדי לנסות לעזור לו להשתקם.`
    },
    {
        topic: "english",
        subTopic: "The Wave (Morton Rhue)",
        question_text: `<strong>Symbolism (סמליות הנחשול):</strong><br>
        Why did Mr. Ross choose "The Wave" as the symbol for the movement?`,
        options: [
            "<span dir=\"ltr\">A wave is a powerful, unstoppable force of nature that sweeps everything along with it, just as the group movement sweeps up individuals and destroys independent thought.</span>",
            "<span dir=\"ltr\">Because the school is located right next to the beach, and the students love surfing.</span>",
            "<span dir=\"ltr\">Because Mr. Ross is a science teacher who studies the physics of the ocean.</span>",
            "<span dir=\"ltr\">Because it looks like a person waving hello, showing that the movement is friendly.</span>"
        ],
        correctAnswer: 0,
        hint: "נחשול (גל ענק / צונאמי) לא שואל אותך אם בא לך ללכת איתו או לא. הוא פשוט שוטף וסוחף אותך בכוח אלים.",
        solution: `<strong>הסבר מלא (הסמליות - The Symbol):</strong><br>
        השם <strong>"The Wave" (הנחשול / גל ענק)</strong> נבחר בקפידה (Symbolism).<br><br>
        גל בים הוא כוח עצום וחסר מעצורים (Unstoppable force). אדם אחד לא יכול לעצור גל, ומי שלא זורם איתו נרמס תחתיו. בדיוק כך פועל <strong>לחץ חברתי (Peer pressure)</strong> ואפקט העדר – הוא שוטף את כולם יחד, מעלים את השוני בין הטיפות (האנשים הבודדים), והורס את מי שמתנגד לו בדרכו.`
    },
    {
        topic: "english",
        subTopic: "The Wave (Morton Rhue)",
        question_text: `<strong>Character Development (Mr. Ross):</strong><br>
        How does the experiment negatively affect Mr. Ross himself during the process?`,
        options: [
            "<span dir=\"ltr\">He becomes obsessed with his own power. He starts enjoying being treated as a supreme leader and loses sight of his original educational purpose, becoming part of the experiment himself.</span>",
            "<span dir=\"ltr\">He loses all his money trying to print posters and magazines for the movement.</span>",
            "<span dir=\"ltr\">He gets fired from his job and has to leave the state.</span>",
            "<span dir=\"ltr\">He becomes terribly sick from stress and ends up in the hospital.</span>"
        ],
        correctAnswer: 0,
        hint: "אשתו של רוס (כריסטי) מזהירה אותו: 'אתה מתחיל להפוך למושא הניסוי בעצמך'. הוא מתחיל לאהוב את הכוח (Power) שיש לו על הילדים.",
        solution: `<strong>הסבר מלא (The Danger of Power - שכרון כוח):</strong><br>
        הספר לא רק מזהיר מפני ה"מונהגים" אלא גם מפני ה"מנהיג".<br><br>
        בן רוס מתחיל את הניסוי ממניעים טהורים (מורה כריזמטי שרוצה ללמד היסטוריה). אך ככל שהניסוי גדל, רוס <strong>מסתנוור מהכוח</strong> (Power corrupts). הוא נהנה מכך שהתלמידים מצדיעים לו, שיש לו שומר ראש אישי, ושהוא שולט במאות אנשים. <br>
        הוא מאבד שליטה ומודה בסוף שאם הוא היה קצת פחות מודע, הוא היה עלול להפוך לדיקטטור אמיתי. הוא היה ה"גיני-פיג" (שפן הניסיונות) לא פחות מהתלמידים.`
    },// ---------------------------------------------------------
    // Subtopic 10: HOTS - Higher Order Thinking Skills
    // ---------------------------------------------------------

    {
        topic: "english",
        subTopic: "HOTS - Higher Order Thinking Skills (מיומנויות חשיבה מסדר גבוה)",
        question_text: `<strong>Understanding Inferring (הסקת מסקנות):</strong><br>
        What does the HOTS of "Inferring" mean when analyzing a literary text?`,
        options: [
            "<span dir=\"ltr\">Reading between the lines to find hidden meanings that the author hints at but does not state directly.</span>",
            "<span dir=\"ltr\">Finding exact facts, dates, and names explicitly written in the first paragraph.</span>",
            "<span dir=\"ltr\">Comparing the beginning of the story to the end of the story.</span>",
            "<span dir=\"ltr\">Explaining the historical background of the author's life.</span>"
        ],
        correctAnswer: 0,
        hint: "להסיק מסקנות זה כמו להיות בלש. אתה לוקח רמזים שהסופר נתן, ומבין לבד את מה שלא כתוב במפורש.",
        solution: `<strong>הסבר מלא (מיומנות Inferring):</strong><br>
        מיומנות <strong>Inferring (הסקת מסקנות / קריאה בין השורות)</strong> היא אולי ה-HOTS החשובה ביותר בבגרות.<br><br>
        כשהשאלה שואלת "What can you infer...?", התשובה <u>אף פעם לא תהיה כתובה במפורש בטקסט</u>.<br>
        עליך לקחת עובדות מהטקסט ולחבר אותן כדי להגיע למסקנה הגיונית. למשל: אם כתוב שהדמות מסתכלת על הרצפה ומאדימה, אנחנו <strong>מסיקים</strong> שהיא מתביישת (למרות שהמילה 'מתביישת' לא מופיעה בטקסט).`
    },
    {
        topic: "english",
        subTopic: "HOTS - Higher Order Thinking Skills (מיומנויות חשיבה מסדר גבוה)",
        question_text: `<strong>Uncovering Motives (חשיפת מניעים):</strong><br>
        When a test question asks you: <em>"Why did the character act this way?"</em> or <em>"What caused him to lie?"</em>, which HOTS are you expected to use?`,
        options: [
            "<span dir=\"ltr\">Uncovering Motives (חשיפת מניעים)</span>",
            "<span dir=\"ltr\">Explaining Patterns (הסבר תבניות)</span>",
            "<span dir=\"ltr\">Comparing and Contrasting (השוואה ועימות)</span>",
            "<span dir=\"ltr\">Sequencing (רצף אירועים)</span>"
        ],
        correctAnswer: 0,
        hint: "השאלה מחפשת את 'המנוע' או הדרייב הפסיכולוגי שגרם לדמות לעשות את מה שעשתה (למשל, למה ג'ורג' שיקר למר קטנזארה).",
        solution: `<strong>הסבר מלא (מיומנות Uncovering Motives):</strong><br>
        <strong>חשיפת מניעים (Uncovering Motives)</strong> עוסקת בפסיכולוגיה של הדמויות.<br><br>
        מניע (Motive) הוא הסיבה הפנימית והרגשית שדוחפת אדם לפעול. <br>
        כשאנחנו נשאלים על מניע, אנו צריכים להסביר אילו רגשות (פחד, קנאה, רצון לכבוד, אהבה) גרמו לדמות לקבל החלטה ספציפית בסיפור. (למשל: ג'ורג' שיקר כי המניע שלו היה להשיג כבוד בלי להתאמץ).`
    },
    {
        topic: "english",
        subTopic: "HOTS - Higher Order Thinking Skills (מיומנויות חשיבה מסדר גבוה)",
        question_text: `<strong>Comparing and Contrasting (השוואה וניגוד):</strong><br>
        A question asks you to describe the differences between the two roads in the poem "The Road Not Taken". Which HOTS is required to answer this?`,
        options: [
            "<span dir=\"ltr\">Comparing and Contrasting</span>",
            "<span dir=\"ltr\">Distinguishing Different Perspectives</span>",
            "<span dir=\"ltr\">Cause and Effect</span>",
            "<span dir=\"ltr\">Predicting</span>"
        ],
        correctAnswer: 0,
        hint: "כאשר מבקשים מכם למצוא דמיון (Similarities) או שוני (Differences) בין שני דברים, אתם מבצעים פעולה של השוואה.",
        solution: `<strong>הסבר מלא (מיומנות Comparing and Contrasting):</strong><br>
        מיומנות זו דורשת מכם למצוא את <strong>הנקודות המשותפות וההבדלים</strong> בין שני אלמנטים (שתי דמויות, שני מקומות, שני מצבים).<br><br>
        כדי לענות על שאלה כזו בצורה מושלמת בבגרות, חובה להשתמש במילות קישור מתאימות בתשובה שלכם:<br>
        - למציאת דמיון: <span dir="ltr">Similarly, Both, Like</span>.<br>
        - למציאת שוני: <span dir="ltr">However, On the other hand, In contrast, Unlike</span>.`
    },
    {
        topic: "english",
        subTopic: "HOTS - Higher Order Thinking Skills (מיומנויות חשיבה מסדר גבוה)",
        question_text: `<strong>Distinguishing Different Perspectives (הבחנה בין נקודות מבט):</strong><br>
        What is the main goal of using the HOTS "Distinguishing Different Perspectives"?`,
        options: [
            "<span dir=\"ltr\">To understand how different characters view the exact same situation differently, based on their own beliefs and backgrounds.</span>",
            "<span dir=\"ltr\">To figure out what will happen in the next chapter of the story.</span>",
            "<span dir=\"ltr\">To explain why the author wrote the book in English.</span>",
            "<span dir=\"ltr\">To compare the beginning of the story to the end of the story.</span>"
        ],
        correctAnswer: 0,
        hint: "פרספקטיבה היא זווית ראייה (איך אני רואה את העולם). לאנשים שונים יש פרספקטיבות שונות על אותו אירוע בדיוק.",
        solution: `<strong>הסבר מלא (מיומנות הבחנה בין נקודות מבט):</strong><br>
        <strong>נקודת מבט (Perspective)</strong> היא הדרך שבה דמות חווה את המציאות.<br><br>
        מיומנות זו בודקת אם אתם מבינים שאירוע אחד יכול להיתפס בשתי דרכים שונות לחלוטין. <br>
        <strong>דוגמה קלאסית מ-"The Enemy":</strong><br>
        כאשר טום (האמריקאי הפצוע) נשטף לחוף, המשרתים רואים אותו מנקודת המבט שלהם כ"אויב ושד" שיש להיפטר ממנו. סדאו והאנה, לעומת זאת, למרות שגם הם שונאים אותו, רואים אותו מנקודת מבט של הומניזם ורפואה - כ"אדם שזקוק לעזרה".`
    },
    {
        topic: "english",
        subTopic: "HOTS - Higher Order Thinking Skills (מיומנויות חשיבה מסדר גבוה)",
        question_text: `<strong>Cause and Effect (סיבה ותוצאה):</strong><br>
        Which of the following groups of words are typical clues that you are dealing with a "Cause and Effect" HOTS question?`,
        options: [
            "<span dir=\"ltr\">\"As a result\", \"Because\", \"Consequently\", \"Led to\"</span>",
            "<span dir=\"ltr\">\"Similar to\", \"Different from\", \"Unlike\"</span>",
            "<span dir=\"ltr\">\"I think\", \"I believe\", \"From my point of view\"</span>",
            "<span dir=\"ltr\">\"First\", \"Then\", \"Finally\", \"Before\"</span>"
        ],
        correctAnswer: 0,
        hint: "קשר סיבתי אומר שדבר אחד (טריגר) גרם לדבר שני לקרות (תוצאה).",
        solution: `<strong>הסבר מלא (מיומנות Cause and Effect):</strong><br>
        במיומנות <strong>סיבה ותוצאה</strong>, אנו נדרשים להראות כיצד אירוע A הוביל ישירות להתרחשות של אירוע B.<br><br>
        - מילות סיבה: <span dir="ltr">Because, Since, Due to, Caused by</span>.<br>
        - מילות תוצאה: <span dir="ltr">As a result, Therefore, Consequently, Led to</span>.<br><br>
        <strong>דוגמה מ-"All My Sons":</strong><br>
        הסיבה: ג'ו שלח חלקי מטוס פגומים (<span dir="ltr">Cause</span>).<br>
        התוצאה: 21 טייסים נהרגו ולארי התאבד (<span dir="ltr">Effect</span>).`
    },
    {
        topic: "english",
        subTopic: "HOTS - Higher Order Thinking Skills (מיומנויות חשיבה מסדר גבוה)",
        question_text: `<strong>Explaining Patterns (הסבר תבניות):</strong><br>
        A character in a story reacts with anger every time someone mentions his father. Which HOTS helps us understand the significance of this repeating behavior?`,
        options: [
            "<span dir=\"ltr\">Explaining Patterns</span>",
            "<span dir=\"ltr\">Uncovering Motives</span>",
            "<span dir=\"ltr\">Inferring</span>",
            "<span dir=\"ltr\">Generating Possibilities</span>"
        ],
        correctAnswer: 0,
        hint: "דבר שחוזר על עצמו שוב ושוב באותה צורה (חזרה על התנהגות, מוטיב חוזר) יוצר תבנית (Pattern).",
        solution: `<strong>הסבר מלא (מיומנות Explaining Patterns):</strong><br>
        <strong>הסבר תבניות / זיהוי דפוסים</strong> היא מיומנות של זיהוי אלמנט שחוזר על עצמו ביצירה, והבנה <u>מדוע</u> הסופר בחר לחזור עליו.<br><br>
        זה יכול להיות התנהגות קבועה של דמות (למשל, מר קלדה שמתערב תמיד בכל שיחה), או מבנה של שיר (למשל, אורך השורות והחריזה בשיר "The Road Not Taken" שמדמים צעידה). זיהוי הדפוס עוזר לנו להבין את המסר העמוק של היוצר.`
    },
    {
        topic: "english",
        subTopic: "HOTS - Higher Order Thinking Skills (מיומנויות חשיבה מסדר גבוה)",
        question_text: `<strong>LOTS vs. HOTS:</strong><br>
        What is the fundamental difference between LOTS (Lower Order Thinking Skills) questions and HOTS questions on an English literature exam?`,
        options: [
            "<span dir=\"ltr\">LOTS questions ask for basic facts explicitly written in the text (Who, What, Where), while HOTS questions require deep analysis, reading between the lines, and drawing conclusions.</span>",
            "<span dir=\"ltr\">LOTS questions are used only for poetry, while HOTS questions are used only for short stories.</span>",
            "<span dir=\"ltr\">LOTS questions are always longer and harder to answer than HOTS questions.</span>",
            "<span dir=\"ltr\">There is no difference; they are just different names for the exact same questions.</span>"
        ],
        correctAnswer: 0,
        hint: "LOTS (Lower) הן שאלות בסיסיות ושטחיות של 'גזור-הדבק'. HOTS (Higher) דורשות מהמוח לעבד נתונים.",
        solution: `<strong>הסבר מלא (LOTS לעומת HOTS):</strong><br>
        מבחן הספרות בבגרות בנוי בשלבים (כמו סולם):<br><br>
        1. <strong>LOTS (Lower Order Thinking Skills):</strong> שאלות ידע בסיסי. "מי אמר למי?", "איפה מתרחש הסיפור?". התשובה נמצאת בטקסט במפורש.<br>
        2. <strong>HOTS (Higher Order Thinking Skills):</strong> שאלות חשיבה עמוקה. לאחר שהבנתם את העלילה הבסיסית, אתם נדרשים לנתח אותה: "למה הוא עשה את זה?", "מה הסמל של העץ?", "מה נקודת המבט של המחבר?".`
    },
    {
        topic: "english",
        subTopic: "HOTS - Higher Order Thinking Skills (מיומנויות חשיבה מסדר גבוה)",
        question_text: `<strong>Evaluating (הערכה):</strong><br>
        When a test question asks: <em>"Do you agree with the character's final decision? Explain your opinion,"</em> which HOTS is primarily being tested?`,
        options: [
            "<span dir=\"ltr\">Evaluating</span>",
            "<span dir=\"ltr\">Inferring</span>",
            "<span dir=\"ltr\">Explaining Patterns</span>",
            "<span dir=\"ltr\">Sequencing</span>"
        ],
        correctAnswer: 0,
        hint: "כשמבקשים ממך להביע את דעתך השיפוטית על משהו (האם זה טוב או רע, נכון או שגוי), אתה למעשה 'מעריך' את הסיטואציה.",
        solution: `<strong>הסבר מלא (מיומנות Evaluating):</strong><br>
        מיומנות ה<strong>הערכה (Evaluating)</strong> נמצאת בראש פירמידת החשיבה.<br>
        היא דורשת מהתלמיד לצאת מגבולות הטקסט עצמו, ולהביע <strong>שיפוט מוסרי או דעה אישית מנומקת</strong> לגבי מעשי הדמויות או המסר של היצירה.<br><br>
        למשל: "האם לדעתך ג'ו קלר הוא אב טוב או אב רע?". כדי לענות, עליך להגדיר מהו 'אב טוב' בעיניך, ולשפוט את פעולותיו של ג'ו ביחס להגדרה הזו.`
    },
    {
        topic: "english",
        subTopic: "HOTS - Higher Order Thinking Skills (מיומנויות חשיבה מסדר גבוה)",
        question_text: `<strong>Applying HOTS to "All My Sons":</strong><br>
        In "All My Sons", Kate repeatedly says, <em>"Because if he's dead, your father killed him."</em> <br>
        Which HOTS are we using when we realize this is the reason she refuses to accept Larry's death?`,
        options: [
            "<span dir=\"ltr\">Cause and Effect</span>",
            "<span dir=\"ltr\">Comparing and Contrasting</span>",
            "<span dir=\"ltr\">Classifying</span>",
            "<span dir=\"ltr\">Problem Solving</span>"
        ],
        correctAnswer: 0,
        hint: "היא מסבירה ש'בגלל ש... אבא שלו הרג אותו' (הסיבה), לכן היא מסרבת להאמין (התוצאה).",
        solution: `<strong>הסבר מלא (יישום Cause and Effect):</strong><br>
        זהו קשר סיבתי פסיכולוגי קלאסי במחזה (Cause and Effect).<br><br>
        - <strong>הסיבה (האמת המרה):</strong> קייט יודעת שג'ו אישר משלוח של חלקים פגומים שגרמו להתרסקויות מטוסים.<br>
        - <strong>התוצאה ההגיונית בראשה:</strong> אם נאמין שלארי התרסק, התוצאה היא שג'ו רצח אותו.<br>
        - <strong>התוצאה ההתנהגותית:</strong> כדי למנוע את ה"תוצאה" הזו, היא בוחרת בהכחשה מוחלטת של מותו.`
    },
    {
        topic: "english",
        subTopic: "HOTS - Higher Order Thinking Skills (מיומנויות חשיבה מסדר גבוה)",
        question_text: `<strong>Synthesizing HOTS (הבנה כוללת):</strong><br>
        In the bridging task (שאלת הקישור / Bridging Text and Context) on the Bagrut exam, you are asked to connect a quote about the author's life to the literary text. <br>
        To succeed in this, which action must you perform?`,
        options: [
            "<span dir=\"ltr\">You must show a clear connection (Cause and Effect / Inferring) between the author's background/biography and the themes, characters, or messages found in the story.</span>",
            "<span dir=\"ltr\">You must summarize the entire story from beginning to end without mentioning the quote.</span>",
            "<span dir=\"ltr\">You must write a new, original ending to the story based on the quote.</span>",
            "<span dir=\"ltr\">You must list all the vocabulary words you learned in the text.</span>"
        ],
        correctAnswer: 0,
        hint: "שאלת הברידג'ינג (הגשר) דורשת מכם לבנות גשר בין שני איים: האי של חיי הסופר במציאות (מידע חדש), והאי של הסיפור עצמו. אתם צריכים להראות איך הראשון השפיע על השני.",
        solution: `<strong>הסבר מלא (שאלת ה-Bridging):</strong><br>
        שאלת הקישור (Bridging Text and Context) היא השאלה המורכבת (והיקרה) ביותר בבגרות בספרות.<br><br>
        היא דורשת שילוב (סינתזה) של מיומנויות:<br>
        עליכם לקחת מידע חיצוני (למשל: "המחזאי ארתור מילר היה ביקורתי מאוד כלפי הקפיטליזם האמריקאי"), ולהראות <strong>איך (How)</strong> המידע הזה משתקף <u>בתוך</u> היצירה עצמה (למשל: "זה משתקף בדמותו של ג'ו קלר שרודף אחרי כסף על חשבון חיי אדם"). זוהי הפסגה של הבנת הספרות!`
    }
];