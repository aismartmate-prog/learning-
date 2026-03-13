// ========================================================================
// נושא: אנגלית (English)
// קטגוריה: Reading Comprehension (הבנת הנקרא - Unseen)
// פעימה 1: 30 שאלות (Junior High Level A + Level B)
// רמה: פרימיום - משלב פסקאות (Mini-Unseens) ואסטרטגיות קריאה (Scanning, Skimming, Inference)
// ========================================================================

const questionsDB = [

    // ---------------------------------------------------------
    // Subtopic 1: Junior High Texts - Level A (טקסטים לחטיבה - בסיסי) (שאלות 1-15)
    // ---------------------------------------------------------

    // Question 1 (Scanning for details)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        question_text: `<strong>Reading Strategy: Scanning for Details (סריקת פרטים)</strong><br>
        קראו את הפסקה הבאה וענו על השאלה:<br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Tom is a student in the 7th grade. Every morning, he wakes up at 6:30. He eats cereal for breakfast and drinks a glass of orange juice. He walks to school because it is very close to his house.
        </div>
        <strong>Question:</strong> What does Tom drink in the morning?`,
        options: [
            "<span dir=\"ltr\">Orange juice</span>",
            "<span dir=\"ltr\">Cereal</span>",
            "<span dir=\"ltr\">Milk</span>",
            "<span dir=\"ltr\">Water</span>"
        ],
        correctAnswer: 0,
        hint: "אסטרטגיה: חפשו בטקסט את הפועל 'drinks' (שותה) וקראו את המילים שבאות מיד אחריו.",
        solution: `<strong>הסבר מלא (אסטרטגיית Scanning):</strong><br>
        כאשר שואלים אותנו שאלה של פרט ספציפי (What does he drink?), אין צורך לקרוא את כל הטקסט מחדש. אנו מבצעים <strong>"סריקה" (Scanning)</strong> לחפש את מילת המפתח.<br><br>
        נחפש את המילה <span dir="ltr"><strong>drinks</strong></span> בטקסט.<br>
        נמצא את המשפט: <span dir="ltr">"...and <strong>drinks</strong> a glass of orange juice."</span> (ושותה כוס של מיץ תפוזים).<br>
        *Cereal (דגנים) מתייחס למה שהוא אוכל (eats), ולכן זו תשובה שגויה (מסיח עכביש).*`
    },
    // Question 2 (Reasoning / Cause)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        question_text: `<strong>Reading Strategy: Cause and Effect (סיבה ותוצאה)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Tom is a student in the 7th grade. Every morning, he wakes up at 6:30. He eats cereal for breakfast and drinks a glass of orange juice. He walks to school because it is very close to his house.
        </div>
        <strong>Question:</strong> Why does Tom walk to school?`,
        options: [
            "<span dir=\"ltr\">Because the school is very close to his house.</span>",
            "<span dir=\"ltr\">Because he doesn't have a car.</span>",
            "<span dir=\"ltr\">Because he likes to exercise in the morning.</span>",
            "<span dir=\"ltr\">Because he wakes up early.</span>"
        ],
        correctAnswer: 0,
        hint: "מילת השאלה Why (מדוע) מחפשת סיבה. חפשו בטקסט את המילה 'because' (מפני ש...) או 'so' (לכן).",
        solution: `<strong>הסבר מלא (מציאת סיבה):</strong><br>
        שאלות המתחילות במילה <span dir="ltr"><strong>Why</strong></span> דורשות מאיתנו להבין את ההיגיון שמאחורי הפעולה.<br><br>
        בטקסט כתוב: <span dir="ltr">"He walks to school <strong>because</strong> it is very close to his house."</span><br>
        (הוא הולך ברגל לבית הספר <strong>בגלל ש...</strong> זה קרוב מאוד לביתו).<br>
        התשובות האחרות נשמעות אולי הגיוניות במציאות (כמו רצון לעשות כושר), אבל הכלל באנסין הוא: <strong>מסמנים רק מה שכתוב במפורש בטקסט!</strong>`
    },
    // Question 3 (Pronoun Reference)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        question_text: `<strong>Reading Strategy: Pronoun Reference (זיהוי כינויי גוף)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Penguins are beautiful birds that live in cold places. <strong><u>They</u></strong> cannot fly, but they are amazing swimmers.
        </div>
        <strong>Question:</strong> What does the word "<strong>They</strong>" refer to? (למה מתייחסת המילה?)`,
        options: [
            "<span dir=\"ltr\">Penguins</span>",
            "<span dir=\"ltr\">Beautiful birds</span>",
            "<span dir=\"ltr\">Cold places</span>",
            "<span dir=\"ltr\">Amazing swimmers</span>"
        ],
        correctAnswer: 0,
        hint: "כינוי גוף תמיד מצביע על שם העצם שהופיע רגע לפניו במשפט הקודם. מי לא יכול לעוף?",
        solution: `<strong>הסבר מלא (מיומנות אזכור - Reference):</strong><br>
        בבגרות תמיד תופיע השאלה "What does the word X refer to?".<br>
        <strong>השיטה לפתרון:</strong> הולכים מילה אחת או משפט אחד <strong>אחורה</strong>.<br><br>
        המילה <span dir="ltr"><strong>They</strong></span> פירושה "הם". אנו מחפשים שם עצם ברבים במשפט הקודם שעליו מדובר.<br>
        המשפט הקודם מתחיל ב: <span dir="ltr">"<strong>Penguins</strong> are beautiful birds..."</span>. הפינגווינים הם אלו ש"הם אינם יכולים לעוף". לכן "They" מחליף את המילה Penguins (פינגווינים).`
    },
    // Question 4 (Vocabulary in Context)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        question_text: `<strong>Reading Strategy: Guessing Meaning from Context (משמעות מהקשר)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Sarah was very <strong><u>exhausted</u></strong> after running the long marathon. She immediately went to sleep for 10 hours.
        </div>
        <strong>Question:</strong> What is the meaning of the word "<strong>exhausted</strong>" in this text?`,
        options: [
            "<span dir=\"ltr\">Very tired</span>",
            "<span dir=\"ltr\">Very happy</span>",
            "<span dir=\"ltr\">Hungry</span>",
            "<span dir=\"ltr\">Angry</span>"
        ],
        correctAnswer: 0,
        hint: "תסתכלו על הרמזים מסביב: היא סיימה לרוץ מרתון, ומיד הלכה לישון 10 שעות. איך היא בטח הרגישה?",
        solution: `<strong>הסבר מלא (אסטרטגיית פענוח מילה קשה):</strong><br>
        גם אם אינכם מכירים את המילה <span dir="ltr"><strong>exhausted</strong></span> (תשושה/עייפה מאוד), כותב הטקסט השאיר לכם "פירורי לחם" כדי שתנחשו:<br><br>
        1. הסיבה: <span dir="ltr">after running the long marathon</span> (אחרי ריצת מרתון).<br>
        2. התוצאה: <span dir="ltr">went to sleep for 10 hours</span> (הלכה לישון 10 שעות).<br><br>
        מכאן ניתן להסיק בסבירות של 100% שהתחושה שלה היא "עייפה מאוד" (<span dir="ltr">Very tired</span>).`
    },
    // Question 5 (Main Idea)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        question_text: `<strong>Reading Strategy: Skimming for Main Idea (רעיון מרכזי)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Apples are very good for you. They have vitamins that help your body stay strong. Also, eating an apple can give you energy for the day. Dentists say that apples are good for your teeth, too.
        </div>
        <strong>Question:</strong> What is the main idea of this paragraph?`,
        options: [
            "<span dir=\"ltr\">Apples are healthy.</span>",
            "<span dir=\"ltr\">Dentists like apples.</span>",
            "<span dir=\"ltr\">Apples give you energy.</span>",
            "<span dir=\"ltr\">Apples are red and green.</span>"
        ],
        correctAnswer: 0,
        hint: "הרעיון המרכזי הוא 'המטרייה' שמכסה את כל המשפטים. זה שיש להם ויטמינים, אנרגיה, וטוב לשיניים - הכל מתחבר למסקנה אחת גדולה.",
        solution: `<strong>הסבר מלא (Skimming / רעיון מרכזי):</strong><br>
        מציאת "הרעיון המרכזי" או ה"כותרת" (Main Idea / Best Title) היא מיומנות קריטית.<br>
        - תשובה "תפוחים נותנים אנרגיה" נכונה עובדתית, אבל היא רק <u>פרט אחד קטן</u> מתוך הפסקה.<br>
        - גם רופאי השיניים הם רק עוד <u>דוגמה</u>.<br><br>
        הרעיון העוטף את כל הדוגמאות (ויטמינים, אנרגיה, שיניים) מופיע לרוב במשפט הראשון של הפסקה: <strong>תפוחים הם בריאים (טובים עבורך)</strong>. <br>לכן התשובה הנכונה היא: <span dir="ltr">Apples are healthy</span>.`
    },
    // Question 6 (True/False)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        question_text: `<strong>Reading Strategy: True or False (נכון או לא נכון)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            The library is a quiet place where people go to read and borrow books. You must not eat or talk loudly inside the library. It is open from Monday to Thursday, but it is closed on weekends.
        </div>
        <strong>Statement:</strong> You can visit the library on Saturday.<br>
        Is this statement True or False?`,
        options: [
            "<span dir=\"ltr\">False (לא נכון)</span>",
            "<span dir=\"ltr\">True (נכון)</span>"
        ],
        correctAnswer: 0,
        hint: "קראו את המשפט האחרון בטקסט: 'It is closed on weekends' (זה סגור בסופי שבוע). שבת (Saturday) היא חלק מסוף השבוע.",
        solution: `<strong>הסבר מלא (שאלות נכון/לא נכון - הסקה):</strong><br>
        לעיתים האנסין לא יכתוב את התשובה במילים מדויקות, אלא ידרוש מכם ידע כללי קל.<br><br>
        המשפט לבדיקה: "אתה יכול לבקר בספרייה ביום שבת".<br>
        בטקסט נאמר: <span dir="ltr">"it is <strong>closed on weekends</strong>"</span> (היא סגורה בסופי שבוע).<br>
        מכיוון שיום שבת (Saturday) הוא סוף השבוע, הספרייה סגורה. לכן הטענה בשאלה היא שקרית (<span dir="ltr"><strong>False</strong></span>).`
    },
    // Question 7 (Inference)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        question_text: `<strong>Reading Strategy: Inference (הסקת מסקנות)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Ben looked at his watch. It was 8:15 AM. His school bell rings at 8:00 AM. Ben started running as fast as he could down the street.
        </div>
        <strong>Question:</strong> Why is Ben running?`,
        options: [
            "<span dir=\"ltr\">He is late for school.</span>",
            "<span dir=\"ltr\">He is running for sport.</span>",
            "<span dir=\"ltr\">He is running away from a dog.</span>",
            "<span dir=\"ltr\">He wants to check his watch.</span>"
        ],
        correctAnswer: 0,
        hint: "חברו את העובדות: השעה 8:15. הצלצול היה ב-8:00. מה המשמעות של הפער הזה בזמנים לגבי תלמיד?",
        solution: `<strong>הסבר מלא (Reading between the lines):</strong><br>
        מיומנות הסקת המסקנות (Inference) דורשת מאיתנו להיות בלשים ולחבר 1+1.<br><br>
        <strong>העובדות בטקסט:</strong><br>
        - השעון מראה 8:15.<br>
        - צלצול בית הספר הוא ב-8:00.<br>
        - בן רץ מהר ככל יכולתו.<br><br>
        <strong>המסקנה הבלתי נמנעת:</strong> בן איחר לבית הספר ביותר מרבע שעה, ולכן הוא ממהר. התשובה <span dir="ltr">"He is late for school"</span> (הוא מאחר לבית הספר) אינה כתובה בטקסט במפורש, אך היא המסקנה ההגיונית היחידה.`
    },
    // Question 8 (Vocabulary: Connectors)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        question_text: `<strong>Reading Strategy: Understanding Connectors (מילות קישור)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Maya loves ice cream. <strong>However</strong>, she didn't buy any today because she had a sore throat.
        </div>
        <strong>Question:</strong> What does the word "<strong>However</strong>" tell us in this sentence?`,
        options: [
            "<span dir=\"ltr\">It shows a contrast or a surprise (ניגוד / הפתעה).</span>",
            "<span dir=\"ltr\">It shows an addition (הוספת מידע).</span>",
            "<span dir=\"ltr\">It shows the time (זמן).</span>",
            "<span dir=\"ltr\">It shows the result (תוצאה).</span>"
        ],
        correctAnswer: 0,
        hint: "המילה However פירושה 'אולם / למרות זאת'. היא באה להגיד לנו: תצפו למשהו אחד, אבל קרה משהו הפוך.",
        solution: `<strong>הסבר מלא (מילות ניגוד):</strong><br>
        במבחני הבנת הנקרא, למילות הקישור (Connectors) יש תפקיד קריטי בהבנת כוונת הכותב.<br><br>
        המשפט הראשון: "מאיה אוהבת גלידה" (הציפייה: שהיא תקנה או תאכל גלידה).<br>
        ואז מופיעה המילה <span dir="ltr"><strong>However</strong></span> (אולם / למרות זאת) – והיא שוברת את הציפייה: "אולם, היא לא קנתה היום".<br>
        לכן, המילה מראה <strong>ניגוד (Contrast)</strong> בין האהבה שלה לגלידה לבין העובדה שלא אכלה.`
    },
    // Question 9 (Details - Exception)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        question_text: `<strong>Reading Strategy: Finding Exceptions (מציאת יוצא הדופן)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            At the zoo, we saw many animals. We saw monkeys jumping on trees, a big elephant drinking water, and colorful parrots flying. We didn't see the lion because it was sleeping in its cave.
        </div>
        <strong>Question:</strong> Which animal did they NOT see?`,
        options: [
            "<span dir=\"ltr\">The lion</span>",
            "<span dir=\"ltr\">The monkey</span>",
            "<span dir=\"ltr\">The elephant</span>",
            "<span dir=\"ltr\">The parrot</span>"
        ],
        correctAnswer: 0,
        hint: "חפשו את המילה NOT (לא) או משפט שלילה (didn't) בתוך הטקסט.",
        solution: `<strong>הסבר מלא (התמודדות עם שאלות שלילה):</strong><br>
        כאשר המילה <strong>NOT</strong> מופיעה בשאלה (לרוב באותיות גדולות), עלינו לחפש בטקסט את הדבר היחיד שהוחרג מהרשימה החיובית.<br><br>
        בטקסט כתוב שחור על גבי לבן:<br>
        <span dir="ltr">"We <strong>didn't see</strong> the <u>lion</u> because it was sleeping..."</span><br>
        לכן, האריה (Lion) הוא החיה היחידה שהם לא הצליחו לראות.`
    },
    // Question 10 (Vocabulary / Numbers)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        question_text: `<strong>Reading Strategy: Numbers and Data (זיהוי נתונים)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            A standard football match has two halves. Each half is forty-five minutes long. There is a fifteen-minute break in the middle.
        </div>
        <strong>Question:</strong> How long is the break in the middle of the match?`,
        options: [
            "<span dir=\"ltr\">15 minutes</span>",
            "<span dir=\"ltr\">45 minutes</span>",
            "<span dir=\"ltr\">2 hours</span>",
            "<span dir=\"ltr\">90 minutes</span>"
        ],
        correctAnswer: 0,
        hint: "שימו לב: הטקסט משתמש במילים כדי לכתוב את המספרים (forty-five, fifteen). חפשו את המילה שקשורה להפסקה (break).",
        solution: `<strong>הסבר מלא (תרגום מספרים למילים):</strong><br>
        כותבי בחינות אוהבים לבדוק אם אתם יודעים להמיר מספרים ממילים לספרות.<br><br>
        נסרוק את הטקסט למילה <span dir="ltr"><strong>break</strong></span> (הפסקה).<br>
        המשפט הרלוונטי: <span dir="ltr">"There is a <strong>fifteen-minute</strong> break..."</span>.<br>
        המילה <span dir="ltr">fifteen</span> משמעותה המספר 15. <br>
        *(forty-five משמעותו 45, וזה מתייחס לאורך של מחצית משחק - אל תתבלבלו!)*`
    },
    // Question 11 (Sequence)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        question_text: `<strong>Reading Strategy: Sequencing (סדר התרחשויות)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            To make a sandwich, first take two slices of bread. Then, put some cheese on one slice. Next, add a tomato. Finally, put the second slice of bread on top.
        </div>
        <strong>Question:</strong> What do you do right after you put the cheese?`,
        options: [
            "<span dir=\"ltr\">Add a tomato</span>",
            "<span dir=\"ltr\">Take two slices of bread</span>",
            "<span dir=\"ltr\">Put the second slice on top</span>",
            "<span dir=\"ltr\">Eat the sandwich</span>"
        ],
        correctAnswer: 0,
        hint: "השאלה היא 'מה עושים מיד *אחרי* ששמים את הגבינה?'. מצאו את שלב הגבינה בטקסט (put some cheese) וקראו את המשפט הבא.",
        solution: `<strong>הסבר מלא (מילות סדר והוראות):</strong><br>
        כאשר טקסט מספק הוראות הכנה, הוא משתמש במילות סדר: First (ראשית), Then (ואז), Next (הבא/לאחר מכן), Finally (לבסוף).<br><br>
        השאלה דורשת למצוא את השלב שבא <u>אחרי הגבינה</u>.<br>
        - שלב 1: לקחת לחם.<br>
        - שלב 2: לשים גבינה (<span dir="ltr">put some cheese</span>).<br>
        - שלב 3 (התשובה): <span dir="ltr">"Next, <strong>add a tomato</strong>."</span> (לאחר מכן, תוסיף עגבנייה).`
    },
    // Question 12 (Author's feeling)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        question_text: `<strong>Reading Strategy: Identifying Emotion (זיהוי תחושות)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Wow! The new roller coaster at the park is amazing! It goes so fast and loops upside down. I can't wait to ride it again!
        </div>
        <strong>Question:</strong> Does the writer like the new roller coaster?`,
        options: [
            "<span dir=\"ltr\">Yes, he thinks it is amazing and wants to ride it again.</span>",
            "<span dir=\"ltr\">No, he thinks it is too fast and scary.</span>",
            "<span dir=\"ltr\">He is angry because it loops upside down.</span>",
            "<span dir=\"ltr\">We don't know from the text.</span>"
        ],
        correctAnswer: 0,
        hint: "שימו לב למילות הקריאה (Wow, amazing) ולמשפט האחרון שאומר 'אני לא יכול לחכות לעלות עליה שוב'. זה מראה על התלהבות חיובית.",
        solution: `<strong>הסבר מלא (הבנת נימת הטקסט - Tone):</strong><br>
        ניתן להבין את ה"טון" של הכותב דרך שמות התואר שבהם הוא משתמש.<br>
        מילים כמו <span dir="ltr">"Wow!"</span> (וואו!) ו-<span dir="ltr">"amazing"</span> (מדהים) הן מילים חיוביות מאוד.<br>
        ההוכחה החותכת היא המשפט האחרון: <span dir="ltr">"I can't wait to ride it again"</span> (אני לא יכול לחכות לרכוב על זה שוב). אדם שמפחד או סובל, לא ירצה לעלות שוב. לכן הכותב בוודאות אוהב את רכבת ההרים.`
    },
    // Question 13 (Multiple Details)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        question_text: `<strong>Reading Strategy: Listing (רשימות בטקסט)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            To be a good basketball player, you need three things: comfortable shoes, a lot of practice, and teamwork skills.
        </div>
        <strong>Question:</strong> According to the text, which of the following is NOT required to be a good basketball player?`,
        options: [
            "<span dir=\"ltr\">A tall height</span>",
            "<span dir=\"ltr\">Comfortable shoes</span>",
            "<span dir=\"ltr\">A lot of practice</span>",
            "<span dir=\"ltr\">Teamwork skills</span>"
        ],
        correctAnswer: 0,
        hint: "שלוש מהתשובות מופיעות בתוך הטקסט כאותה רשימה עם פסיקים ביניהן. התשובה הנכונה לשאלה היא זו ש*לא* הופיעה ברשימה.",
        solution: `<strong>הסבר מלא (מציאת פריט חסר):</strong><br>
        הטקסט מונה בדיוק שלושה דברים שצריך כדי להיות שחקן כדורסל טוב:<br>
        1. <span dir="ltr">comfortable shoes</span> (נעליים נוחות)<br>
        2. <span dir="ltr">a lot of practice</span> (הרבה אימונים)<br>
        3. <span dir="ltr">teamwork skills</span> (כישורי עבודת צוות).<br><br>
        למרות שבמציאות "גובה רב" (A tall height) עשוי לעזור בכדורסל, <strong>זה לא מוזכר בטקסט!</strong> במבחני אנגלית, אתם נשפטים אך ורק על סמך מה שכתוב מולכם, ולכן זוהי התשובה המתבקשת לשאלת ה-NOT.`
    },
    // Question 14 (Who questions)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        question_text: `<strong>Reading Strategy: Identifying People (שאלות 'מי')</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Yesterday, Mr. Smith took his students on a trip to the museum. While the students were looking at the dinosaurs, the bus driver, Mike, waited outside.
        </div>
        <strong>Question:</strong> Who waited outside the museum?`,
        options: [
            "<span dir=\"ltr\">Mike</span>",
            "<span dir=\"ltr\">Mr. Smith</span>",
            "<span dir=\"ltr\">The students</span>",
            "<span dir=\"ltr\">The dinosaurs</span>"
        ],
        correctAnswer: 0,
        hint: "השאלה היא 'מי חיכה בחוץ?'. חפשו בטקסט את הפועל 'waited outside' ובדקו איזה שם מופיע לפניו.",
        solution: `<strong>הסבר מלא:</strong><br>
        שאלת <span dir="ltr"><strong>Who</strong></span> (מי) דורשת מאיתנו למצוא את האדם שביצע את הפעולה.<br>
        נסרוק את הטקסט ונאתר את צירוף המילים <span dir="ltr">"waited outside"</span> (חיכה בחוץ).<br>
        המשפט המלא אומר: <span dir="ltr">"...the bus driver, <strong>Mike</strong>, waited outside."</span><br>
        (נהג האוטובוס, מייק, חיכה בחוץ).<br>
        מר סמית' והתלמידים היו בפנים והסתכלו על הדינוזאורים.`
    },
    // Question 15 (Simple Inference)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        question_text: `<strong>Reading Strategy: Conclusion (מסקנה פשוטה)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Danny put on his sunglasses, packed a towel, and brought sunscreen. He walked to the water and sat on the hot yellow sand.
        </div>
        <strong>Question:</strong> Where is Danny?`,
        options: [
            "<span dir=\"ltr\">At the beach</span>",
            "<span dir=\"ltr\">In a snowy mountain</span>",
            "<span dir=\"ltr\">At school</span>",
            "<span dir=\"ltr\">In his bedroom</span>"
        ],
        correctAnswer: 0,
        hint: "הוא לקח משקפי שמש, מגבת, קרם הגנה, מים וחול חם. באיזה מקום נמצאים כל הדברים האלו ביחד?",
        solution: `<strong>הסבר מלא (בניית תמונה מההקשר):</strong><br>
        הטקסט לא כותב במפורש את שם המקום, אך הוא נותן לנו מספיק רמזים חזותיים כדי להסיק זאת בוודאות (Inference):<br>
        - <span dir="ltr">sunglasses</span> (משקפי שמש)<br>
        - <span dir="ltr">towel</span> (מגבת)<br>
        - <span dir="ltr">sunscreen</span> (קרם הגנה)<br>
        - <span dir="ltr">hot yellow sand</span> (חול צהוב וחם)<br><br>
        השילוב של כולם מוכיח באופן חד משמעי שדני נמצא <strong>בחוף הים (At the beach)</strong>.`
    },


    // ---------------------------------------------------------
    // Subtopic 2: Junior High Texts - Level B (טקסטים לחטיבה - מתקדם) (שאלות 16-30)
    // ---------------------------------------------------------

    // Question 16 (Author's Purpose)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        question_text: `<strong>Reading Strategy: Author's Purpose (מטרת הכותב)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Many people throw away plastic bottles after one use. This is terrible for our oceans and animals. You must start using a reusable water bottle today to save our planet before it's too late!
        </div>
        <strong>Question:</strong> What is the author's main purpose in writing this paragraph?`,
        options: [
            "<span dir=\"ltr\">To persuade (לשכנע) people to stop using single-use plastic bottles.</span>",
            "<span dir=\"ltr\">To explain how plastic is made in factories.</span>",
            "<span dir=\"ltr\">To sell an expensive water bottle to the reader.</span>",
            "<span dir=\"ltr\">To tell a funny story about the ocean.</span>"
        ],
        correctAnswer: 0,
        hint: "כשהכותב משתמש במילים כמו 'This is terrible' (זה נורא) ו-'You must start' (אתה חייב להתחיל), המטרה שלו היא לשכנע אותך לשנות התנהגות.",
        solution: `<strong>הסבר מלא (זיהוי מטרת הכתיבה):</strong><br>
        אחת משאלות החשיבה המסדר הגבוה (HOTS) הנפוצות היא <strong>מטרת הכותב (Purpose)</strong>.<br>
        קיימות 3 מטרות עיקריות בטקסטים: <strong>T</strong>o inform (ליידע עובדות), <strong>T</strong>o persuade (לשכנע/לשנות דעה), <strong>T</strong>o entertain (לבדר).<br><br>
        בפסקה שלנו הכותב משתמש בשפה רגשית וחזקה: "זה נורא" (<span dir="ltr">terrible</span>), ומפעיל ציווי: "אתם חייבים" (<span dir="ltr">You must</span>). הוא מנסה באופן ברור <strong>לשכנע</strong> אותנו להשתמש בבקבוקים רב-פעמיים כדי להציל את כדור הארץ.`
    },
    // Question 17 (Complex Sentence / Contrast)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        question_text: `<strong>Reading Strategy: Understanding Contrast (הבנת ניגודים בטקסט מתקדם)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Smartphones are wonderful devices that help us stay connected to the world. <strong>However</strong>, psychologists warn that teenagers who spend more than 5 hours a day on their screens tend to suffer from loneliness and sleep problems.
        </div>
        <strong>Question:</strong> According to the text, what is the negative side of smartphones for teenagers?`,
        options: [
            "<span dir=\"ltr\">They can cause loneliness and sleep problems if used too much.</span>",
            "<span dir=\"ltr\">They help teenagers stay connected to the world.</span>",
            "<span dir=\"ltr\">They are very wonderful devices.</span>",
            "<span dir=\"ltr\">They cost a lot of money to buy.</span>"
        ],
        correctAnswer: 0,
        hint: "השאלה מבקשת למצוא את הצד ה'שלילי' (negative). חפשו בטקסט את המילה However (אולם/אבל) - אחריה תמיד מגיעה הבעיה או הצד השלילי.",
        solution: `<strong>הסבר מלא (מילות מעבר ומידע שלילי):</strong><br>
        מילת הקסם בפסקה היא <span dir="ltr"><strong>However</strong></span> (אולם / עם זאת). מילה זו מבצעת סיבוב פרסה.<br>
        לפניה נאמר דבר חיובי (סמארטפונים עוזרים לנו להישאר מחוברים).<br>
        אחריה, מגיע החיסרון או האזהרה. הטקסט אומר שפסיכולוגים מזהירים שבני נוער שנמצאים יותר מדי שעות מול המסך נוטים לסבול מ<strong>בדידות (loneliness) ובעיות שינה (sleep problems)</strong>. לכן, זו התשובה המדויקת לצד השלילי.`
    },
    // Question 18 (Vocabulary in context - Advanced)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        question_text: `<strong>Reading Strategy: Advanced Vocabulary in Context (אוצר מילים מתקדם)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Water is absolutely <strong><u>essential</u></strong> for human survival. A person can live for weeks without food, but without water, a human body will fail in just a few days.
        </div>
        <strong>Question:</strong> What does the word "<strong>essential</strong>" most likely mean?`,
        options: [
            "<span dir=\"ltr\">Very necessary / Crucial (חיוני, הכרחי)</span>",
            "<span dir=\"ltr\">Dangerous (מסוכן)</span>",
            "<span dir=\"ltr\">Tasty (טעים)</span>",
            "<span dir=\"ltr\">Optional (אופציונלי, ניתן לוותר עליו)</span>"
        ],
        correctAnswer: 0,
        hint: "קראו את המשך המשפט: בלי זה (מים), הגוף האנושי יקרוס תוך ימים ספורים. לכן זה משהו שממש חייבים אותו כדי לחיות.",
        solution: `<strong>הסבר מלא (הסקת פירוש מילה מהקשר):</strong><br>
        הדרך הטובה ביותר לגלות פירוש של מילה קשה באנסין היא לחפש משפטי תמיכה או ניגוד מסביבה.<br><br>
        הטקסט אומר שאפשר לחיות שבועות בלי אוכל, <strong>אבל (but)</strong> בלי מים, נמות תוך כמה ימים. זה מוכיח שמים הם לא סתם המלצה או דבר 'טעים', אלא משהו שבלעדיו אין לנו קיום.<br>
        לכן, המילה <span dir="ltr"><strong>essential</strong></span> פירושה "חיוני באופן מוחלט" או "הכרחי" (Necessary).`
    },
    // Question 19 (Summary/Main Idea of a complex paragraph)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        question_text: `<strong>Reading Strategy: Paragraph Summary (סיכום פסקה)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            In the past, people used horses and carriages to travel from one city to another, a journey that could take days. Today, thanks to high-speed trains and airplanes, the same journey takes only a few hours.
        </div>
        <strong>Question:</strong> What is the main point of this paragraph?`,
        options: [
            "<span dir=\"ltr\">To show how transportation has become much faster over time.</span>",
            "<span dir=\"ltr\">To explain why horses are better than airplanes.</span>",
            "<span dir=\"ltr\">To teach people how to ride a horse to another city.</span>",
            "<span dir=\"ltr\">To prove that modern trains are very expensive.</span>"
        ],
        correctAnswer: 0,
        hint: "הפסקה מציגה השוואה בין 'בעבר' (In the past) לקח ימים שלמים לנסוע, לעומת 'היום' (Today) שזה לוקח כמה שעות. הנושא הוא התפתחות התחבורה ומהירותה.",
        solution: `<strong>הסבר מלא (מבנה השוואתי - Comparison):</strong><br>
        הפסקה בנויה במבנה קלאסי של השוואה לאורך זמן.<br>
        - <strong>צד אחד:</strong> בעבר, מסע עם סוסים היה איטי ולקח ימים.<br>
        - <strong>צד שני:</strong> היום, רכבות ומטוסים הפכו את המסע לעניין של כמה שעות.<br><br>
        מכאן שהרעיון המרכזי הוא להראות לקורא כיצד התחבורה (Transportation) התפתחה והפכה ל<strong>מהירה הרבה יותר עם הזמן</strong>. שאר התשובות (כמו מחירי הרכבות או שסוסים טובים ממטוסים) אינן מוזכרות כלל בטקסט.`
    },
    // Question 20 (Referencing - 'This')
    {
        topic: "english",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        question_text: `<strong>Reading Strategy: Advanced Referencing (התייחסות לרעיון שלם)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Thousands of trees are cut down every day in the Amazon forest. <strong><u>This</u></strong> is causing many species of animals to lose their natural habitat and face extinction.
        </div>
        <strong>Question:</strong> What does the word "<strong>This</strong>" refer to in the text?`,
        options: [
            "<span dir=\"ltr\">The cutting down of thousands of trees every day.</span>",
            "<span dir=\"ltr\">The Amazon forest.</span>",
            "<span dir=\"ltr\">Many species of animals.</span>",
            "<span dir=\"ltr\">Natural habitat.</span>"
        ],
        correctAnswer: 0,
        hint: "לפעמים המילה This (זה) לא מתייחסת למילה אחת בודדת, אלא מצביעה על כל 'הסיטואציה' או הרעיון שהוצגו במשפט הקודם. 'זה גורם לחיות למות'. מה זה ה'זה'? הפעולה של כריתת העצים.",
        solution: `<strong>הסבר מלא (הבנת כינוי רמז לרעיון שלם):</strong><br>
        ברמה מתקדמת, המילה <span dir="ltr"><strong>This</strong></span> (הדבר הזה) לא חייבת להחליף חפץ מסוים, אלא "פעולה" שלמה שהתרחשה קודם.<br><br>
        המשפט השני אומר: "<strong>זה</strong> גורם למינים רבים של חיות לאבד את ביתן...".<br>
        מה זה ה"זה"? היער עצמו? (לא, היער הוא הבית).<br>
        ה"זה" הוא האסון המתואר במשפט הראשון: <strong>העובדה שאלפי עצים נכרתים בכל יום</strong> (<span dir="ltr">The cutting down of thousands of trees</span>). זוהי הסיבה שגורמת לבעיה.`
    },
    // Question 21 (Detail Question with Math/Logic)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        question_text: `<strong>Reading Strategy: Information Extraction (חילוץ מידע מדויק)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            The new museum exhibition opened in 2015. However, the famous dinosaur skeleton was only added to the collection three years later, attracting millions of new visitors.
        </div>
        <strong>Question:</strong> In what year was the dinosaur skeleton added to the museum?`,
        options: [
            "<span dir=\"ltr\">2018</span>",
            "<span dir=\"ltr\">2015</span>",
            "<span dir=\"ltr\">2012</span>",
            "<span dir=\"ltr\">It doesn't say.</span>"
        ],
        correctAnswer: 0,
        hint: "התערוכה נפתחה ב-2015. השלד נוסף 'three years later' (שלוש שנים מאוחר יותר). עשו חישוב מתמטי קל.",
        solution: `<strong>הסבר מלא (חישוב כרונולוגי מתוך טקסט):</strong><br>
        לעיתים תכופות כותב הטקסט לא ייתן לכם את התאריך המדויק על מגש של כסף, וידרוש קצת לוגיקה.<br><br>
        - שנת פתיחת המוזיאון: <span dir="ltr"><strong>2015</strong></span>.<br>
        - מועד הגעת שלד הדינוזאור: <span dir="ltr">"three years <strong>later</strong>"</span> (3 שנים לאחר מכן).<br><br>
        <span dir="ltr">2015 + 3 = <strong>2018</strong></span>. <br>
        לכן, שנת 2018 היא השנה המדויקת שבה השלד התווסף למוזיאון.`
    },
    // Question 22 (Contextual Synonym)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        question_text: `<strong>Reading Strategy: Identifying Synonyms (זיהוי מילים נרדפות)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            The young boy was highly <strong><u>gifted</u></strong>. At the age of five, he could already play complex Mozart pieces on the piano without looking at the notes.
        </div>
        <strong>Question:</strong> Which word can replace "<strong>gifted</strong>" without changing the meaning of the sentence?`,
        options: [
            "<span dir=\"ltr\">talented (מוכשר / בעל כישרון)</span>",
            "<span dir=\"ltr\">lazy (עצלן)</span>",
            "<span dir=\"ltr\">scared (מפוחד)</span>",
            "<span dir=\"ltr\">rich (עשיר)</span>"
        ],
        correctAnswer: 0,
        hint: "ילד בן חמש שמנגן יצירות מסובכות של מוצרט בלי להסתכל על התווים, הוא ילד שיש לו משהו מיוחד. המילה 'Gifted' באה מהמילה Gift (מתנה - ילד שקיבל מתנה מהטבע).",
        solution: `<strong>הסבר מלא (מילים נרדפות):</strong><br>
        המילה <span dir="ltr"><strong>gifted</strong></span> מתורגמת לעברית כ"מחונן" או "מוכשר בצורה יוצאת דופן" (אדם שיש לו "מתנה" קוגניטיבית).<br><br>
        ההוכחה בטקסט לכך שהוא מוכשר: הוא בן 5 ומנגן יצירות מסובכות (<span dir="ltr">complex pieces</span>) של מוצרט בעל פה.<br>
        המילה הנרדפת והמושלמת להחלפה היא <span dir="ltr"><strong>talented</strong></span> (בעל כישרון / טאלנט).`
    },
    // Question 23 (Sentence Purpose)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        question_text: `<strong>Reading Strategy: Sentence Function (הבנת תפקיד המשפט)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Exercise is crucial for teenagers. <strong>For instance, running or swimming can strengthen the heart and improve mental health.</strong> Therefore, schools should encourage daily sports.
        </div>
        <strong>Question:</strong> What is the purpose of the <strong>bold</strong> sentence ("For instance...") in the paragraph?`,
        options: [
            "<span dir=\"ltr\">To provide an example that supports the main idea.</span>",
            "<span dir=\"ltr\">To introduce a new topic about swimming.</span>",
            "<span dir=\"ltr\">To show a contrast (ניגוד) to the first sentence.</span>",
            "<span dir=\"ltr\">To conclude the paragraph.</span>"
        ],
        correctAnswer: 0,
        hint: "הביטוי 'For instance' זהה לחלוטין במשמעותו ל-'For example' (לדוגמה). כשהכותב מביא דוגמאות כמו ריצה או שחייה, הוא עושה זאת כדי להמחיש את הטענה שלו.",
        solution: `<strong>הסבר מלא (זיהוי תפקיד של משפט בטקסט):</strong><br>
        כדי לנתח פסקה נכון, צריך לשים לב למילות הקישור הפותחות כל משפט.<br><br>
        המשפט הראשון מציג את "הטענה המרכזית" (ספורט הוא קריטי לנוער).<br>
        המשפט המודגש מתחיל במילים <span dir="ltr"><strong>For instance</strong></span> (למשל/לדוגמה). הוא מפרט סוגי ספורט (ריצה, שחייה) ואת יתרונותיהם.<br>
        לכן, תפקידו המובהק של המשפט הוא <strong>לספק דוגמה (To provide an example)</strong> המחזקת את הטענה המרכזית שהוצגה קודם לכן.`
    },
    // Question 24 (Inference / Implication)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        question_text: `<strong>Reading Strategy: Implications (השתמעות מתוך הכתוב)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Unlike his older brother who always left his room in a disaster zone, Mark made sure everything was perfectly organized before he went to sleep.
        </div>
        <strong>Question:</strong> What can we imply (להסיק/מה משתמע) about Mark's older brother?`,
        options: [
            "<span dir=\"ltr\">He is very messy (מבולגן).</span>",
            "<span dir=\"ltr\">He is very neat and organized (מסודר).</span>",
            "<span dir=\"ltr\">He shares a room with Mark.</span>",
            "<span dir=\"ltr\">He goes to sleep early.</span>"
        ],
        correctAnswer: 0,
        hint: "הטקסט אומר: 'בניגוד לאחיו הגדול שתמיד השאיר את החדר שלו כאזור אסון, מארק דאג שהכל יהיה מסודר מושלם'. אז מה אנחנו מבינים על האח הגדול?",
        solution: `<strong>הסבר מלא (מיומנות השתמעות - Reading between the lines):</strong><br>
        המחבר השתמש במילת הניגוד <span dir="ltr"><strong>Unlike</strong></span> (בניגוד ל...).<br>
        הטקסט מספר לנו שתי עובדות הפוכות:<br>
        1. <strong>מארק:</strong> דואג שהכל יהיה <u>מסודר באופן מושלם</u> (<span dir="ltr">perfectly organized</span>).<br>
        2. <strong>האח הגדול:</strong> תמיד משאיר את החדר כמו <u>אזור אסון</u> (<span dir="ltr">disaster zone</span>).<br><br>
        אם החדר של האח נראה כמו אזור אסון שפגעה בו סופה, המסקנה המילונית וההגיונית היא שהוא אדם <strong>מאוד מבולגן (messy)</strong>.`
    },
    // Question 25 (False Claim / Exception)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        question_text: `<strong>Reading Strategy: False Claim (איתור טענה שקרית בטקסט)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            The new smartwatch is waterproof, has a battery that lasts for a week, and includes a heart-rate monitor. However, it does not have a built-in camera.
        </div>
        <strong>Question:</strong> Which of the following is <u>NOT</u> a feature of the new smartwatch?`,
        options: [
            "<span dir=\"ltr\">It can take pictures (camera).</span>",
            "<span dir=\"ltr\">It can work under water (waterproof).</span>",
            "<span dir=\"ltr\">It can track your heart rate.</span>",
            "<span dir=\"ltr\">Its battery can work for 7 days.</span>"
        ],
        correctAnswer: 0,
        hint: "קראו את המשפט האחרון. החיסרון היחיד של השעון הוא שאין לו...",
        solution: `<strong>הסבר מלא (השוואת נתונים):</strong><br>
        אנו צריכים לעבור תכונה-תכונה (Feature) ולוודא מול הטקסט:<br>
        - חסין מים (<span dir="ltr">waterproof</span>) - <strong>מוזכר</strong> כיש.<br>
        - סוללה לשבוע (<span dir="ltr">lasts for a week / 7 days</span>) - <strong>מוזכר</strong> כיש.<br>
        - מודד דופק לב (<span dir="ltr">heart-rate monitor</span>) - <strong>מוזכר</strong> כיש.<br><br>
        הדבר היחיד שלפי הטקסט <strong>אין לשעון (does not have)</strong>, הוא מצלמה מובנית (camera). לכן, התכונה "יכול לצלם תמונות" אינה קיימת בשעון, וזו התשובה לחיפוש ה-NOT.`
    },
    // Question 26 (Phrasal Verb meaning)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        question_text: `<strong>Reading Strategy: Phrasal Verbs (פירוש פועל יחס מתוך הקשר)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            After trying to solve the difficult math problem for two hours, John finally decided to <strong><u>give up</u></strong> and ask his teacher for help.
        </div>
        <strong>Question:</strong> What does "<strong>give up</strong>" mean in this situation?`,
        options: [
            "<span dir=\"ltr\">To stop trying (להפסיק לנסות / לוותר)</span>",
            "<span dir=\"ltr\">To give something to someone upstairs (לתת למעלה)</span>",
            "<span dir=\"ltr\">To succeed (להצליח)</span>",
            "<span dir=\"ltr\">To continue trying harder (להמשיך לנסות חזק יותר)</span>"
        ],
        correctAnswer: 0,
        hint: "אם הוא ניסה שעתיים ללא הצלחה (difficult), ובסוף הלך לבקש עזרה מהמורה – סימן שהוא החליט להרים ידיים ולוותר.",
        solution: `<strong>הסבר מלא (Phrasal Verbs):</strong><br>
        הביטוי <span dir="ltr"><strong>Give up</strong></span> הוא 'פועל פראזי' (שילוב של פועל + מילת יחס) שהמשמעות שלו שונה מהמילים המרכיבות אותו בנפרד (לתת למעלה).<br><br>
        המשמעות של "Give up" היא <strong>לוותר / להרים ידיים / להפסיק לנסות (To stop trying)</strong>.<br>
        מתוך ההקשר בטקסט: ג'ון נאבק בתרגיל קשה במשך שעתיים, ולכן הגיוני שהוא התייאש, ויתר, ופנה לעזרת המורה.`
    },
    // Question 27 (Title selection)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        question_text: `<strong>Reading Strategy: Choosing the Best Title (בחירת כותרת ממצה)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Honeybees are tiny, but they do a massive job. As they fly from flower to flower, they carry pollen. This simple action allows plants to grow fruits and vegetables. Without honeybees, humans would have much less food to eat.
        </div>
        <strong>Question:</strong> What is the best title for this text?`,
        options: [
            "<span dir=\"ltr\">Why Honeybees Are Important to Humans</span>",
            "<span dir=\"ltr\">How to Grow Fruits in Your Garden</span>",
            "<span dir=\"ltr\">The Dangers of Eating Honey</span>",
            "<span dir=\"ltr\">Flowers in the Spring</span>"
        ],
        correctAnswer: 0,
        hint: "הטקסט כולו עוסק בחיבור שבין הדבורים הקטנות (שמעבירות אבקנים) לבין האוכל של בני האדם. אם לא היו דבורים - לא היה לנו כמעט אוכל. ולכן הן...",
        solution: `<strong>הסבר מלא (כותרת טובה):</strong><br>
        כותרת נכונה צריכה להיות כמו "מטריה" שכוללת תחתיה את כל המשפטים שבטקסט.<br><br>
        - הטקסט מספר שדבורי דבש מפיצות אבקנים. <br>
        - הפעולה הזו מצמיחה לנו ירקות ופירות.<br>
        - <strong>המשפט המסכם:</strong> בלעדיהן, לבני האדם היה הרבה פחות אוכל.<br><br>
        מכאן שהנושא המרכזי שסובב את הכל הוא החשיבות העצומה של הדבורים לקיום האנושי. לכן, הכותרת: <span dir="ltr"><strong>"Why Honeybees Are Important to Humans"</strong></span> (למה דבורי דבש חשובות לבני אדם) היא המדויקת ביותר.`
    },
    // Question 28 (Sequence with subtle clues)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        question_text: `<strong>Reading Strategy: Chronological Order (סדר כרונולוגי עם מלכודת זמן)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Before Emma washed the dishes, she had already finished her homework. As soon as the kitchen was clean, she finally sat down to watch her favorite TV show.
        </div>
        <strong>Question:</strong> What was the <u>FIRST</u> thing Emma did?`,
        options: [
            "<span dir=\"ltr\">She finished her homework.</span>",
            "<span dir=\"ltr\">She washed the dishes.</span>",
            "<span dir=\"ltr\">She sat down.</span>",
            "<span dir=\"ltr\">She watched her favorite TV show.</span>"
        ],
        correctAnswer: 0,
        hint: "חוק Before (לפני): 'לפני שהיא שטפה כלים, היא *כבר* סיימה את השיעורים'. משמע, השיעורים קרו קודם.",
        solution: `<strong>הסבר מלא (קריאה זהירה של רצף אירועים):</strong><br>
        הטקסט מנוסח בצורה מבלבלת (רמת חטיבה עליונה), כי הפעולה הראשונה בטקסט אינה בהכרח הפעולה הראשונה שקרתה ב<strong>זמן</strong> האמיתי.<br><br>
        נפרק את המשפט הראשון: <br>
        <span dir="ltr">"<strong>Before</strong> Emma washed the dishes, she <strong>had already finished</strong> her homework."</span><br>
        (<strong>לפני</strong> שאמה שטפה כלים, היא <strong>כבר סיימה</strong> את שיעורי הבית שלה).<br><br>
        אם היא סיימה את השיעורים לפני הכלים, הרי ש<strong>הכנת שיעורי הבית הייתה הפעולה הראשונה!</strong> (אחרי זה היא ניקתה את הכלים, ורק בסוף התיישבה לצפות בטלוויזיה).`
    },
    // Question 29 (Understanding Perspective)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        question_text: `<strong>Reading Strategy: Identifying Perspective (נקודת מבט)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            Many traditional schools ban cellphones in class because they distract students. However, some progressive educators argue that if used properly, phones can be powerful learning tools for research and collaboration.
        </div>
        <strong>Question:</strong> What is the perspective of "progressive educators" regarding cellphones in class?`,
        options: [
            "<span dir=\"ltr\">They believe cellphones can be useful tools for learning if used correctly.</span>",
            "<span dir=\"ltr\">They think cellphones should be completely banned because they are a distraction.</span>",
            "<span dir=\"ltr\">They want students to use phones only for playing games.</span>",
            "<span dir=\"ltr\">They believe only teachers should have cellphones in class.</span>"
        ],
        correctAnswer: 0,
        hint: "הטקסט מציג שני צדדים שונים בוויכוח. בתי ספר מסורתיים אוסרים (ban) בגלל הסחת דעת. 'מחנכים פרוגרסיביים' (progressive educators) טוענים את ההפך (however) - שהם יכולים להיות כלי למידה עצמתי.",
        solution: `<strong>הסבר מלא (זיהוי עמדות בטקסט עימות):</strong><br>
        כאשר טקסט מציג דיון או ויכוח (Debate), חשוב לשייך את הטענה הנכונה לדובר הנכון, כי שתי הטענות כתובות בטקסט.<br><br>
        - דעת ה-<strong>traditional schools</strong> (בתי ספר מסורתיים): טלפונים מסיחים את הדעת ויש לאסור עליהם.<br>
        - דעת ה-<strong>progressive educators</strong> (המחנכים המתקדמים שעליהם נשאלה השאלה): <br>
        הטקסט אומר עליהם: <span dir="ltr">"...argue that if used properly, phones can be <strong>powerful learning tools</strong>"</span>.<br>
        (טוענים שאם משתמשים בהם כראוי, טלפונים יכולים להיות <strong>כלי למידה רבי עוצמה</strong> לביצוע מחקר). התשובה הראשונה משקפת זאת במדויק.`
    },
    // Question 30 (Concluding a summary)
    {
        topic: "english",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        question_text: `<strong>Reading Strategy: Drawing Conclusions (הסקת מסקנות סופית)</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #1e40af; font-size: 1.1em;">
            To summarize, studying a new language requires patience. You will make mistakes, you will feel frustrated at times, but eventually, practicing a little bit every single day is the only key to fluency.
        </div>
        <strong>Question:</strong> According to the conclusion of the text, what is the secret (key) to speaking a new language fluently?`,
        options: [
            "<span dir=\"ltr\">Practicing a little bit every single day.</span>",
            "<span dir=\"ltr\">Never making any mistakes.</span>",
            "<span dir=\"ltr\">Reading one big book per month.</span>",
            "<span dir=\"ltr\">Feeling frustrated and angry.</span>"
        ],
        correctAnswer: 0,
        hint: "המילה 'key' בטקסט (ובשאלה) משמעותה 'מפתח / סוד להצלחה'. חפשו בטקסט מה מתואר כ-only key.",
        solution: `<strong>הסבר מלא (זיהוי השורה התחתונה):</strong><br>
        הפסקה מסכמת נושא (ללמוד שפה חדשה).<br>
        אף על פי שהמחבר מציין שיהיו תסכולים וטעויות (mistakes), זה לא <u>הסוד</u> להצלחה, אלא פשוט תופעות לוואי.<br><br>
        המחבר מספק את הפתרון במשפט האחרון: <br>
        <span dir="ltr">"...practicing a little bit every single day is the <strong>only key</strong> to fluency."</span><br>
        (תרגול של מעט בכל יום הוא המפתח היחיד לשטף דיבור). לכן, ההתמדה היומיומית היא התשובה ל"סוד ההצלחה".`
    },// ========================================================================
// נושא: אנגלית (English)
// קטגוריה: Reading Comprehension (הבנת הנקרא - Unseen)
// פעימה 2: 30 שאלות פרימיום (Module A + Module C)
// רמה: הכנה לבגרויות - טקסטים אותנטיים ואסטרטגיות פתרון
// ========================================================================


    // ---------------------------------------------------------
    // Subtopic 3: High School: Module A Practice (רמה 3 יח"ל) - שאלות 1-15
    // ---------------------------------------------------------

    // Question 1 (Module A - Detail)
    {
        topic: "english",
        subTopic: 'High School: Module A Practice (רמה 3 יח"ל)',
        question_text: `<strong>Module A: The History of Pizza</strong><br>
        Read the text and answer the question:<br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Pizza is one of the most popular foods in the world. It started in Italy many years ago as a cheap meal for poor workers. They baked flat bread and put tomatoes on it. Today, people everywhere eat it with different toppings, like cheese, olives, and even pineapple.
        </div>
        <strong>Question:</strong> Who were the first people to eat pizza in Italy?`,
        options: [
            "<span dir=\"ltr\">Poor workers</span>",
            "<span dir=\"ltr\">Rich people</span>",
            "<span dir=\"ltr\">Chefs from all over the world</span>",
            "<span dir=\"ltr\">People who liked pineapples</span>"
        ],
        correctAnswer: 0,
        hint: "חפשו את המילים 'started in Italy' (התחיל באיטליה) וקראו למי הארוחה הזו הייתה מיועדת בהתחלה.",
        solution: `<strong>הסבר מלא (מציאת פרט ספציפי - Module A):</strong><br>
        בשאלון A, התשובות בדרך כלל נמצאות בטקסט בצורה כמעט מפורשת.<br>
        השאלה מבקשת לדעת מי היו האנשים הראשונים (First people) שאכלו פיצה באיטליה.<br><br>
        במשפט השני כתוב: <span dir="ltr">"It started in Italy... as a cheap meal for <strong>poor workers</strong>."</span><br>
        (זה התחיל באיטליה כארוחה זולה עבור <strong>פועלים עניים</strong>). לכן, זוהי התשובה המדויקת.`
    },
    // Question 2 (Module A - Vocabulary in Context)
    {
        topic: "english",
        subTopic: 'High School: Module A Practice (רמה 3 יח"ל)',
        question_text: `<strong>Module A: The History of Pizza</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Pizza is one of the most popular foods in the world. It started in Italy many years ago as a cheap meal for poor workers. They baked flat bread and put tomatoes on it. Today, people everywhere eat it with different <strong><u>toppings</u></strong>, like cheese, olives, and even pineapple.
        </div>
        <strong>Question:</strong> What are "<strong>toppings</strong>"?`,
        options: [
            "<span dir=\"ltr\">Things you put on top of the food</span>",
            "<span dir=\"ltr\">Special Italian plates</span>",
            "<span dir=\"ltr\">Different types of cheap bread</span>",
            "<span dir=\"ltr\">Expensive restaurants</span>"
        ],
        correctAnswer: 0,
        hint: "המילה topping מגיעה מהמילה top (למעלה/פסגה). שימו לב לדוגמאות שמופיעות מיד אחרי המילה: 'כמו גבינה, זיתים, ואפילו אננס'. מה אלו הדברים האלו?",
        solution: `<strong>הסבר מלא (פירוש מילה מתוך דוגמאות):</strong><br>
        אחת השיטות המעולות להבין מילה קשה באנסין היא להסתכל על ה<strong>דוגמאות</strong> שבאות אחריה.<br><br>
        הטקסט אומר שאנשים אוכלים פיצה עם "toppings" שונים, ומיד נותן רשימה: <span dir="ltr">like cheese, olives, and even pineapple</span> (כמו גבינה, זיתים ואננס).<br>
        מכיוון שאלו דברים ששמים <strong>על הפיצה למעלה</strong> (תוספות), התשובה הנכונה היא: "דברים ששמים על גבי האוכל".`
    },
    // Question 3 (Module A - True/False)
    {
        topic: "english",
        subTopic: 'High School: Module A Practice (רמה 3 יח"ל)',
        question_text: `<strong>Module A: Marie Curie</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Marie Curie was a famous scientist. She was born in Poland in 1867. She discovered two new elements and won two Nobel Prizes. Sadly, her work with dangerous materials made her very sick.
        </div>
        <strong>Question:</strong> Are the following sentences TRUE or FALSE?<br>
        <em>Marie Curie became sick because she was born in Poland.</em>`,
        options: [
            "<span dir=\"ltr\">FALSE (לא נכון)</span>",
            "<span dir=\"ltr\">TRUE (נכון)</span>"
        ],
        correctAnswer: 0,
        hint: "האם יש קשר בטקסט בין הלידה שלה בפולין לבין המחלה שלה? קראו את המשפט האחרון בטקסט.",
        solution: `<strong>הסבר מלא (התמודדות עם שאלות True/False):</strong><br>
        בשאלון A, נוטים לערבב שתי עובדות נכונות מהטקסט כדי לראות אם התלמיד קורא בזהירות.<br><br>
        - עובדה 1: היא נולדה בפולין (נכון).<br>
        - עובדה 2: היא הפכה לחולה (נכון).<br>
        - <strong>הקשר ביניהם בשאלה:</strong> היא חלתה <u>בגלל</u> שנולדה בפולין (Because).<br><br>
        בטקסט מצוין בפירוש שהיא חלתה <strong>בגלל עבודתה עם חומרים מסוכנים</strong> (<span dir="ltr">her work with dangerous materials made her very sick</span>). לכן, הטענה בשאלה היא <strong>שקרית (FALSE)</strong>.`
    },
    // Question 4 (Module A - Cause and Effect)
    {
        topic: "english",
        subTopic: 'High School: Module A Practice (רמה 3 יח"ל)',
        question_text: `<strong>Module A: Marie Curie</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Marie Curie was a famous scientist. She was born in Poland in 1867. She discovered two new elements and won two Nobel Prizes. Sadly, her work with dangerous materials made her very sick.
        </div>
        <strong>Question:</strong> Why did Marie Curie win two Nobel Prizes?`,
        options: [
            "<span dir=\"ltr\">Because she discovered two new elements.</span>",
            "<span dir=\"ltr\">Because she was born in Poland in 1867.</span>",
            "<span dir=\"ltr\">Because she worked with dangerous materials.</span>",
            "<span dir=\"ltr\">The text does not explain exactly why.</span>"
        ],
        correctAnswer: 0,
        hint: "קראו את המשפט שבו מופיע המונח 'Nobel Prizes'. מה היא עשתה באותו משפט שהוביל לזכייה?",
        solution: `<strong>הסבר מלא (מציאת סיבה - Why):</strong><br>
        נחפש בטקסט את המילים <span dir="ltr">Nobel Prizes</span>.<br>
        המשפט המלא אומר: <span dir="ltr">"She <strong>discovered two new elements</strong> and won two Nobel Prizes."</span><br>
        מכיוון שהיא גילתה שני יסודות חדשים (פעולה) ואז זכתה בפרסים (תוצאה), זוהי הסיבה לזכייתה. העבודה עם החומרים המסוכנים גרמה לה למחלה, ולא לזכייה בפרס.`
    },
    // Question 5 (Module A - Main Idea)
    {
        topic: "english",
        subTopic: 'High School: Module A Practice (רמה 3 יח"ל)',
        question_text: `<strong>Module A: A Smart Bird</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Crows are some of the smartest birds in the world. They can remember human faces for years. If a person is mean to a crow, the crow will remember that person and even warn other crows about him. They also know how to use small sticks to get food out of holes.
        </div>
        <strong>Question:</strong> What is the main idea of this text?`,
        options: [
            "<span dir=\"ltr\">Crows are highly intelligent birds.</span>",
            "<span dir=\"ltr\">Crows like to eat food from holes.</span>",
            "<span dir=\"ltr\">Crows are very angry birds.</span>",
            "<span dir=\"ltr\">How to use small sticks.</span>"
        ],
        correctAnswer: 0,
        hint: "המשפט הראשון של פסקה (Topic Sentence) לרוב מגלה לנו את הרעיון המרכזי. שאר המשפטים הם רק דוגמאות.",
        solution: `<strong>הסבר מלא (זיהוי רעיון מרכזי - Main Idea):</strong><br>
        כדי למצוא את הנושא המרכזי של פסקה, עלינו למצוא את ההצהרה ש"עוטפת" את הכל.<br>
        - זיכרון של פרצופים<br>
        - אזהרת עורבים אחרים<br>
        - שימוש במקלות ככלים<br>
        כל אלו הן <strong>דוגמאות קטנות</strong> שבאות להוכיח דבר אחד שמוצהר במשפט הראשון: <strong>עורבים הם ציפורים חכמות מאוד (highly intelligent)</strong>. לכן, זוהי התשובה הכוללת והנכונה ביותר.`
    },
    // Question 6 (Module A - Reference)
    {
        topic: "english",
        subTopic: 'High School: Module A Practice (רמה 3 יח"ל)',
        question_text: `<strong>Module A: A Smart Bird</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Crows are some of the smartest birds in the world. They can remember human faces for years. If a person is mean to a crow, the crow will remember that person and even warn other crows about <strong><u>him</u></strong>.
        </div>
        <strong>Question:</strong> What does the word "<strong>him</strong>" refer to?`,
        options: [
            "<span dir=\"ltr\">The person who was mean</span>",
            "<span dir=\"ltr\">The crow</span>",
            "<span dir=\"ltr\">Other crows</span>",
            "<span dir=\"ltr\">The smart bird</span>"
        ],
        correctAnswer: 0,
        hint: "המילה him (אותו / עליו) היא כינוי גוף לזכר יחיד. חפשו זכר יחיד שהוזכר לפני כן. על מי העורב רוצה להזהיר את חבריו?",
        solution: `<strong>הסבר מלא (שאלות Refer to):</strong><br>
        נלך צעד אחד אחורה מהמילה <span dir="ltr"><strong>him</strong></span> וננתח את המשפט:<br>
        <span dir="ltr">"If <strong>a person</strong> is mean to a crow, the crow will remember that person and even warn other crows about <strong>him</strong>."</span><br><br>
        התרגום: אם <strong>אדם (person)</strong> רע אל העורב, העורב יזכור את אותו האדם ויזהיר עורבים אחרים לגבי<strong>ו (עליו - him)</strong>.<br>
        לכן, המילה him מצביעה בבירור על האדם שהיה רע (<span dir="ltr">the person</span>).`
    },
    // Question 7 (Module A - Sequence/Time)
    {
        topic: "english",
        subTopic: 'High School: Module A Practice (רמה 3 יח"ל)',
        question_text: `<strong>Module A: The First Marathon</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            The modern marathon race was inspired by a Greek legend. According to the story, a soldier named Pheidippides ran from the battlefield of Marathon to Athens to announce a great victory. After he delivered the message, he fell down and died.
        </div>
        <strong>Question:</strong> When did the soldier die?`,
        options: [
            "<span dir=\"ltr\">After he delivered the message.</span>",
            "<span dir=\"ltr\">While he was running to Athens.</span>",
            "<span dir=\"ltr\">Before he left the battlefield.</span>",
            "<span dir=\"ltr\">During the great victory.</span>"
        ],
        correctAnswer: 0,
        hint: "מילת השאלה היא When (מתי). חפשו בטקסט את הפועל died (מת) וקראו את המילים שמופיעות ממש לפניו באותו משפט.",
        solution: `<strong>הסבר מלא (שאלות רצף כרונולוגי):</strong><br>
        כדי לענות על שאלת זמן, נחפש את מילת הזמן בטקסט.<br>
        המשפט האחרון בטקסט אומר:<br>
        <span dir="ltr">"<strong>After</strong> he delivered the message, he fell down and died."</span><br>
        (<strong>אחרי</strong> שהוא מסר את ההודעה, הוא נפל ומת).<br>
        לכן, מותו קרה לאחר מסירת ההודעה. (הוא לא מת תוך כדי ריצה, אחרת הוא לא היה מוסר את ההודעה כלל).`
    },
    // Question 8 (Module A - Detail Extraction)
    {
        topic: "english",
        subTopic: 'High School: Module A Practice (רמה 3 יח"ל)',
        question_text: `<strong>Module A: Sleep Habits</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Doctors agree that teenagers need about nine hours of sleep every night to stay healthy. However, most teenagers only sleep for seven hours. This happens because they stay up late doing homework or talking to friends on their phones.
        </div>
        <strong>Question:</strong> How many hours of sleep do teenagers <u>actually</u> get?`,
        options: [
            "<span dir=\"ltr\">Seven hours</span>",
            "<span dir=\"ltr\">Nine hours</span>",
            "<span dir=\"ltr\">Ten hours</span>",
            "<span dir=\"ltr\">They don't sleep at all</span>"
        ],
        correctAnswer: 0,
        hint: "שימו לב להבדל בין מה שרופאים *ממליצים* לבין מה שבני הנוער מקבלים *בפועל* (actually).",
        solution: `<strong>הסבר מלא (הבחנה בין נתונים מספריים):</strong><br>
        שאלון A אוהב להציב שני מספרים כדי לבלבל אתכם.<br><br>
        - מספר 1: תשע שעות (<span dir="ltr">nine hours</span>). זה מה שהרופאים <strong>אומרים שצריך</strong>.<br>
        - מספר 2: שבע שעות (<span dir="ltr">seven hours</span>). הטקסט אומר: <span dir="ltr">"However, most teenagers <strong>only sleep for seven hours</strong>"</span>.<br><br>
        מכיוון שהשאלה שואלת כמה הם מקבלים <strong>בפועל</strong> (actually), התשובה הנכונה היא 7 שעות.`
    },
    // Question 9 (Module A - Multiple Causes)
    {
        topic: "english",
        subTopic: 'High School: Module A Practice (רמה 3 יח"ל)',
        question_text: `<strong>Module A: Sleep Habits</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Doctors agree that teenagers need about nine hours of sleep every night to stay healthy. However, most teenagers only sleep for seven hours. This happens because they stay up late doing homework or talking to friends on their phones.
        </div>
        <strong>Question:</strong> Name ONE reason why teenagers stay up late.`,
        options: [
            "<span dir=\"ltr\">They talk to friends on their phones. (or: doing homework)</span>",
            "<span dir=\"ltr\">They want to stay healthy.</span>",
            "<span dir=\"ltr\">They listen to the doctors.</span>",
            "<span dir=\"ltr\">They sleep for seven hours.</span>"
        ],
        correctAnswer: 0,
        hint: "חפשו את המילה 'because' בטקסט. הטקסט מפרט שתי סיבות למה הם נשארים ערים מאוחר.",
        solution: `<strong>הסבר מלא (איתור סיבות):</strong><br>
        הטקסט מסביר מדוע בני נוער ישנים מעט, תוך שימוש במילה <strong>because</strong> (בגלל ש...):<br>
        <span dir="ltr">"because they stay up late <strong>doing homework</strong> OR <strong>talking to friends on their phones</strong>."</span><br><br>
        השאלה מבקשת סיבה אחת (ONE reason). דיבור בטלפון עם חברים היא אחת מהסיבות המפורשות המופיעות בטקסט.`
    },
    // Question 10 (Module A - Vocabulary / Adjectives)
    {
        topic: "english",
        subTopic: 'High School: Module A Practice (רמה 3 יח"ל)',
        question_text: `<strong>Module A: The Chocolate Factory</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Yesterday, our class visited a chocolate factory. The guide showed us how they mix the cocoa beans with milk and sugar. At the end of the tour, we got to taste the chocolate. It was absolutely <strong><u>delicious</u></strong>!
        </div>
        <strong>Question:</strong> What does the word "<strong>delicious</strong>" mean in this text?`,
        options: [
            "<span dir=\"ltr\">Very tasty</span>",
            "<span dir=\"ltr\">Very hot</span>",
            "<span dir=\"ltr\">Boring</span>",
            "<span dir=\"ltr\">Expensive</span>"
        ],
        correctAnswer: 0,
        hint: "הם טעמו שוקולד במפעל שוקולד. איך בדרך כלל מרגיש טעם של שוקולד טרי?",
        solution: `<strong>הסבר מלא (משמעות מהקשר חיובי):</strong><br>
        המילה <span dir="ltr"><strong>delicious</strong></span> מתארת את חוויית הטעימה של השוקולד (<span dir="ltr">taste the chocolate</span>).<br>
        מכיוון שזהו טיול כיתתי חיובי לשוקולד, המילה מתארת חוויה קולינרית נהדרת.<br>
        הפירוש המילוני של Delicious הוא <strong>"טעים מאוד" (Very tasty)</strong>.`
    },
    // Question 11 (Module A - Making Connections)
    {
        topic: "english",
        subTopic: 'High School: Module A Practice (רמה 3 יח"ל)',
        question_text: `<strong>Module A: Plastic in the Ocean</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Every year, millions of tons of plastic bags and bottles are thrown into the ocean. Sea turtles often eat the plastic bags because they look like jellyfish. This makes the turtles very sick.
        </div>
        <strong>Question:</strong> Why do sea turtles eat plastic bags?`,
        options: [
            "<span dir=\"ltr\">Because the plastic bags look like jellyfish.</span>",
            "<span dir=\"ltr\">Because the turtles are very sick.</span>",
            "<span dir=\"ltr\">Because people feed them.</span>",
            "<span dir=\"ltr\">Because plastic is tasty.</span>"
        ],
        correctAnswer: 0,
        hint: "מילת השאלה היא Why (מדוע). חפשו את המילה 'because' בתוך הטקסט שקשור לצבי הים (Sea turtles).",
        solution: `<strong>הסבר מלא (הבנת סיבה ישירה):</strong><br>
        זוהי שאלת 'העתק-הדבק' קלאסית של Module A. רוב התשובה נמצאת ממש מול העיניים.<br><br>
        נמצא בטקסט את צבי הים ואת הפלסטיק:<br>
        <span dir="ltr">"Sea turtles often eat the plastic bags <strong>because they look like jellyfish</strong>."</span><br>
        (צבי ים מרבים לאכול את שקיות הפלסטיק מפני שהן נראות כמו מדוזות).<br>
        זוהי הסיבה המדויקת ולכן זו התשובה.`
    },
    // Question 12 (Module A - Negative Fact)
    {
        topic: "english",
        subTopic: 'High School: Module A Practice (רמה 3 יח"ל)',
        question_text: `<strong>Module A: Learning a Language</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Learning a new language is not easy. You have to learn new words and new grammar rules. Reading books and watching movies in the new language can help you improve. However, sleeping all day will not help you learn.
        </div>
        <strong>Question:</strong> According to the text, what will <u>NOT</u> help you learn a new language?`,
        options: [
            "<span dir=\"ltr\">Sleeping all day</span>",
            "<span dir=\"ltr\">Reading books</span>",
            "<span dir=\"ltr\">Watching movies</span>",
            "<span dir=\"ltr\">Learning new words</span>"
        ],
        correctAnswer: 0,
        hint: "השאלה מחפשת את הדבר השלילי (NOT help). חפשו בטקסט את המילים 'will not help'.",
        solution: `<strong>הסבר מלא (איתור שלילה):</strong><br>
        הטקסט מונה פעולות שכן עוזרות (קריאת ספרים, צפייה בסרטים).<br>
        במשפט האחרון יש שינוי כיוון:<br>
        <span dir="ltr">"However, <strong>sleeping all day will not help</strong> you learn."</span><br>
        מכיוון שהשאלה מחפשת את מה ש<strong>לא</strong> יעזור, שינה כל היום היא התשובה המדויקת.`
    },
    // Question 13 (Module A - Pronoun Reference)
    {
        topic: "english",
        subTopic: 'High School: Module A Practice (רמה 3 יח"ל)',
        question_text: `<strong>Module A: Learning a Language</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Learning a new language is not easy. You have to learn new words and new grammar rules. Reading books and watching movies in the new language can help <strong><u>you</u></strong> improve.
        </div>
        <strong>Question:</strong> Who does the word "<strong>you</strong>" refer to in the text?`,
        options: [
            "<span dir=\"ltr\">The reader (הקורא / האדם שלומד שפה)</span>",
            "<span dir=\"ltr\">The movies</span>",
            "<span dir=\"ltr\">The books</span>",
            "<span dir=\"ltr\">The language</span>"
        ],
        correctAnswer: 0,
        hint: "כשהכותב משתמש במילה You (אתה), למי הוא פונה? הוא פונה אליך, האדם שקורא את הטקסט.",
        solution: `<strong>הסבר מלא (פנייה ישירה לקורא):</strong><br>
        בטקסטים מסוג "הדרכה" או "עצות", הכותב לעיתים קרובות פונה ישירות לקהל.<br>
        כשהוא אומר <span dir="ltr">"watching movies can help <strong>you</strong> improve"</span> (צפייה בסרטים יכולה לעזור <strong>לך</strong> להשתפר), הוא מתכוון ל"אתה", ה<strong>קורא (The reader)</strong> או כל אדם שמנסה ללמוד שפה חדשה.`
    },
    // Question 14 (Module A - Understanding Instructions)
    {
        topic: "english",
        subTopic: 'High School: Module A Practice (רמה 3 יח"ל)',
        question_text: `<strong>Module A: Library Rules</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Welcome to the city library. You can borrow up to three books for a period of two weeks. If you return the books late, you will have to pay a fine of one dollar per day. Please remember to keep your phones on silent.
        </div>
        <strong>Question:</strong> What happens if you return a book after three weeks?`,
        options: [
            "<span dir=\"ltr\">You have to pay a fine.</span>",
            "<span dir=\"ltr\">You can borrow three more books.</span>",
            "<span dir=\"ltr\">You have to keep your phone on silent.</span>",
            "<span dir=\"ltr\">You get a dollar from the library.</span>"
        ],
        correctAnswer: 0,
        hint: "מותר להשאיל ספר לשבועיים (two weeks). שלושה שבועות זה 'איחור' (late). מה קורה כשמאחרים לפי הטקסט?",
        solution: `<strong>הסבר מלא (הסקת מסקנות מתוך חוקים):</strong><br>
        כדי לענות נכון, עלינו להבין את התנאי בטקסט:<br>
        - מותר להחזיק ספר <span dir="ltr">two weeks</span> (שבועיים).<br>
        - השאלה שואלת מה יקרה אם נחזיר אחרי <span dir="ltr">three weeks</span> (שלושה שבועות).<br>
        מכאן שאנחנו <strong>באיחור (Late)</strong>.<br><br>
        הטקסט קובע: <span dir="ltr">"If you return the books <strong>late</strong>, you will have to <strong>pay a fine</strong>"</span> (אם תחזיר באיחור, תצטרך לשלם קנס). לכן, נצטרך לשלם קנס.`
    },
    // Question 15 (Module A - Summary)
    {
        topic: "english",
        subTopic: 'High School: Module A Practice (רמה 3 יח"ל)',
        question_text: `<strong>Module A: Conclusion</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Dogs are known as man's best friend. They are loyal, they can protect our homes, and they love to play. Having a dog can make a person much happier and healthier.
        </div>
        <strong>Question:</strong> According to the text, why is having a dog a good thing?`,
        options: [
            "<span dir=\"ltr\">Because they can make a person happier and healthier.</span>",
            "<span dir=\"ltr\">Because they are very cheap to buy.</span>",
            "<span dir=\"ltr\">Because they sleep outside.</span>",
            "<span dir=\"ltr\">Because they like cats.</span>"
        ],
        correctAnswer: 0,
        hint: "הטקסט מונה כמה סיבות (נאמנות, הגנה). המשפט האחרון מסכם את ההשפעה החיובית על האדם.",
        solution: `<strong>הסבר מלא (סיכום פסקה):</strong><br>
        השאלה מבקשת לדעת למה זה דבר 'טוב' (good thing) שיש כלב. <br>
        המשפט האחרון מסכם את ההטבה הכללית של הבעלות על כלב: <br>
        <span dir="ltr">"Having a dog can make a person much <strong>happier and healthier</strong>."</span><br>
        (זה יכול להפוך אדם להרבה יותר שמח ובריא). זוהי כמובן הסיבה המרכזית לכך שזה דבר חיובי.`
    },// ========================================================================
// נושא: אנגלית (English)
// קטגוריה: Reading Comprehension (הבנת הנקרא - Unseen)
// פעימה 2: 30 שאלות פרימיום (Module A + Module C)
// רמה: הכנה לבגרויות - טקסטים אותנטיים ואסטרטגיות פתרון
// ========================================================================

    // ---------------------------------------------------------
    // Subtopic 3: High School: Module A Practice (רמה 3 יחידות) - שאלות 1-15
    // ---------------------------------------------------------

    // Question 1 (Module A - Detail)
    {
        topic: "english",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        question_text: `<strong>Module A: The History of Pizza</strong><br>
        Read the text and answer the question:<br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Pizza is one of the most popular foods in the world. It started in Italy many years ago as a cheap meal for poor workers. They baked flat bread and put tomatoes on it. Today, people everywhere eat it with different toppings, like cheese, olives, and even pineapple.
        </div>
        <strong>Question:</strong> Who were the first people to eat pizza in Italy?`,
        options: [
            "<span dir=\"ltr\">Poor workers</span>",
            "<span dir=\"ltr\">Rich people</span>",
            "<span dir=\"ltr\">Chefs from all over the world</span>",
            "<span dir=\"ltr\">People who liked pineapples</span>"
        ],
        correctAnswer: 0,
        hint: "חפשו את המילים 'started in Italy' (התחיל באיטליה) וקראו למי הארוחה הזו הייתה מיועדת בהתחלה.",
        solution: `<strong>הסבר מלא (מציאת פרט ספציפי - Module A):</strong><br>
        בשאלון A, התשובות בדרך כלל נמצאות בטקסט בצורה כמעט מפורשת.<br>
        השאלה מבקשת לדעת מי היו האנשים הראשונים (First people) שאכלו פיצה באיטליה.<br><br>
        במשפט השני כתוב: <span dir="ltr">"It started in Italy... as a cheap meal for <strong>poor workers</strong>."</span><br>
        (זה התחיל באיטליה כארוחה זולה עבור <strong>פועלים עניים</strong>). לכן, זוהי התשובה המדויקת.`
    },
    // Question 2 (Module A - Vocabulary in Context)
    {
        topic: "english",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        question_text: `<strong>Module A: The History of Pizza</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Pizza is one of the most popular foods in the world. It started in Italy many years ago as a cheap meal for poor workers. They baked flat bread and put tomatoes on it. Today, people everywhere eat it with different <strong><u>toppings</u></strong>, like cheese, olives, and even pineapple.
        </div>
        <strong>Question:</strong> What are "<strong>toppings</strong>"?`,
        options: [
            "<span dir=\"ltr\">Things you put on top of the food</span>",
            "<span dir=\"ltr\">Special Italian plates</span>",
            "<span dir=\"ltr\">Different types of cheap bread</span>",
            "<span dir=\"ltr\">Expensive restaurants</span>"
        ],
        correctAnswer: 0,
        hint: "המילה topping מגיעה מהמילה top (למעלה/פסגה). שימו לב לדוגמאות שמופיעות מיד אחרי המילה: 'כמו גבינה, זיתים, ואפילו אננס'. מה אלו הדברים האלו?",
        solution: `<strong>הסבר מלא (פירוש מילה מתוך דוגמאות):</strong><br>
        אחת השיטות המעולות להבין מילה קשה באנסין היא להסתכל על ה<strong>דוגמאות</strong> שבאות אחריה.<br><br>
        הטקסט אומר שאנשים אוכלים פיצה עם "toppings" שונים, ומיד נותן רשימה: <span dir="ltr">like cheese, olives, and even pineapple</span> (כמו גבינה, זיתים ואננס).<br>
        מכיוון שאלו דברים ששמים <strong>על הפיצה למעלה</strong> (תוספות), התשובה הנכונה היא: "דברים ששמים על גבי האוכל".`
    },
    // Question 3 (Module A - True/False)
    {
        topic: "english",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        question_text: `<strong>Module A: Marie Curie</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Marie Curie was a famous scientist. She was born in Poland in 1867. She discovered two new elements and won two Nobel Prizes. Sadly, her work with dangerous materials made her very sick.
        </div>
        <strong>Question:</strong> Are the following sentences TRUE or FALSE?<br>
        <em>Marie Curie became sick because she was born in Poland.</em>`,
        options: [
            "<span dir=\"ltr\">FALSE (לא נכון)</span>",
            "<span dir=\"ltr\">TRUE (נכון)</span>"
        ],
        correctAnswer: 0,
        hint: "האם יש קשר בטקסט בין הלידה שלה בפולין לבין המחלה שלה? קראו את המשפט האחרון בטקסט.",
        solution: `<strong>הסבר מלא (התמודדות עם שאלות True/False):</strong><br>
        בשאלון A, נוטים לערבב שתי עובדות נכונות מהטקסט כדי לראות אם התלמיד קורא בזהירות.<br><br>
        - עובדה 1: היא נולדה בפולין (נכון).<br>
        - עובדה 2: היא הפכה לחולה (נכון).<br>
        - <strong>הקשר ביניהם בשאלה:</strong> היא חלתה <u>בגלל</u> שנולדה בפולין (Because).<br><br>
        בטקסט מצוין בפירוש שהיא חלתה <strong>בגלל עבודתה עם חומרים מסוכנים</strong> (<span dir="ltr">her work with dangerous materials made her very sick</span>). לכן, הטענה בשאלה היא <strong>שקרית (FALSE)</strong>.`
    },
    // Question 4 (Module A - Cause and Effect)
    {
        topic: "english",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        question_text: `<strong>Module A: Marie Curie</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Marie Curie was a famous scientist. She was born in Poland in 1867. She discovered two new elements and won two Nobel Prizes. Sadly, her work with dangerous materials made her very sick.
        </div>
        <strong>Question:</strong> Why did Marie Curie win two Nobel Prizes?`,
        options: [
            "<span dir=\"ltr\">Because she discovered two new elements.</span>",
            "<span dir=\"ltr\">Because she was born in Poland in 1867.</span>",
            "<span dir=\"ltr\">Because she worked with dangerous materials.</span>",
            "<span dir=\"ltr\">The text does not explain exactly why.</span>"
        ],
        correctAnswer: 0,
        hint: "קראו את המשפט שבו מופיע המונח 'Nobel Prizes'. מה היא עשתה באותו משפט שהוביל לזכייה?",
        solution: `<strong>הסבר מלא (מציאת סיבה - Why):</strong><br>
        נחפש בטקסט את המילים <span dir="ltr">Nobel Prizes</span>.<br>
        המשפט המלא אומר: <span dir="ltr">"She <strong>discovered two new elements</strong> and won two Nobel Prizes."</span><br>
        מכיוון שהיא גילתה שני יסודות חדשים (פעולה) ואז זכתה בפרסים (תוצאה), זוהי הסיבה לזכייתה. העבודה עם החומרים המסוכנים גרמה לה למחלה, ולא לזכייה בפרס.`
    },
    // Question 5 (Module A - Main Idea)
    {
        topic: "english",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        question_text: `<strong>Module A: A Smart Bird</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Crows are some of the smartest birds in the world. They can remember human faces for years. If a person is mean to a crow, the crow will remember that person and even warn other crows about him. They also know how to use small sticks to get food out of holes.
        </div>
        <strong>Question:</strong> What is the main idea of this text?`,
        options: [
            "<span dir=\"ltr\">Crows are highly intelligent birds.</span>",
            "<span dir=\"ltr\">Crows like to eat food from holes.</span>",
            "<span dir=\"ltr\">Crows are very angry birds.</span>",
            "<span dir=\"ltr\">How to use small sticks.</span>"
        ],
        correctAnswer: 0,
        hint: "המשפט הראשון של פסקה (Topic Sentence) לרוב מגלה לנו את הרעיון המרכזי. שאר המשפטים הם רק דוגמאות.",
        solution: `<strong>הסבר מלא (זיהוי רעיון מרכזי - Main Idea):</strong><br>
        כדי למצוא את הנושא המרכזי של פסקה, עלינו למצוא את ההצהרה ש"עוטפת" את הכל.<br>
        - זיכרון של פרצופים<br>
        - אזהרת עורבים אחרים<br>
        - שימוש במקלות ככלים<br>
        כל אלו הן <strong>דוגמאות קטנות</strong> שבאות להוכיח דבר אחד שמוצהר במשפט הראשון: <strong>עורבים הם ציפורים חכמות מאוד (highly intelligent)</strong>. לכן, זוהי התשובה הכוללת והנכונה ביותר.`
    },
    // Question 6 (Module A - Reference)
    {
        topic: "english",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        question_text: `<strong>Module A: A Smart Bird</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Crows are some of the smartest birds in the world. They can remember human faces for years. If a person is mean to a crow, the crow will remember that person and even warn other crows about <strong><u>him</u></strong>.
        </div>
        <strong>Question:</strong> What does the word "<strong>him</strong>" refer to?`,
        options: [
            "<span dir=\"ltr\">The person who was mean</span>",
            "<span dir=\"ltr\">The crow</span>",
            "<span dir=\"ltr\">Other crows</span>",
            "<span dir=\"ltr\">The smart bird</span>"
        ],
        correctAnswer: 0,
        hint: "המילה him (אותו / עליו) היא כינוי גוף לזכר יחיד. חפשו זכר יחיד שהוזכר לפני כן. על מי העורב רוצה להזהיר את חבריו?",
        solution: `<strong>הסבר מלא (שאלות Refer to):</strong><br>
        נלך צעד אחד אחורה מהמילה <span dir="ltr"><strong>him</strong></span> וננתח את המשפט:<br>
        <span dir="ltr">"If <strong>a person</strong> is mean to a crow, the crow will remember that person and even warn other crows about <strong>him</strong>."</span><br><br>
        התרגום: אם <strong>אדם (person)</strong> רע אל העורב, העורב יזכור את אותו האדם ויזהיר עורבים אחרים לגבי<strong>ו (עליו - him)</strong>.<br>
        לכן, המילה him מצביעה בבירור על האדם שהיה רע (<span dir="ltr">the person</span>).`
    },
    // Question 7 (Module A - Sequence/Time)
    {
        topic: "english",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        question_text: `<strong>Module A: The First Marathon</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            The modern marathon race was inspired by a Greek legend. According to the story, a soldier named Pheidippides ran from the battlefield of Marathon to Athens to announce a great victory. After he delivered the message, he fell down and died.
        </div>
        <strong>Question:</strong> When did the soldier die?`,
        options: [
            "<span dir=\"ltr\">After he delivered the message.</span>",
            "<span dir=\"ltr\">While he was running to Athens.</span>",
            "<span dir=\"ltr\">Before he left the battlefield.</span>",
            "<span dir=\"ltr\">During the great victory.</span>"
        ],
        correctAnswer: 0,
        hint: "מילת השאלה היא When (מתי). חפשו בטקסט את הפועל died (מת) וקראו את המילים שמופיעות ממש לפניו באותו משפט.",
        solution: `<strong>הסבר מלא (שאלות רצף כרונולוגי):</strong><br>
        כדי לענות על שאלת זמן, נחפש את מילת הזמן בטקסט.<br>
        המשפט האחרון בטקסט אומר:<br>
        <span dir="ltr">"<strong>After</strong> he delivered the message, he fell down and died."</span><br>
        (<strong>אחרי</strong> שהוא מסר את ההודעה, הוא נפל ומת).<br>
        לכן, מותו קרה לאחר מסירת ההודעה. (הוא לא מת תוך כדי ריצה, אחרת הוא לא היה מוסר את ההודעה כלל).`
    },
    // Question 8 (Module A - Detail Extraction)
    {
        topic: "english",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        question_text: `<strong>Module A: Sleep Habits</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Doctors agree that teenagers need about nine hours of sleep every night to stay healthy. However, most teenagers only sleep for seven hours. This happens because they stay up late doing homework or talking to friends on their phones.
        </div>
        <strong>Question:</strong> How many hours of sleep do teenagers <u>actually</u> get?`,
        options: [
            "<span dir=\"ltr\">Seven hours</span>",
            "<span dir=\"ltr\">Nine hours</span>",
            "<span dir=\"ltr\">Ten hours</span>",
            "<span dir=\"ltr\">They don't sleep at all</span>"
        ],
        correctAnswer: 0,
        hint: "שימו לב להבדל בין מה שרופאים *ממליצים* לבין מה שבני הנוער מקבלים *בפועל* (actually).",
        solution: `<strong>הסבר מלא (הבחנה בין נתונים מספריים):</strong><br>
        שאלון A אוהב להציב שני מספרים כדי לבלבל אתכם.<br><br>
        - מספר 1: תשע שעות (<span dir="ltr">nine hours</span>). זה מה שהרופאים <strong>אומרים שצריך</strong>.<br>
        - מספר 2: שבע שעות (<span dir="ltr">seven hours</span>). הטקסט אומר: <span dir="ltr">"However, most teenagers <strong>only sleep for seven hours</strong>"</span>.<br><br>
        מכיוון שהשאלה שואלת כמה הם מקבלים <strong>בפועל</strong> (actually), התשובה הנכונה היא 7 שעות.`
    },
    // Question 9 (Module A - Multiple Causes)
    {
        topic: "english",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        question_text: `<strong>Module A: Sleep Habits</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Doctors agree that teenagers need about nine hours of sleep every night to stay healthy. However, most teenagers only sleep for seven hours. This happens because they stay up late doing homework or talking to friends on their phones.
        </div>
        <strong>Question:</strong> Name ONE reason why teenagers stay up late.`,
        options: [
            "<span dir=\"ltr\">They talk to friends on their phones. (or: doing homework)</span>",
            "<span dir=\"ltr\">They want to stay healthy.</span>",
            "<span dir=\"ltr\">They listen to the doctors.</span>",
            "<span dir=\"ltr\">They sleep for seven hours.</span>"
        ],
        correctAnswer: 0,
        hint: "חפשו את המילה 'because' בטקסט. הטקסט מפרט שתי סיבות למה הם נשארים ערים מאוחר.",
        solution: `<strong>הסבר מלא (איתור סיבות):</strong><br>
        הטקסט מסביר מדוע בני נוער ישנים מעט, תוך שימוש במילה <strong>because</strong> (בגלל ש...):<br>
        <span dir="ltr">"because they stay up late <strong>doing homework</strong> OR <strong>talking to friends on their phones</strong>."</span><br><br>
        השאלה מבקשת סיבה אחת (ONE reason). דיבור בטלפון עם חברים היא אחת מהסיבות המפורשות המופיעות בטקסט.`
    },
    // Question 10 (Module A - Vocabulary / Adjectives)
    {
        topic: "english",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        question_text: `<strong>Module A: The Chocolate Factory</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Yesterday, our class visited a chocolate factory. The guide showed us how they mix the cocoa beans with milk and sugar. At the end of the tour, we got to taste the chocolate. It was absolutely <strong><u>delicious</u></strong>!
        </div>
        <strong>Question:</strong> What does the word "<strong>delicious</strong>" mean in this text?`,
        options: [
            "<span dir=\"ltr\">Very tasty</span>",
            "<span dir=\"ltr\">Very hot</span>",
            "<span dir=\"ltr\">Boring</span>",
            "<span dir=\"ltr\">Expensive</span>"
        ],
        correctAnswer: 0,
        hint: "הם טעמו שוקולד במפעל שוקולד. איך בדרך כלל מרגיש טעם של שוקולד טרי?",
        solution: `<strong>הסבר מלא (משמעות מהקשר חיובי):</strong><br>
        המילה <span dir="ltr"><strong>delicious</strong></span> מתארת את חוויית הטעימה של השוקולד (<span dir="ltr">taste the chocolate</span>).<br>
        מכיוון שזהו טיול כיתתי חיובי לשוקולד, המילה מתארת חוויה קולינרית נהדרת.<br>
        הפירוש המילוני של Delicious הוא <strong>"טעים מאוד" (Very tasty)</strong>.`
    },
    // Question 11 (Module A - Making Connections)
    {
        topic: "english",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        question_text: `<strong>Module A: Plastic in the Ocean</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Every year, millions of tons of plastic bags and bottles are thrown into the ocean. Sea turtles often eat the plastic bags because they look like jellyfish. This makes the turtles very sick.
        </div>
        <strong>Question:</strong> Why do sea turtles eat plastic bags?`,
        options: [
            "<span dir=\"ltr\">Because the plastic bags look like jellyfish.</span>",
            "<span dir=\"ltr\">Because the turtles are very sick.</span>",
            "<span dir=\"ltr\">Because people feed them.</span>",
            "<span dir=\"ltr\">Because plastic is tasty.</span>"
        ],
        correctAnswer: 0,
        hint: "מילת השאלה היא Why (מדוע). חפשו את המילה 'because' בתוך הטקסט שקשור לצבי הים (Sea turtles).",
        solution: `<strong>הסבר מלא (הבנת סיבה ישירה):</strong><br>
        זוהי שאלת 'העתק-הדבק' קלאסית של Module A. רוב התשובה נמצאת ממש מול העיניים.<br><br>
        נמצא בטקסט את צבי הים ואת הפלסטיק:<br>
        <span dir="ltr">"Sea turtles often eat the plastic bags <strong>because they look like jellyfish</strong>."</span><br>
        (צבי ים מרבים לאכול את שקיות הפלסטיק מפני שהן נראות כמו מדוזות).<br>
        זוהי הסיבה המדויקת ולכן זו התשובה.`
    },
    // Question 12 (Module A - Negative Fact)
    {
        topic: "english",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        question_text: `<strong>Module A: Learning a Language</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Learning a new language is not easy. You have to learn new words and new grammar rules. Reading books and watching movies in the new language can help you improve. However, sleeping all day will not help you learn.
        </div>
        <strong>Question:</strong> According to the text, what will <u>NOT</u> help you learn a new language?`,
        options: [
            "<span dir=\"ltr\">Sleeping all day</span>",
            "<span dir=\"ltr\">Reading books</span>",
            "<span dir=\"ltr\">Watching movies</span>",
            "<span dir=\"ltr\">Learning new words</span>"
        ],
        correctAnswer: 0,
        hint: "השאלה מחפשת את הדבר השלילי (NOT help). חפשו בטקסט את המילים 'will not help'.",
        solution: `<strong>הסבר מלא (איתור שלילה):</strong><br>
        הטקסט מונה פעולות שכן עוזרות (קריאת ספרים, צפייה בסרטים).<br>
        במשפט האחרון יש שינוי כיוון:<br>
        <span dir="ltr">"However, <strong>sleeping all day will not help</strong> you learn."</span><br>
        מכיוון שהשאלה מחפשת את מה ש<strong>לא</strong> יעזור, שינה כל היום היא התשובה המדויקת.`
    },
    // Question 13 (Module A - Pronoun Reference)
    {
        topic: "english",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        question_text: `<strong>Module A: Learning a Language</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Learning a new language is not easy. You have to learn new words and new grammar rules. Reading books and watching movies in the new language can help <strong><u>you</u></strong> improve.
        </div>
        <strong>Question:</strong> Who does the word "<strong>you</strong>" refer to in the text?`,
        options: [
            "<span dir=\"ltr\">The reader (הקורא / האדם שלומד שפה)</span>",
            "<span dir=\"ltr\">The movies</span>",
            "<span dir=\"ltr\">The books</span>",
            "<span dir=\"ltr\">The language</span>"
        ],
        correctAnswer: 0,
        hint: "כשהכותב משתמש במילה You (אתה), למי הוא פונה? הוא פונה אליך, האדם שקורא את הטקסט.",
        solution: `<strong>הסבר מלא (פנייה ישירה לקורא):</strong><br>
        בטקסטים מסוג "הדרכה" או "עצות", הכותב לעיתים קרובות פונה ישירות לקהל.<br>
        כשהוא אומר <span dir="ltr">"watching movies can help <strong>you</strong> improve"</span> (צפייה בסרטים יכולה לעזור <strong>לך</strong> להשתפר), הוא מתכוון ל"אתה", ה<strong>קורא (The reader)</strong> או כל אדם שמנסה ללמוד שפה חדשה.`
    },
    // Question 14 (Module A - Understanding Instructions)
    {
        topic: "english",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        question_text: `<strong>Module A: Library Rules</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Welcome to the city library. You can borrow up to three books for a period of two weeks. If you return the books late, you will have to pay a fine of one dollar per day. Please remember to keep your phones on silent.
        </div>
        <strong>Question:</strong> What happens if you return a book after three weeks?`,
        options: [
            "<span dir=\"ltr\">You have to pay a fine.</span>",
            "<span dir=\"ltr\">You can borrow three more books.</span>",
            "<span dir=\"ltr\">You have to keep your phone on silent.</span>",
            "<span dir=\"ltr\">You get a dollar from the library.</span>"
        ],
        correctAnswer: 0,
        hint: "מותר להשאיל ספר לשבועיים (two weeks). שלושה שבועות זה 'איחור' (late). מה קורה כשמאחרים לפי הטקסט?",
        solution: `<strong>הסבר מלא (הסקת מסקנות מתוך חוקים):</strong><br>
        כדי לענות נכון, עלינו להבין את התנאי בטקסט:<br>
        - מותר להחזיק ספר <span dir="ltr">two weeks</span> (שבועיים).<br>
        - השאלה שואלת מה יקרה אם נחזיר אחרי <span dir="ltr">three weeks</span> (שלושה שבועות).<br>
        מכאן שאנחנו <strong>באיחור (Late)</strong>.<br><br>
        הטקסט קובע: <span dir="ltr">"If you return the books <strong>late</strong>, you will have to <strong>pay a fine</strong>"</span> (אם תחזיר באיחור, תצטרך לשלם קנס). לכן, נצטרך לשלם קנס.`
    },
    // Question 15 (Module A - Summary)
    {
        topic: "english",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        question_text: `<strong>Module A: Conclusion</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #3b82f6; font-size: 1.1em; line-height: 1.5;">
            Dogs are known as man's best friend. They are loyal, they can protect our homes, and they love to play. Having a dog can make a person much happier and healthier.
        </div>
        <strong>Question:</strong> According to the text, why is having a dog a good thing?`,
        options: [
            "<span dir=\"ltr\">Because they can make a person happier and healthier.</span>",
            "<span dir=\"ltr\">Because they are very cheap to buy.</span>",
            "<span dir=\"ltr\">Because they sleep outside.</span>",
            "<span dir=\"ltr\">Because they like cats.</span>"
        ],
        correctAnswer: 0,
        hint: "הטקסט מונה כמה סיבות (נאמנות, הגנה). המשפט האחרון מסכם את ההשפעה החיובית על האדם.",
        solution: `<strong>הסבר מלא (סיכום פסקה):</strong><br>
        השאלה מבקשת לדעת למה זה דבר 'טוב' (good thing) שיש כלב. <br>
        המשפט האחרון מסכם את ההטבה הכללית של הבעלות על כלב: <br>
        <span dir="ltr">"Having a dog can make a person much <strong>happier and healthier</strong>."</span><br>
        (זה יכול להפוך אדם להרבה יותר שמח ובריא). זוהי כמובן הסיבה המרכזית לכך שזה דבר חיובי.`
    },

    // ---------------------------------------------------------
    // Subtopic 4: High School: Module C Practice (רמה 3-4 יחידות) - שאלות 16-30
    // ---------------------------------------------------------

    // Question 16 (Module C - Advanced Main Idea)
    {
        topic: "english",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        question_text: `<strong>Module C: Fast Fashion</strong><br>
        Read the text and answer the question:<br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #4f46e5; font-size: 1.1em; line-height: 1.5;">
            Fast fashion is a term used to describe cheap, trendy clothing that is produced rapidly by mass-market retailers. While it allows consumers to buy new clothes frequently at low prices, it has a devastating impact on the environment due to severe water pollution and massive textile waste.
        </div>
        <strong>Question:</strong> What is the main disadvantage of fast fashion mentioned in the text?`,
        options: [
            "<span dir=\"ltr\">It has a devastating impact on the environment.</span>",
            "<span dir=\"ltr\">It is too cheap for mass-market retailers.</span>",
            "<span dir=\"ltr\">The clothes are too trendy.</span>",
            "<span dir=\"ltr\">Consumers buy clothes too frequently.</span>"
        ],
        correctAnswer: 0,
        hint: "המילה disadvantage (חיסרון) מכוונת אותנו לחפש משהו שלילי. מצאו את מילת הניגוד 'While' (למרות ש...) שמציגה את היתרון, ואז קראו את החצי השני שמציג את החיסרון החמור.",
        solution: `<strong>הסבר מלא (מציאת חיסרון מרכזי - Module C):</strong><br>
        ברמת Module C, הטקסטים מכילים משפטים מורכבים עם מילות ניגוד.<br><br>
        המשפט השני מתחיל ב-<span dir="ltr"><strong>While</strong></span> (אמנם / למרות ש...).<br>
        - היתרון: מאפשר לצרכנים לקנות בזול ובדחיפות.<br>
        - החיסרון (ההשלכה השלילית): <span dir="ltr">"it has a <strong>devastating impact on the environment</strong>"</span> (יש לזה השפעה הרסנית על איכות הסביבה).<br>
        השאלה מבקשת את החיסרון (disadvantage), ולכן הפגיעה בסביבה היא התשובה המדויקת.`
    },
    // Question 17 (Module C - Vocabulary in Context)
    {
        topic: "english",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        question_text: `<strong>Module C: Fast Fashion</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #4f46e5; font-size: 1.1em; line-height: 1.5;">
            ...While it allows consumers to buy new clothes frequently at low prices, it has a <strong><u>devastating</u></strong> impact on the environment due to severe water pollution and massive textile waste.
        </div>
        <strong>Question:</strong> What does the word "<strong>devastating</strong>" most likely mean in this context?`,
        options: [
            "<span dir=\"ltr\">Extremely harmful / Destructive</span>",
            "<span dir=\"ltr\">Very positive / Helpful</span>",
            "<span dir=\"ltr\">Slow and steady</span>",
            "<span dir=\"ltr\">Cheap and affordable</span>"
        ],
        correctAnswer: 0,
        hint: "שימו לב להקשר. אם זה גורם ל'זיהום מים חמור' (severe water pollution) ול'פסולת עצומה', האם ההשפעה (impact) היא טובה או הרסנית?",
        solution: `<strong>הסבר מלא (פירוש מילים גבוהות מהקשר):</strong><br>
        במקרים רבים לא תכירו את המילה (Devastating). הפתרון הוא להסתכל על ההקשר בסביבת המילה (Context clues).<br><br>
        מה קורה לסביבה בעקבות אופנה מהירה?
        - <span dir="ltr">severe water pollution</span> (זיהום מים חמור).
        - <span dir="ltr">massive waste</span> (פסולת אדירה).<br>
        אלו דברים איומים. מכאן שהמילה Devastating מתארת משהו <strong>הרסני / מזיק מאוד (Extremely harmful)</strong>.`
    },
    // Question 18 (Module C - Author's Tone/Purpose)
    {
        topic: "english",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        question_text: `<strong>Module C: The Placebo Effect</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #4f46e5; font-size: 1.1em; line-height: 1.5;">
            The placebo effect is a fascinating psychological phenomenon. Sometimes, a patient's condition improves simply because they <em>believe</em> they are receiving medical treatment, even if the pill they took was made of sugar and had no real medicine in it at all.
        </div>
        <strong>Question:</strong> Why does the author use the word "<em>believe</em>" in italics?`,
        options: [
            "<span dir=\"ltr\">To emphasize that the cure is in the patient's mind, not in the actual pill.</span>",
            "<span dir=\"ltr\">To show that doctors are lying to their patients.</span>",
            "<span dir=\"ltr\">To explain that sugar pills are real medicine.</span>",
            "<span dir=\"ltr\">To prove that psychology is a fake science.</span>"
        ],
        correctAnswer: 0,
        hint: "כתב נטוי (Italics) משמש תמיד להדגשה (Emphasis). למה הכותב מדגיש את ה'אמונה' של החולה? כי היא זו שעושה את העבודה, ולא הגלולה עצמה.",
        solution: `<strong>הסבר מלא (תפקיד ההדגשות בטקסט - Typography):</strong><br>
        בשאלונים מתקדמים, שואלים אותנו מדוע מילה נכתבה בכתב נטוי (Italics) או מודגש (Bold).<br>
        התשובה הקבועה היא: <strong>To emphasize</strong> (כדי להדגיש).<br><br>
        במקרה זה, הכותב רוצה להבהיר שגלולת הסוכר לא מרפאת שום דבר פיזית. הדבר היחיד שמרפא את האדם הוא <strong>האמונה שלו במוח</strong>. לכן הוא שם דגש על המילה "מאמינים" (<span dir="ltr">believe</span>) כדי להעביר את המסר שהכוח נמצא בתודעה.`
    },
    // Question 19 (Module C - Making Connections / Cause)
    {
        topic: "english",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        question_text: `<strong>Module C: The Placebo Effect</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #4f46e5; font-size: 1.1em; line-height: 1.5;">
            The placebo effect is a fascinating psychological phenomenon. Sometimes, a patient's condition improves simply because they <em>believe</em> they are receiving medical treatment, even if the pill they took was made of sugar and had no real medicine in it at all.
        </div>
        <strong>Question:</strong> According to the text, what is a "sugar pill" an example of?`,
        options: [
            "<span dir=\"ltr\">A pill with no real medicine in it.</span>",
            "<span dir=\"ltr\">A new treatment for diabetes.</span>",
            "<span dir=\"ltr\">A dangerous drug.</span>",
            "<span dir=\"ltr\">A pill that tastes bad.</span>"
        ],
        correctAnswer: 0,
        hint: "קראו את סוף המשפט: 'even if the pill they took was made of sugar and had no real medicine in it at all'.",
        solution: `<strong>הסבר מלא (הבנת הגדרה מתוך הטקסט):</strong><br>
        הטקסט מגדיר את פלצבו באמצעות הדוגמה של גלולת סוכר.<br>
        איך הטקסט מתאר את גלולת הסוכר?<br>
        <span dir="ltr">"...made of sugar and <strong>had no real medicine in it at all</strong>."</span><br>
        (עשויה מסוכר ואין בה שום תרופה אמיתית בכלל).<br>
        זוהי הגדרה ברורה ומדויקת המופיעה באפשרות הראשונה.`
    },
    // Question 20 (Module C - Detail and List)
    {
        topic: "english",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        question_text: `<strong>Module C: Smart Homes</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #4f46e5; font-size: 1.1em; line-height: 1.5;">
            Smart home technology allows homeowners to control various devices remotely using their smartphones. For example, they can turn off the lights, adjust the air conditioning, and even lock the front door from miles away.
        </div>
        <strong>Question:</strong> Which of the following is an action you can do with smart home technology according to the text?`,
        options: [
            "<span dir=\"ltr\">Adjust the air conditioning remotely.</span>",
            "<span dir=\"ltr\">Cook a hot meal remotely.</span>",
            "<span dir=\"ltr\">Drive your car using your smartphone.</span>",
            "<span dir=\"ltr\">Paint the walls of your house.</span>"
        ],
        correctAnswer: 0,
        hint: "הטקסט מונה שלוש דוגמאות מפורשות (למשל כיבוי אורות, מיזוג אוויר, ונעילת דלתות). איזו מהן מופיעה בתשובות?",
        solution: `<strong>הסבר מלא (סריקה למציאת רשימות):</strong><br>
        כאשר טקסט מציג את המילה <span dir="ltr"><strong>For example</strong></span> (לדוגמה), בדרך כלל תבוא אחריה רשימה של פעולות מופרדות בפסיקים.<br><br>
        פעולה 1: <span dir="ltr">turn off the lights</span><br>
        פעולה 2: <span dir="ltr"><strong>adjust the air conditioning</strong></span> (לכוון את המזגן)<br>
        פעולה 3: <span dir="ltr">lock the front door</span><br><br>
        לכן, כוונון המזגן הוא הדבר היחיד שבאמת מוזכר בפסקה (שאר האופציות הומצאו).`
    },
    // Question 21 (Module C - Connectors)
    {
        topic: "english",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        question_text: `<strong>Module C: Smart Homes</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #4f46e5; font-size: 1.1em; line-height: 1.5;">
            Smart home technology offers great convenience. <strong>Furthermore</strong>, it can significantly reduce electricity bills by automatically turning off appliances when no one is in the room.
        </div>
        <strong>Question:</strong> What does the word "<strong>Furthermore</strong>" indicate in this paragraph?`,
        options: [
            "<span dir=\"ltr\">An additional advantage (יתרון נוסף) of smart homes.</span>",
            "<span dir=\"ltr\">A major disadvantage (חיסרון) of smart homes.</span>",
            "<span dir=\"ltr\">A contrast (ניגוד) to the previous sentence.</span>",
            "<span dir=\"ltr\">The conclusion of the text.</span>"
        ],
        correctAnswer: 0,
        hint: "Furthermore משמעותו 'יתר על כן' / 'בנוסף'. כלומר, הוא מוסיף עוד רעיון חיובי על הרעיון החיובי שהיה קודם (נוחות + חיסכון בחשמל).",
        solution: `<strong>הסבר מלא (תפקיד מילות חיבור - Furthermore):</strong><br>
        שאלות על תפקיד מילות קישור הן קבועות בבגרות!<br><br>
        המילה <span dir="ltr"><strong>Furthermore</strong></span> (בדומה ל-Moreover או In addition) שייכת למשפחת מילות ה<strong>הוספה (Addition)</strong>.<br>
        במשפט הראשון נאמר שבית חכם מציע "נוחות רבה" (יתרון).<br>
        לאחר מכן מוסיפים שזה גם "חוסך חשמל" (עוד יתרון!).<br>
        לכן, המילה מוסיפה <strong>יתרון נוסף (additional advantage)</strong> לטענה המקורית.`
    },
    // Question 22 (Module C - Pronoun Reference)
    {
        topic: "english",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        question_text: `<strong>Module C: Animal Communication</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #4f46e5; font-size: 1.1em; line-height: 1.5;">
            Whales are known for their beautiful "songs" which travel underwater for miles. Scientists believe that <strong><u>they</u></strong> use these complex sounds to find mates, claim territory, and keep the group together.
        </div>
        <strong>Question:</strong> Who or what does the word "<strong>they</strong>" refer to?`,
        options: [
            "<span dir=\"ltr\">Whales</span>",
            "<span dir=\"ltr\">Scientists</span>",
            "<span dir=\"ltr\">Songs</span>",
            "<span dir=\"ltr\">Miles</span>"
        ],
        correctAnswer: 0,
        hint: "מי משתמש בקולות/שירים האלו (use these complex sounds) כדי לחפש בני זוג? המדענים או הלווייתנים?",
        solution: `<strong>הסבר מלא (הבנת כינויי גוף בטקסט ארוך):</strong><br>
        שימו לב למלכודת! המילה <span dir="ltr"><strong>they</strong></span> (הם) באה מיד אחרי המילה "Scientists" (מדענים). תלמידים נוטים להקיף מיד 'מדענים'.<br><br>
        <strong>אבל חייבים לקרוא את תוכן הפעולה:</strong><br>
        <span dir="ltr">"<strong>they</strong> use these complex sounds to find mates"</span> (הם משתמשים בקולות אלו כדי למצוא בני זוג ולהגן על טריטוריה).<br>
        האם המדענים עושים את זה במעבדה? לא! <strong>הלווייתנים (Whales)</strong> הם אלו שמפיקים את הקולות למטרות אלו. לכן They חוזר אחורה עד לתחילת הפסקה.`
    },
    // Question 23 (Module C - Detail and Purpose)
    {
        topic: "english",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        question_text: `<strong>Module C: The Pomodoro Technique</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #4f46e5; font-size: 1.1em; line-height: 1.5;">
            The Pomodoro Technique is a time management method. You work deeply for 25 minutes, and then you take a 5-minute break. This cycle helps the brain stay focused and prevents burnout during long study sessions.
        </div>
        <strong>Question:</strong> What is the main purpose of the 5-minute break?`,
        options: [
            "<span dir=\"ltr\">To prevent burnout and keep the brain focused.</span>",
            "<span dir=\"ltr\">To give you time to eat a tomato (pomodoro).</span>",
            "<span dir=\"ltr\">To make the study session longer.</span>",
            "<span dir=\"ltr\">To check your smartphone messages.</span>"
        ],
        correctAnswer: 0,
        hint: "חפשו בטקסט למה ה'מחזור' (cycle) הזה של עבודה והפסקה עוזר. המילה 'prevent' משמעותה 'למנוע'.",
        solution: `<strong>הסבר מלא (חילוץ מטרה):</strong><br>
        בשאלה נשאלנו מה המטרה (Purpose) של ההפסקה בשיטה.<br>
        הטקסט מסביר שהמחזור הזה (שכולל את ההפסקה של 5 דקות):<br>
        <span dir="ltr">"...<strong>helps the brain stay focused and prevents burnout</strong>"</span>.<br>
        (עוזר למוח להישאר מרוכז ומונע שחיקה).<br>
        זוהי בדיוק התשובה הראשונה (התשובה מועתקת ישירות ומנוסחת כסיבה ותוצאה).`
    },
    // Question 24 (Module C - Sequence)
    {
        topic: "english",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        question_text: `<strong>Module C: The Pomodoro Technique</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #4f46e5; font-size: 1.1em; line-height: 1.5;">
            The Pomodoro Technique is a time management method. You work deeply for 25 minutes, and then you take a 5-minute break. This cycle helps the brain stay focused and prevents burnout during long study sessions.
        </div>
        <strong>Question:</strong> Based on the text, what should you do immediately <u>after</u> working deeply for 25 minutes?`,
        options: [
            "<span dir=\"ltr\">Take a 5-minute break.</span>",
            "<span dir=\"ltr\">Stop studying completely for the day.</span>",
            "<span dir=\"ltr\">Work deeply for another 25 minutes.</span>",
            "<span dir=\"ltr\">Change the subject you are studying.</span>"
        ],
        correctAnswer: 0,
        hint: "המילה 'then' (ואז / לאחר מכן) מצביעה על הפעולה הבאה ברצף.",
        solution: `<strong>הסבר מלא (הבנת סדר פעולות - Sequence):</strong><br>
        שאלות רצף דורשות הבנה של ציר הזמן בפסקה.<br>
        השלב הראשון מתואר כ: <span dir="ltr">You work deeply for 25 minutes</span> (אתה עובד לעומק 25 דקות).<br>
        לאחר מכן מופיעה מילת הרצף <strong>then</strong> (ואז):<br>
        <span dir="ltr">"...and <strong>then</strong> you take a 5-minute break."</span><br>
        לכן, הדבר המיידי שיש לעשות לאחר 25 דקות הוא לקחת הפסקה של 5 דקות.`
    },
    // Question 25 (Module C - True/False with Justification)
    {
        topic: "english",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        question_text: `<strong>Module C: E-Waste Problem</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #4f46e5; font-size: 1.1em; line-height: 1.5;">
            Electronic waste, or e-waste, is growing rapidly around the globe. Every year, millions of old phones and computers are thrown into landfills instead of being recycled. These devices contain toxic chemicals that can leak into the soil and harm local water supplies.
        </div>
        <strong>Question:</strong> Are old phones always safely recycled today? (True / False)`,
        options: [
            "<span dir=\"ltr\">False. Millions are thrown into landfills <u>instead of</u> being recycled.</span>",
            "<span dir=\"ltr\">True. The text says e-waste is growing rapidly so they must be recycled.</span>"
        ],
        correctAnswer: 0,
        hint: "המילה 'instead of' (במקום ל...) מראה שהם נזרקים לפח, ולא הולכים למחזור (recycle).",
        solution: `<strong>הסבר מלא (שאלות נכון/לא נכון עם צידוק ב-Module C):</strong><br>
        במודול C לעיתים תתבקשו גם להצדיק את תשובתכם.<br><br>
        הטענה: "טלפונים ישנים תמיד ממוחזרים בבטחה כיום".<br>
        הטקסט אומר בפירוש:<br>
        <span dir="ltr">"...old phones and computers are thrown into landfills <strong>instead of being recycled</strong>."</span><br>
        (נזרקים למטמנות אשפה <strong>במקום</strong> להיות ממוחזרים).<br>
        לכן הטענה היא <strong>False (שקרית)</strong>, וזהו הצידוק המדויק מתוך הטקסט.`
    },
    // Question 26 (Module C - Vocabulary / Synonym)
    {
        topic: "english",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        question_text: `<strong>Module C: E-Waste Problem</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #4f46e5; font-size: 1.1em; line-height: 1.5;">
            Electronic waste, or e-waste, is growing rapidly around the globe. Every year, millions of old phones and computers are thrown into landfills instead of being recycled. These devices contain <strong><u>toxic</u></strong> chemicals that can leak into the soil and harm local water supplies.
        </div>
        <strong>Question:</strong> Which word is the closest synonym (מילה נרדפת) to "<strong>toxic</strong>"?`,
        options: [
            "<span dir=\"ltr\">Poisonous (רעיל / מסוכן)</span>",
            "<span dir=\"ltr\">Valuable (יקר ערך)</span>",
            "<span dir=\"ltr\">Healthy (בריא)</span>",
            "<span dir=\"ltr\">Popular (פופולרי)</span>"
        ],
        correctAnswer: 0,
        hint: "הכימיקלים האלו 'can harm water supplies' (יכולים להזיק למאגרי המים). כלומר, הם משהו רע ומסוכן.",
        solution: `<strong>הסבר מלא (מילים נרדפות והקשר שלילי):</strong><br>
        המילה <span dir="ltr"><strong>Toxic</strong></span> משמעותה <strong>רעיל</strong>.<br>
        אם אינכם מכירים את המילה, ההקשר (Context) עוזר: הכימיקלים האלו "חודרים לאדמה ופוגעים במאגרי מים" (<span dir="ltr">harm local water</span>). <br>
        זה מובהק שהם מזיקים ומסוכנים, ולכן המילה הנרדפת היחידה שמתאימה כאן היא <span dir="ltr"><strong>Poisonous</strong></span> (מורעל / רעיל).`
    },
    // Question 27 (Module C - Cause and Effect with advanced phrasing)
    {
        topic: "english",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        question_text: `<strong>Module C: E-Waste Problem</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #4f46e5; font-size: 1.1em; line-height: 1.5;">
            Electronic waste, or e-waste, is growing rapidly around the globe. Every year, millions of old phones and computers are thrown into landfills instead of being recycled. These devices contain toxic chemicals that can leak into the soil and harm local water supplies.
        </div>
        <strong>Question:</strong> Why is e-waste dangerous to local water supplies?`,
        options: [
            "<span dir=\"ltr\">Because the toxic chemicals in the devices can leak into the soil.</span>",
            "<span dir=\"ltr\">Because it is growing rapidly around the globe.</span>",
            "<span dir=\"ltr\">Because recycling centers use too much water.</span>",
            "<span dir=\"ltr\">Because computers need water to work properly.</span>"
        ],
        correctAnswer: 0,
        hint: "תעקבו אחרי שרשרת הסיבה והתוצאה בטקסט: כימיקלים נמצאים במכשיר -> הכימיקלים מחללחים לאדמה -> ואז הם פוגעים במים.",
        solution: `<strong>הסבר מלא (הבנת תהליכים בטקסט):</strong><br>
        בשאלון C, התשובות לרוב נמצאות באותו משפט שבו מופיע סוף השאלה, רק שצריך לנסח אותן כ"סיבה".<br><br>
        הטקסט מתאר תהליך: המכשירים מכילים כימיקלים רעילים (<span dir="ltr">contain toxic chemicals</span>). מה הכימיקלים האלו עושים? הם <strong>מחללחים לאדמה (leak into the soil)</strong>. <br>
        וזה מה שגורם להם לפגוע במאגרי המים (<span dir="ltr">and harm local water supplies</span>). לכן זו התשובה המדויקת.`
    },
    // Question 28 (Module C - Inference)
    {
        topic: "english",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        question_text: `<strong>Module C: The Discovery of Penicillin</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #4f46e5; font-size: 1.1em; line-height: 1.5;">
            Alexander Fleming did not plan to discover the first antibiotic. He left his laboratory for a two-week vacation. When he returned, he noticed that a strange mold was growing in one of his dirty petri dishes. Surprisingly, this mold was killing the dangerous bacteria around it.
        </div>
        <strong>Question:</strong> What can we imply about the discovery of penicillin?`,
        options: [
            "<span dir=\"ltr\">It happened by accident.</span>",
            "<span dir=\"ltr\">It took Fleming twenty years of hard work.</span>",
            "<span dir=\"ltr\">It was discovered by a mold expert.</span>",
            "<span dir=\"ltr\">Fleming was trying to kill mold with bacteria.</span>"
        ],
        correctAnswer: 0,
        hint: "הטקסט אומר שהוא 'לא תכנן' לגלות את זה (did not plan), וזה קרה כי הוא השאיר צלחת מלוכלכת ויצא לחופשה. כלומר, זה קרה במקרה.",
        solution: `<strong>הסבר מלא (הסקת מסקנות - Inference):</strong><br>
        המילה <strong>imply</strong> (להסיק/מה משתמע) דורשת מאיתנו להבין את ה"וייב" של הטקסט.<br><br>
        העובדות בטקסט:<br>
        1. הוא <strong>לא תכנן</strong> לגלות את זה (<span dir="ltr">did not plan to discover</span>).<br>
        2. זה קרה בגלל שהוא השאיר צלחת מלוכלכת במעבדה ויצא לחופש, ו"להפתעתו" (<span dir="ltr">Surprisingly</span>) גדל שם עובש שהרג חיידקים.<br><br>
        משתמע מכך שהגילוי המדעי החשוב ביותר במאה ה-20 קרה לחלוטין <strong>במקרה / בטעות (by accident)</strong>.`
    },
    // Question 29 (Module C - Specific Detail)
    {
        topic: "english",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        question_text: `<strong>Module C: The Discovery of Penicillin</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #4f46e5; font-size: 1.1em; line-height: 1.5;">
            Alexander Fleming did not plan to discover the first antibiotic. He left his laboratory for a two-week vacation. When he returned, he noticed that a strange mold was growing in one of his dirty petri dishes. Surprisingly, this mold was killing the dangerous bacteria around it.
        </div>
        <strong>Question:</strong> What was the mold doing in the petri dish?`,
        options: [
            "<span dir=\"ltr\">It was killing the dangerous bacteria around it.</span>",
            "<span dir=\"ltr\">It was eating all of Fleming's food.</span>",
            "<span dir=\"ltr\">It was making the bacteria stronger.</span>",
            "<span dir=\"ltr\">It was slowly turning into an antibiotic pill.</span>"
        ],
        correctAnswer: 0,
        hint: "תעשו סריקה מהירה (Scan) למילה mold. מה כתוב בהמשך המשפט על הפעולה שלה?",
        solution: `<strong>הסבר מלא (זיהוי עובדה מפורשת):</strong><br>
        זו שאלת פרטים פשוטה. נחפש את המילה <span dir="ltr"><strong>mold</strong></span> (עובש) בטקסט.<br>
        המשפט האחרון מסביר בדיוק מה קרה שם:<br>
        <span dir="ltr">"...this mold <strong>was killing the dangerous bacteria</strong> around it."</span><br>
        (העובש הזה <strong>היה הורג את החיידקים המסוכנים</strong> שסביבו).<br>
        מעתיקים את זה לתשובה, והרווחתם את הנקודות.`
    },
    // Question 30 (Module C - Summary)
    {
        topic: "english",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        question_text: `<strong>Module C: The Discovery of Penicillin</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #4f46e5; font-size: 1.1em; line-height: 1.5;">
            Alexander Fleming did not plan to discover the first antibiotic. He left his laboratory for a two-week vacation. When he returned, he noticed that a strange mold was growing in one of his dirty petri dishes. Surprisingly, this mold was killing the dangerous bacteria around it.
        </div>
        <strong>Question:</strong> What is the main subject of this paragraph?`,
        options: [
            "<span dir=\"ltr\">How an accidental discovery led to the first antibiotic.</span>",
            "<span dir=\"ltr\">Why scientists need to take vacations.</span>",
            "<span dir=\"ltr\">The dangers of keeping a dirty laboratory.</span>",
            "<span dir=\"ltr\">How bacteria can kill a strange mold.</span>"
        ],
        correctAnswer: 0,
        hint: "מה המסר המרכזי? לא חופשות, ולא ניקיון מעבדות. המסר הוא שהגילוי של האנטיביוטיקה הראשונה היה 'תאונה ממוזלת'.",
        solution: `<strong>הסבר מלא (נושא מרכזי - Main Subject):</strong><br>
        הפסקה מספרת את סיפור המקור של ה<strong>אנטיביוטיקה הראשונה</strong>.<br>
        למרות שהכותב מזכיר "חופשה" ו"מעבדה מלוכלכת", אלו רק <u>פרטי רקע</u> לסיפור (Detail) ולא המסר המרכזי.<br>
        האירוע ההיסטורי פה הוא <strong>התגלית המקרית (accidental discovery)</strong> של האנטיביוטיקה ע"י פלמינג, ולכן התשובה הראשונה היא הסיכום הטוב ביותר של הרעיון הכללי של הטקסט.`
    },
    // ========================================================================
    // תת נושא 4: High School: Module C Practice (רמה 3/4 יחידות)
    // 15 שאלות - טקסטים קצרים ברמת Module C (שאלות הבנה, פרטים, רעיון מרכזי)
    // ========================================================================

    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module C Practice (רמה 3/4 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Many cities around the world are now offering electric scooters for rent. While they are a cheap and fast way to travel through traffic, doctors warn that they cause many accidents. Riders often do not wear helmets and sometimes drive dangerously on sidewalks, hitting pedestrians.</div><strong>What is the main disadvantage of electric scooters mentioned in the text?</strong>",
        options: [
            "They are too expensive to rent.",
            "They are dangerous and cause accidents.",
            "They are too slow in heavy traffic.",
            "They are hard to find in big cities."
        ],
        correctAnswer: 1,
        hint: "חפשו את המילה 'warn' (מזהירים) ואת מה שמופיע אחריה בקטע. היתרונות מופיעים בהתחלה (cheap and fast), אבל השאלה היא על החיסרון (disadvantage).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "ערים רבות ברחבי העולם מציעות כעת קורקינטים חשמליים להשכרה. למרות שהם דרך זולה ומהירה לנוע בפקקים, רופאים מזהירים שהם גורמים לתאונות רבות. רוכבים לרוב אינם חובשים קסדות ולעיתים נוהגים בצורה מסוכנת על מדרכות ופוגעים בהולכי רגל."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה והתשובות:</strong><br>
            השאלה מבקשת לדעת מהו החיסרון המרכזי (disadvantage).
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'>תשובה 2: <strong>הם מסוכנים וגורמים לתאונות.</strong> <span style='color: #166534;'>(נכון, מופיע בבירור: "cause many accidents").</span></li>
                <li style='margin-bottom: 8px;'>תשובה 1: הם יקרים. (לא נכון, כתוב שהם 'cheap' - זולים).</li>
                <li style='margin-bottom: 8px;'>תשובה 3: הם איטיים. (לא נכון, כתוב שהם 'fast').</li>
            </ul>
        </div>`,
        final_answer: "They are dangerous and cause accidents."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module C Practice (רמה 3/4 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Breakfast is often called the most important meal of the day. Studies show that students who eat a healthy breakfast have more energy and focus better during morning classes. In contrast, those who skip it often feel tired and have trouble paying attention.</div><strong>Why should students eat breakfast according to the text?</strong>",
        options: [
            "Because it helps them sleep better at night.",
            "Because it gives them energy and improves concentration.",
            "Because it helps them lose weight fast.",
            "Because the teachers force them to eat."
        ],
        correctAnswer: 1,
        hint: "מה קורה לתלמידים שאוכלים ארוחת בוקר בריאה לפי המחקרים (Studies show...)?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "ארוחת בוקר נקראת לרוב הארוחה החשובה ביותר ביום. מחקרים מראים שתלמידים שאוכלים ארוחת בוקר בריאה נהנים מיותר אנרגיה ומתמקדים טוב יותר בשיעורי הבוקר. לעומת זאת, אלו שמדלגים עליה מרגישים לרוב עייפים ומתקשים לשים לב."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'>הטקסט מציין מפורשות: "have more energy and focus better" (יותר אנרגיה ומיקוד טוב יותר).</li>
                <li style='margin-bottom: 8px;'>המילה concentration (ריכוז/מיקוד) בתשובה 2 היא מילה נרדפת (Synonym) ל-focus המופיעה בטקסט. בבגרות, התשובות לרוב ישתמשו במילים נרדפות ולא יעתיקו מילה במילה מהטקסט.</li>
            </ul>
        </div>`,
        final_answer: "Because it gives them energy and improves concentration."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module C Practice (רמה 3/4 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Fast fashion is a term used to describe clothing that is produced quickly and cheaply to follow the latest trends. However, this industry has a terrible impact on the environment. It uses massive amounts of water and creates millions of tons of waste every year when people throw away clothes after wearing them only once.</div><strong>What does the word \"It\" in the last sentence refer to?</strong>",
        options: [
            "The environment",
            "The fast fashion industry",
            "Water",
            "Waste"
        ],
        correctAnswer: 1,
        hint: "שאלת 'Reference' (למי הכוונה). חזרו תמיד למשפט הקודם. מי או מה 'משתמש בכמויות אדירות של מים'?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "'אופנה מהירה' הוא מונח המשמש לתיאור בגדים המיוצרים במהירות ובזול כדי לעקוב אחר הטרנדים האחרונים. אולם, לתעשייה זו יש השפעה נוראית על הסביבה. <strong>היא</strong> (It) משתמשת בכמויות אדירות של מים ומייצרת מיליוני טונות של פסולת..."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            במבחן בגרות, תמיד יש שאלת אזכור (What does 'It' refer to). כדי לפתור אותה, מסתכלים על הנושא המרכזי של המשפט הקודם. המשפט הקודם מדבר על ה"fast fashion industry" (תעשיית האופנה המהירה) ועל ההשפעה שלה. לכן, ה-"It" במשפט הבא מתייחס לתעשייה זו.
        </div>`,
        final_answer: "The fast fashion industry"
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module C Practice (רמה 3/4 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Many teenagers report feeling lonely, despite being constantly connected to their friends through social media. Psychologists explain that looking at perfect pictures of other people's lives makes teenagers feel that their own lives are boring. Real-life face-to-face interactions are necessary to build true friendships.</div><strong>According to psychologists, why do social media make teens feel lonely?</strong>",
        options: [
            "Because they don't have enough friends online.",
            "Because they compare their lives to the \"perfect\" pictures of others.",
            "Because social media apps cost a lot of money.",
            "Because they spend too much time doing homework."
        ],
        correctAnswer: 1,
        hint: "התשובה מופיעה במשפט שמתחיל ב-'Psychologists explain that...'",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "בני נוער רבים מדווחים שהם מרגישים בודדים, למרות שהם מחוברים כל הזמן לחבריהם דרך הרשתות החברתיות. פסיכולוגים מסבירים שהתבוננות בתמונות מושלמות של חיי אחרים גורמת לבני נוער להרגיש שחייהם שלהם משעממים..."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            הקטע מסביר במפורש ש: "looking at perfect pictures... makes teenagers feel that their own lives are boring". התשובה הנכונה משתמשת במילה "compare" (להשוות) כדי לנסח מחדש את הרעיון של התבוננות בחיי אחרים והרגשה רעה.
        </div>`,
        final_answer: "Because they compare their lives to the \"perfect\" pictures of others."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module C Practice (רמה 3/4 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Learning a second language does more than just help you talk to people when you travel. It is actually great exercise for the brain. Research indicates that bilingual people (those who speak two languages) have better memory and are better at solving complex problems than people who speak only one language.</div><strong>What is an unexpected benefit of learning a second language, according to the text?</strong>",
        options: [
            "It makes traveling much cheaper.",
            "It improves brain functions like memory and problem-solving.",
            "It helps you get a higher salary at work.",
            "It allows you to read foreign newspapers."
        ],
        correctAnswer: 1,
        hint: "הטקסט אומר שללמוד שפה זה יותר מ-רק לדבר בטיולים. זה 'אימון מצוין למוח' (exercise for the brain).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "למידת שפה שנייה עושה יותר מאשר רק לעזור לכם לדבר עם אנשים כשאתם מטיילים. למעשה, זהו אימון מצוין למוח. מחקרים מצביעים על כך שלאנשים דו-לשוניים יש זיכרון טוב יותר והם טובים יותר בפתרון בעיות מורכבות..."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            התועלת המפתיעה (unexpected) שמוזכרת היא שיפור תפקודי המוח: זיכרון (memory) ופתרון בעיות (problem-solving). שאר האופציות לא מוזכרות בטקסט כלל.
        </div>`,
        final_answer: "It improves brain functions like memory and problem-solving."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module C Practice (רמה 3/4 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>In recent years, public transportation has become much more efficient in many European cities. Trains run exactly on time, and new bus routes cover almost every neighborhood. Consequently, many citizens have decided to sell their private cars and rely entirely on public transit.</div><strong>What is the result of the efficient public transportation in European cities?</strong>",
        options: [
            "Trains have become more expensive.",
            "People are moving out of the neighborhoods.",
            "Citizens are selling their cars to use public transit.",
            "More people are buying private cars."
        ],
        correctAnswer: 2,
        hint: "חפשו את מילת התוצאה 'Consequently' (כתוצאה מכך) בקטע. מה קרה בעקבות התחבורה היעילה?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "בשנים האחרונות, התחבורה הציבורית הפכה ליעילה הרבה יותר בערים אירופאיות רבות... כתוצאה מכך (Consequently), אזרחים רבים החליטו למכור את המכוניות הפרטיות שלהם ולהסתמך לחלוטין על תחבורה ציבורית."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            השאלה מבקשת לדעת מהי התוצאה (result). המילה "Consequently" מציגה את התוצאה: מכירת רכבים פרטיים ומעבר לתחבורה ציבורית.
        </div>`,
        final_answer: "Citizens are selling their cars to use public transit."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module C Practice (רמה 3/4 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Smartwatches do more than just tell the time. They monitor your heart rate, count your steps, and even track your sleep patterns. This instant feedback motivates many people to adopt healthier lifestyles and exercise more frequently.</div><strong>Which of the following is a SYNONYM for the word \"monitor\" as used in the text?</strong>",
        options: [
            "Stop",
            "Screen",
            "Track / Check",
            "Display"
        ],
        correctAnswer: 2,
        hint: "השעון החכם סופר ובודק את קצב הלב שלך. איזו מילה פירושה 'לעקוב' או 'לבדוק'?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "שעונים חכמים עושים יותר מסתם להגיד את השעה. הם עוקבים/מנטרים (monitor) את קצב הלב שלך, סופרים את צעדיך, ואפילו עוקבים אחר דפוסי השינה שלך..."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח שאלת אוצר מילים בהקשר:</strong><br>
            במודול C ישנן שאלות על משמעות מילה בתוך הקשר. המילה monitor יכולה להיות 'מסך' (שם עצם), אך כאן היא מתפקדת כפועל שמקביל לפעולות count (לספור) ו-track (לעקוב). לכן, הפירוש המדויק הוא Track / Check (לעקוב / לבדוק).
        </div>`,
        final_answer: "Track / Check (לעקוב / לבדוק)"
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module C Practice (רמה 3/4 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Volunteering at the local animal shelter is highly rewarding. While the primary goal is to help abandoned dogs and cats find loving homes, the volunteers themselves also benefit. Spending time with animals reduces stress and creates a strong sense of community among the workers.</div><strong>What is the MAIN idea of the text?</strong>",
        options: [
            "Abandoned dogs and cats are a big problem in the city.",
            "Volunteering at an animal shelter is good for both the animals and the volunteers.",
            "Working at an animal shelter is a very stressful job.",
            "People should adopt pets instead of buying them."
        ],
        correctAnswer: 1,
        hint: "הרעיון המרכזי משלב את העזרה לחיות יחד עם המשפט 'the volunteers themselves also benefit' (המתנדבים עצמם מרוויחים גם כן).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "התנדבות במקלט החיות המקומי היא מתגמלת מאוד. בעוד שהמטרה העיקרית היא לעזור לכלבים וחתולים נטושים למצוא בתים אוהבים, המתנדבים עצמם גם מרוויחים. בילוי זמן עם חיות מפחית מתח ויוצר תחושת קהילה..."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            שאלת "Main Idea" דורשת לאתר את המשפט שחובק את רוב חלקי הטקסט. הטקסט מחולק לשניים: עזרה לחיות (הפסקה הראשונה), ועזרה למתנדבים (הפחתת מתח). התשובה השנייה משלבת את שני האלמנטים יחד למשפט אחד.
        </div>`,
        final_answer: "Volunteering is good for both the animals and the volunteers."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module C Practice (רמה 3/4 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Before online shopping existed, buying a gift required walking around a crowded mall for hours. Today, e-commerce allows consumers to purchase anything with a single click. Furthermore, online stores provide customer reviews, which help shoppers make better and safer choices without leaving their homes.</div><strong>How do customer reviews help online shoppers?</strong>",
        options: [
            "They allow shoppers to buy things with a single click.",
            "They force the physical malls to close down.",
            "They help shoppers make better and safer purchasing choices.",
            "They make the products significantly cheaper."
        ],
        correctAnswer: 2,
        hint: "התשובה נמצאת בסוף הטקסט, מיד אחרי המילים 'customer reviews'.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "...יתרה מכך, חנויות מקוונות מספקות ביקורות לקוחות (customer reviews), אשר עוזרות לקונים לעשות בחירות טובות ובטוחות יותר מבלי לעזוב את בתיהם."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            שאלת איתור פרטים פשוטה. הטקסט אומר במפורש שביקורות הלקוחות "help shoppers make better and safer choices". אין שום אזכור בטקסט לכך שהביקורות מוזילות את המחיר או סוגרות קניונים.
        </div>`,
        final_answer: "They help shoppers make better and safer purchasing choices."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module C Practice (רמה 3/4 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Many experts believe that teenagers should not have TVs in their bedrooms. The blue light emitted by screens confuses the brain and stops the production of melatonin, a hormone necessary for sleep. Consequently, teens with screens in their rooms suffer from insomnia and poor academic performance.</div><strong>What is the physical cause of insomnia among teens according to the text?</strong>",
        options: [
            "Too much homework causing stress.",
            "The blue light from screens stopping melatonin production.",
            "Eating junk food before going to bed.",
            "Poor academic performance."
        ],
        correctAnswer: 1,
        hint: "מהו הגורם הפיזי (physical cause) שמשבש את השינה? חפשו מה קורה למוח בגלל המסכים.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "...האור הכחול הנפלט ממסכים מבלבל את המוח ועוצר את ייצור המלטונין, הורמון הנחוץ לשינה. כתוצאה מכך, בני נוער עם מסכים בחדריהם סובלים מנדודי שינה (insomnia) וביצועים אקדמיים ירודים."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            שאלת סיבה ותוצאה. נדודי השינה הם התוצאה. הסיבה לכך היא "האור הכחול... שעוצר את ייצור המלטונין".
        </div>`,
        final_answer: "The blue light from screens stopping melatonin production."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module C Practice (רמה 3/4 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Playing action video games is often viewed negatively by parents. However, some researchers argue that gaming has hidden benefits. Fast-paced games require players to process visual information quickly and make split-second decisions, which can actually improve their hand-eye coordination.</div><strong>What is one POSITIVE effect of action video games mentioned?</strong>",
        options: [
            "They make teenagers spend less money.",
            "They improve hand-eye coordination.",
            "They help teenagers sleep better.",
            "They reduce arguments with parents."
        ],
        correctAnswer: 1,
        hint: "השאלה מחפשת אפקט חיובי. חפשו את המילה 'improve' (לשפר) בקטע.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "הורים מרבים לראות משחקי וידאו של פעולה באור שלילי. אולם, כמה חוקרים טוענים שיש לגיימינג יתרונות נסתרים... (המשחקים) עשויים למעשה לשפר את קשר העין-יד שלהם (hand-eye coordination)."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            הקטע מתחיל בהיבט השלילי של ההורים, אך המילה "However" מסובבת את הטקסט ליתרונות. היתרון היחיד שמוזכר בסוף הפסקה הוא שיפור הקואורדינציה (קשר עין-יד).
        </div>`,
        final_answer: "They improve hand-eye coordination."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module C Practice (רמה 3/4 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>To \"reduce, reuse, and recycle\" is the golden rule of environmental protection. While most people understand recycling, 'reducing' is actually the most powerful step. By simply buying fewer unnecessary items, we stop waste from being created in the first place, saving energy and natural resources.</div><strong>According to the text, why is \"reducing\" the most powerful step?</strong>",
        options: [
            "Because it is cheaper than recycling machines.",
            "Because it prevents waste from being created in the first place.",
            "Because it is the only rule people actually remember.",
            "Because buying things helps the economy grow."
        ],
        correctAnswer: 1,
        hint: "למה 'להפחית' (reducing) קניות חשוב יותר מלמחזר? הקטע מסביר שזה עוצר משהו מההתחלה.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "...בעוד שרוב האנשים מבינים מיחזור, 'הפחתה' (reducing) היא למעשה הצעד העוצמתי ביותר. פשוט על ידי קניית פחות פריטים מיותרים, אנו עוצרים את היווצרות הפסולת מלכתחילה (in the first place)..."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            הטקסט משווה בין 'למחזר' לבין 'לא לקנות בכלל'. הסיבה שאי-קנייה עוצמתית יותר היא שהיא מונעת מהזבל להיווצר בכלל (prevents waste from being created).
        </div>`,
        final_answer: "Because it prevents waste from being created in the first place."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module C Practice (רמה 3/4 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Many teenagers complain that homework ruins their free time. However, teachers argue that homework is not meant as a punishment. Its real purpose is to reinforce the lessons learned in class, allowing students to practice the material independently and discover what they didn't fully understand.</div><strong>What is the teachers' point of view regarding homework?</strong>",
        options: [
            "It is a useful punishment for bad behavior.",
            "It is a tool to help students practice and understand the material.",
            "It is meant to keep teenagers busy during their free time.",
            "It is not necessary if the student listens in class."
        ],
        correctAnswer: 1,
        hint: "המורים (teachers) טוענים ששיעורי בית נועדו לחזק (reinforce) את הנלמד ולאפשר תרגול.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "...מורים טוענים ששיעורי בית אינם מיועדים להיות עונש. מטרתם האמיתית היא לחזק את השיעורים שנלמדו בכיתה, לאפשר לתלמידים לתרגל את החומר בעצמם ולגלות מה הם לא הבינו לחלוטין."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            השאלה בודקת הבנה של "נקודת המבט" (Point of view) של המורים, בניגוד לזו של התלמידים. נקודת המבט של המורים היא חיובית ופרקטית: כלי לתרגול הבנה.
        </div>`,
        final_answer: "It is a tool to help students practice and understand the material."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module C Practice (רמה 3/4 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Owning a dog requires a lot of time and money. You have to buy high-quality food, pay for expensive vet visits, and walk the dog twice a day. Despite these heavy demands, millions of people choose to keep dogs because the unconditional love and joy they provide make all the hard work worthwhile.</div><strong>What can we infer from the text about owning a dog?</strong>",
        options: [
            "It is completely free if you don't go to the vet.",
            "The emotional benefits outweigh the practical difficulties.",
            "Only rich people can afford to buy a dog.",
            "Walking the dog is the only hard part of owning one."
        ],
        correctAnswer: 1,
        hint: "הטקסט מפרט המון קשיים, אבל אומר שבגלל האהבה והשמחה - אנשים עדיין עושים את זה (משתלם להם).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "החזקת כלב דורשת הרבה זמן וכסף... למרות הדרישות הכבדות הללו, מיליוני אנשים בוחרים להחזיק כלבים מכיוון שהאהבה ללא תנאי והשמחה שהם מספקים הופכות את כל העבודה הקשה לכדאית (worthwhile)."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח שאלת הסקה (Inference):</strong><br>
            אי אפשר למצוא את המילים המדויקות בתשובה, אלא צריך להסיק מסקנה. המסקנה של הטקסט היא שיתרונות הרגש (אהבה) גוברים על הקשיים המעשיים (זמן וכסף). (Outweigh = גוברים על / שווים יותר).
        </div>`,
        final_answer: "The emotional benefits outweigh the practical difficulties."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module C Practice (רמה 3/4 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Food waste in supermarkets is a global tragedy. Supermarkets often throw away perfectly good fruits and vegetables just because they have a weird shape or a small spot. To combat this, some organizations collect this \"ugly\" food and sell it at a discount to poor families, reducing waste and fighting hunger simultaneously.</div><strong>How do some organizations solve the problem of \"ugly\" food?</strong>",
        options: [
            "They throw it away in special trash cans.",
            "They force the supermarkets to lower their prices.",
            "They collect it and sell it cheaply to families in need.",
            "They send it to farms to feed the animals."
        ],
        correctAnswer: 2,
        hint: "הפסקה מתארת פתרון לבעיה בחלק שמתחיל במילים 'To combat this' (כדי להילחם בזה). מה הארגונים עושים?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "...כדי להילחם בכך, חלק מהארגונים אוספים את האוכל ה'מכוער' הזה ומוכרים אותו בהנחה (at a discount) למשפחות עניות, ובכך מפחיתים פסולת ונלחמים ברעב בו-זמנית."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            השאלה ישירה מאוד ושואלת מה הפתרון שמציעים הארגונים. התשובה מופיעה ישירות במשפט האחרון: "collect this food and sell it at a discount" = "sell it cheaply".
        </div>`,
        final_answer: "They collect it and sell it cheaply to families in need."
    },


    // ========================================================================
    // תת נושא 5: High School: Module E Practice (רמה 4/5 יחידות)
    // 15 שאלות - טקסטים אקדמיים/פסיכולוגיים, אוצר מילים גבוה, הסקות מורכבות
    // ========================================================================

    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module E Practice (רמה 4/5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>The placebo effect remains one of the most fascinating phenomena in modern medicine. Patients who are administered a harmless sugar pill often report a significant reduction in pain simply because they believe they are receiving real medical treatment. This powerful psychological trigger literally forces the brain to release its own natural painkillers, known as endorphins, thereby creating a genuine physical recovery.</div><strong>According to the text, the relief patients feel from a placebo is caused by...</strong>",
        options: [
            "The chemical ingredients hidden inside the sugar pill.",
            "The body's physical response to the patient's belief and expectation.",
            "The extended time the doctors spend talking with the patients.",
            "The high amount of sugar providing immediate energy."
        ],
        correctAnswer: 1,
        hint: "הטקסט מסביר שההקלה בכאב נובעת מהאמונה של החולה, שגורמת למוח לשחרר משככי כאבים טבעיים.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע (רמה מתקדמת):</strong><br>
            "אפקט הפלצבו נותר אחת התופעות המרתקות ברפואה המודרנית. מטופלים הניתנת להם גלולת סוכר בלתי מזיקה מדווחים לעיתים קרובות על הפחתה משמעותית בכאב, פשוט משום שהם מאמינים שהם מקבלים טיפול רפואי אמיתי. טריגר פסיכולוגי עוצמתי זה מכריח פשוטו כמשמעו את המוח לשחרר משככי כאבים טבעיים משלו (אנדורפינים), ובכך ליצור החלמה פיזית אמיתית."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            מודול E מתמקד בקשרי סיבה ותוצאה מדעיים/פסיכולוגיים. גלולת הסוכר עצמה לא מרפאת (תשובות 1 ו-4 שגויות). הריפוי קורה בגלל ה'אמונה' (belief) שגורמת ל'תגובה פיזית' במוח. 
        </div>`,
        final_answer: "The body's physical response to the patient's belief and expectation."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module E Practice (רמה 4/5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Urbanization has dramatically altered the natural landscape, forcing wildlife to either adapt or perish. Interestingly, certain species, such as urban foxes and raccoons, have thrived in concrete environments. These adaptable scavengers have altered their diets to consume human food waste and shifted their hunting schedules to the dead of night to avoid human interaction.</div><strong>What does the author imply about urban foxes and raccoons?</strong>",
        options: [
            "They are completely dependent on humans feeding them directly.",
            "They possess a high degree of behavioral flexibility allowing them to survive.",
            "They have become more aggressive towards humans over the years.",
            "They are slowly returning to the wild as cities grow larger."
        ],
        correctAnswer: 1,
        hint: "הטקסט מתאר איך החיות האלו 'התאימו את עצמן' (adapt) ושנו את שעות הציד ואת התזונה שלהן (behavioral flexibility).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "העיור (Urbanization) שינה דרמטית את הנוף הטבעי, וגזר על חיות הבר להתאים את עצמן או להכחד. מעניין לציין, שמינים מסוימים, כגון שועלים ודביבונים עירוניים, שגשגו בסביבות בטון. אוכלי נבלות סתגלנים אלו שינו את תזונתם כדי לצרוך פסולת מזון אנושית, והסיטו את לוחות הזמנים של הציד שלהם לאישון לילה כדי להימנע מאינטראקציה אנושית."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            שאלת Inply (מה המחבר רומז/טוען). המחבר מתאר חיות ששינו תזונה ושעות שינה כדי לשרוד. זה מראה על גמישות התנהגותית גבוהה (behavioral flexibility). הן אינן 'תלויות' בהאכלה ישירה, אלא אוכלות מהזבל.
        </div>`,
        final_answer: "They possess a high degree of behavioral flexibility allowing them to survive."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module E Practice (רמה 4/5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Contrary to popular belief, procrastination is rarely an issue of poor time management or sheer laziness. Psychological studies categorize procrastination as an emotional regulation problem. When faced with a task that triggers anxiety, boredom, or feelings of incompetence, individuals delay the task in order to obtain a brief, immediate relief from those negative emotions.</div><strong>According to psychological studies, why do people procrastinate?</strong>",
        options: [
            "Because they simply do not know how to manage their daily schedules.",
            "Because they are inherently lazy and avoid all forms of hard work.",
            "As a coping mechanism to temporarily escape negative feelings associated with a task.",
            "As a strategy to produce better work under the pressure of a deadline."
        ],
        correctAnswer: 2,
        hint: "הטקסט טוען במפורש שדחיינות היא בעיה של ויסות רגשי (emotional regulation), ונועדה להשיג הקלה מרגשות שליליים.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "בניגוד לאמונה הרווחת, דחיינות (procrastination) היא נדירות בעיה של ניהול זמן לקוי או עצלנות צרופה. מחקרים פסיכולוגיים מקטלגים דחיינות כבעיה של ויסות רגשי. כשמתמודדים עם משימה שמעוררת חרדה, שעמום או תחושת חוסר יכולת, אנשים דוחים את המשימה כדי להשיג הקלה קצרה ומיידית מאותם רגשות שליליים."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            הקטע תוקף את המיתוס שדחיינות נובעת מעצלנות (שולל את תשובות 1 ו-2). הסיבה האמיתית, לפי הפסיכולוגיה, היא בריחה (escape) או התמודדות עם תחושות שליליות (coping mechanism).
        </div>`,
        final_answer: "As a coping mechanism to escape negative feelings associated with a task."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module E Practice (רמה 4/5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Fast food companies invest billions in psychological marketing. Have you ever noticed that most fast-food logos predominantly feature the colors red and yellow? This is not a coincidence. Color psychology dictates that red stimulates hunger and creates a sense of urgency, while yellow evokes feelings of happiness and comfort. Together, they subconsciously draw customers in and encourage them to eat quickly.</div><strong>What is the author's primary purpose in writing this paragraph?</strong>",
        options: [
            "To criticize the unhealthy nutritional value of fast food.",
            "To explain the hidden psychological tactics fast-food brands use to attract customers.",
            "To advise graphic designers on which colors to use for restaurant signs.",
            "To prove that eating fast food makes people feel genuinely happy."
        ],
        correctAnswer: 1,
        hint: "הכותב לא מדבר על הקלוריות של האוכל, אלא על 'הטריקים' הפסיכולוגיים שהחברות מפעילות על המוח שלנו דרך צבעים.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "חברות מזון מהיר משקיעות מיליארדים בשיווק פסיכולוגי. האם שמתם לב פעם שרוב סמלילי המזון המהיר כוללים בעיקר את הצבעים אדום וצהוב? זה לא צירוף מקרים. פסיכולוגיית צבעים מכתיבה שאדום מעורר רעב ותחושת דחיפות, בעוד צהוב מעורר תחושות של אושר ונוחות. יחד, הם מושכים לקוחות בתת-מודע ומעודדים אותם לאכול במהירות."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח שאלת מטרת הכותב (Author's Purpose):</strong><br>
            שאלות אלו נפוצות ב-Module E. הכותב חושף סוד מסחרי (שימוש בצבעים להשפעה תת-מודעת). המטרה היא להסביר את הטקטיקות הפסיכולוגיות הנסתרות של החברות הללו כדי להשיג לקוחות. אין כאן שום ביקורת על תזונה.
        </div>`,
        final_answer: "To explain the hidden psychological tactics fast-food brands use."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module E Practice (רמה 4/5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>While humanity has successfully mapped the entire surface of Mars and sent probes out of the solar system, our own oceans remain largely a mystery. It is estimated that over 80% of the Earth's oceans are unmapped and unexplored. The extreme pressure and total darkness of the deep sea pose technological challenges far greater than the vacuum of space.</div><strong>What comparison does the author make to highlight our lack of knowledge about the oceans?</strong>",
        options: [
            "A comparison between the ocean's depth and the height of Earth's mountains.",
            "A comparison between the budget of NASA and marine biology organizations.",
            "A comparison between our extensive achievements in space exploration and our ignorance of the deep sea.",
            "A comparison between the dangers of vacuum in space and the dangers of marine predators."
        ],
        correctAnswer: 2,
        hint: "הכותב מציב שני דברים זה מול זה: 'אמנם מיפינו את מאדים... אבל האוקיינוסים שלנו נותרו תעלומה'.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "בעוד שהאנושות מיפתה בהצלחה את כל פני השטח של מאדים ושלחה גשושיות אל מחוץ למערכת השמש, האוקיינוסים שלנו נותרים במידה רבה תעלומה. מוערך כי למעלה מ-80% מהאוקיינוסים של כדור הארץ אינם ממופים ולא נחקרו. הלחץ הקיצוני והחושך המוחלט של הים העמוק מציבים אתגרים טכנולוגיים גדולים בהרבה מהוואקום של החלל."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            כדי להמחיש את הבורות שלנו לגבי האוקיינוסים (The point being made), הכותב משתמש בהשוואה כואבת: הצלחנו לכבוש את החלל הרחוק (space exploration), אך לא הצלחנו לחקור את מה שנמצא כאן בכדור הארץ בים.
        </div>`,
        final_answer: "A comparison between space exploration achievements and ocean ignorance."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module E Practice (רמה 4/5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>The integration of Artificial Intelligence (AI) in the workplace has sparked widespread anxiety about mass unemployment. However, economists suggest a more nuanced reality. While AI will inevitably automate routine and repetitive manual tasks, it will simultaneously generate new industries and roles that demand high-level human creativity, emotional intelligence, and strategic thinking.</div><strong>According to the economists, how will AI affect the job market?</strong>",
        options: [
            "It will completely eliminate the need for human workers in all fields.",
            "It will replace repetitive jobs but create new roles that require unique human skills.",
            "It will only affect factory workers and leave office jobs untouched.",
            "It will cause a global economic collapse due to mass unemployment."
        ],
        correctAnswer: 1,
        hint: "הכלכלנים טוענים שהמציאות מורכבת יותר (nuanced): ה-AI אכן יחליף משימות חזרתיות (automates routine tasks), אבל במקביל ייצר (generate) תעשיות חדשות.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "השילוב של בינה מלאכותית (AI) במקום העבודה עורר חרדה נרחבת מפני אבטלה המונית. אולם, כלכלנים מציעים מציאות מורכבת יותר. בעוד שה-AI בהחלט יהפוך לאוטומטיות משימות שגרתיות וחזרתיות, הוא ייצר בו זמנית תעשיות ותפקידים חדשים שדורשים יצירתיות אנושית ברמה גבוהה, אינטליגנציה רגשית וחשיבה אסטרטגית."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            פסקה קלאסית של שתי פנים. הכלכלנים לא מסכימים שה-AI יחסל את כל העבודות (תשובות 1 ו-4 נפסלות על קיצוניות). הם רואים תהליך כפול: חיסול משימות שגרתיות לצד יצירת עבודות אנושיות-יצירתיות.
        </div>`,
        final_answer: "It will replace repetitive jobs but create new roles requiring human skills."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module E Practice (רמה 4/5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Many people mistakenly view introversion as merely being shy. In psychological terms, introversion and extroversion are defined by how individuals recharge their cognitive batteries. Extroverts gain energy from social stimulation and crowded environments, whereas introverts expend energy in those same settings and require solitude and silence to restore their mental reserves.</div><strong>What is the fundamental difference between introverts and extroverts mentioned in the text?</strong>",
        options: [
            "Introverts are naturally shy, while extroverts are confident.",
            "Introverts dislike people, while extroverts love everyone.",
            "Extroverts draw energy from socializing, while introverts need alone time to regain energy.",
            "Extroverts are better at performing tasks in crowded environments than introverts."
        ],
        correctAnswer: 2,
        hint: "ההבדל מתמקד במילה 'recharge' (טעינת סוללות מנטליות). מאיפה כל אחד מקבל את האנרגיה שלו?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "אנשים רבים רואים בטעות במופנמות (introversion) פשוט ביישנות. במונחים פסיכולוגיים, מופנמות ומוחצנות מוגדרות על ידי האופן שבו אנשים מטעינים את הסוללות הקוגניטיביות שלהם. מוחצנים שואבים אנרגיה מגירוי חברתי וסביבות הומות אדם, בעוד מופנמים מוציאים אנרגיה באותן סביבות וזקוקים לבדידות ושקט כדי לשקם את הרזרבות המנטליות שלהם."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            הטקסט שולל במפורש את המיתוס שההבדל הוא ביישנות (תשובה 1 נופלת). ההבדל המרכזי (fundamental) הוא מנגנון ייצור האנרגיה: מוחצן שואב אנרגיה מחברה, בעוד מופנם חייב להיות לבד כדי להיטען (solitude = alone time).
        </div>`,
        final_answer: "Extroverts draw energy from socializing, while introverts need alone time."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module E Practice (רמה 4/5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>When European explorers first encountered coffee in the Middle East during the 16th century, they were highly suspicious of the dark, bitter liquid. Initially, coffee was treated purely as a medicinal herb used to cure stomach aches. It wasn't until a century later that coffee houses popped up across London, transforming the beverage from a rare medical treatment into a daily social necessity.</div><strong>How did the perception of coffee change in Europe over time?</strong>",
        options: [
            "It went from being a popular social drink to a banned dangerous liquid.",
            "It evolved from being seen as a medical remedy to becoming a popular social beverage.",
            "It was initially loved by explorers but later rejected by the European public.",
            "It changed from being a sweet dessert drink to a bitter medicine."
        ],
        correctAnswer: 1,
        hint: "בתחילה (Initially) הקפה נחשב לעשב רפואי (medicinal herb). מאוחר יותר, הוא הפך למשקה חברתי יומיומי (social necessity).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "כאשר חוקרים אירופאים נתקלו לראשונה בקפה במזרח התיכון במהלך המאה ה-16, הם היו חשדניים מאוד כלפי הנוזל הכהה והמר. בתחילה, הקפה יוחס אך ורק כצמח מרפא (medicinal herb) ששימש לריפוי כאבי בטן. רק מאה שנים מאוחר יותר צצו בתי קפה ברחבי לונדון, והפכו את המשקה מטיפול רפואי נדיר לצורך חברתי יומיומי."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            שאלת תהליך (Evolution). הטקסט מתאר במפורש מהפך: מהיותו תרופה לכאבי בטן (medical remedy), הוא הפך למוצר צריכה חברתי המוני בבתי הקפה (social beverage).
        </div>`,
        final_answer: "It evolved from a medical remedy to a popular social beverage."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module E Practice (רמה 4/5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>The concept of \"multitasking\" is largely a myth. Neuroscience dictates that the human brain cannot consciously process two demanding cognitive tasks simultaneously. When we believe we are multitasking—like driving while texting—we are actually \"switch-tasking\". The brain rapidly shifts its focus back and forth between the two activities, which severely impairs reaction time and increases the likelihood of errors.</div><strong>What is the main danger of what we commonly call \"multitasking\"?</strong>",
        options: [
            "It permanently damages the brain's cognitive structures.",
            "It causes the brain to focus completely on one task and ignore the other.",
            "It involves rapid shifting of attention, which lowers performance and causes mistakes.",
            "It makes humans rely too much on technology like smartphones."
        ],
        correctAnswer: 2,
        hint: "המוח לא מבצע שתי פעולות במקביל, אלא 'קופץ' ביניהן במהירות. כתוצאה מכך, זמני התגובה נפגעים ויש יותר שגיאות (impairs reaction time and increases errors).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "מושג ה'מולטי-טאסקינג' הוא במידה רבה מיתוס. מדעי המוח קובעים שהמוח האנושי אינו יכול לעבד במודע שתי משימות קוגניטיביות תובעניות בו זמנית. כשאנו מאמינים שאנו מבצעים ריבוי משימות - כמו נהיגה תוך כדי סימוס - אנו למעשה 'מחליפים משימות'. המוח מעביר את המיקוד שלו הלוך ושוב במהירות בין שתי הפעילויות, מה שפוגע קשות בזמן התגובה ומגדיל את הסבירות לטעויות."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            שאלת הבנת סכנה קונקרטית. הסכנה המפורטת במשפט האחרון היא שהמוח מבצע 'החלפה מהירה' (rapid shifting) הגורמת לפגיעה בביצועים ולשגיאות (lowers performance and causes mistakes).
        </div>`,
        final_answer: "It involves rapid shifting of attention, which lowers performance and causes mistakes."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module E Practice (רמה 4/5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>The 'Sunk Cost Fallacy' is a cognitive trap that makes people continue investing money or time into a failing project simply because they have already invested heavily in it. Instead of cutting their losses and walking away, they irrationally hope that pouring more resources into the doomed venture will somehow magically fix it. This emotional bias affects everything from toxic relationships to disastrous financial investments.</div><strong>Based on the text, why do people fall into the \"Sunk Cost Fallacy\"?</strong>",
        options: [
            "Because they are optimists who believe every project can succeed.",
            "Because they let the resources they already spent dictate their future decisions irrationally.",
            "Because they do not understand how the stock market works.",
            "Because they want to prove to others that they are wealthy."
        ],
        correctAnswer: 1,
        hint: "אנשים נופלים למלכודת הזו בגלל ההשקעה ש*כבר נעשתה בעבר* (already invested heavily), שמונעת מהם לחתוך הפסדים באופן רציונלי.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "'שגיאת העלות האבודה' היא מלכודת קוגניטיבית שגורמת לאנשים להמשיך להשקיע כסף או זמן בפרויקט כושל פשוט בגלל שהם כבר השקיעו בו רבות. במקום לחתוך את ההפסדים שלהם וללכת, הם מקווים באופן לא רציונלי ששפיכת משאבים נוספים למיזם הנידון לכישלון איכשהו תתקן אותו באורח פלא..."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            ההסבר למלכודת הפסיכולוגית הזו הוא שאנשים לא מקבלים החלטה חדשה לפי המצב הנוכחי, אלא הם נותנים למה שהם *כבר השקיעו/איבדו* (the resources they already spent) לשלוט בהם באופן רגשי ולא רציונלי.
        </div>`,
        final_answer: "Because they let previously spent resources dictate their future decisions irrationally."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module E Practice (רמה 4/5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Regular cardiovascular exercise does not only strengthen the heart; it profoundly alters the brain's architecture. Aerobic workouts pump oxygen-rich blood to the brain, which triggers the release of a protein called BDNF. This protein acts like fertilizer for the brain, promoting the growth of new neurons in the hippocampus, the area responsible for long-term memory and learning.</div><strong>What is the direct physical cause of improved memory following exercise?</strong>",
        options: [
            "The heart beating faster makes the brain sleep better.",
            "The exercise makes the person feel less stressed.",
            "The release of the BDNF protein stimulates the growth of new neurons in the hippocampus.",
            "The oxygen burns away bad cells in the brain."
        ],
        correctAnswer: 2,
        hint: "השאלה מחפשת את המנגנון הפיזי (direct physical cause). הזרמת החמצן גורמת לשחרור חלבון ספציפי שמצמיח תאים באזור הזיכרון.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "פעילות אירובית (אימוני לב-ריאה) סדירה לא רק מחזקת את הלב; היא משנה מהותית את הארכיטקטורה של המוח. אימונים אירוביים מזרימים דם עשיר בחמצן למוח, מה שמעורר שחרור חלבון בשם BDNF. חלבון זה פועל כמו דשן למוח, ומקדם צמיחה של נוירונים (תאי עצב) חדשים בהיפוקמפוס, האזור האחראי על זיכרון לטווח ארוך ולמידה."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            זוהי שאלה קלאסית ב-Module E הדורשת הבנת 'שרשרת ביולוגית/מדעית'. התהליך המוביל לזיכרון טוב יותר הוא: פעילות גופנית -> חמצן -> חלבון BDNF -> נוירונים חדשים. התשובה המדויקת ביותר מתייחסת ל-BDNF.
        </div>`,
        final_answer: "The release of the BDNF protein stimulates the growth of new neurons in the hippocampus."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module E Practice (רמה 4/5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>For decades, scientists viewed the Neanderthals as primitive, brute cavemen lacking any sophisticated culture. However, recent archaeological discoveries have turned this assumption upside down. We now have concrete evidence that Neanderthals created cave art, used complex tools, and even buried their dead with flowers—a clear indication of abstract thought and emotional depth.</div><strong>What is the main shift in perspective described in the paragraph?</strong>",
        options: [
            "Scientists now believe Neanderthals were actually aliens.",
            "Scientists changed their view of Neanderthals from unintelligent brutes to culturally complex beings.",
            "Scientists discovered that Neanderthals lived in modern houses rather than caves.",
            "Scientists realized that Neanderthals were the ones who taught humans how to hunt."
        ],
        correctAnswer: 1,
        hint: "בתחילת הפסקה הם נתפסו כ'פרימיטיביים' (primitive). בסוף הפסקה, בעקבות תגליות, הם נחשבים לבעלי 'חשיבה מופשטת ותרבות'.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "במשך עשורים, מדענים ראו את הניאנדרטלים כאנשי מערות פרימיטיביים וברוטליים החסרים כל תרבות מתוחכמת. אולם, תגליות ארכיאולוגיות אחרונות הפכו את ההנחה הזו על פיה. יש לנו כעת ראיות מוצקות שניאנדרטלים יצרו אמנות מערות, השתמשו בכלים מורכבים ואף קברו את מתיהם עם פרחים - אינדיקציה ברורה למחשבה מופשטת ועומק רגשי."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            שאלת Change of perspective (שינוי נקודת מבט). המהפך הוא המעבר מחשיבה עליהם כיצורים טיפשים (unintelligent brutes) להכרה בכך שהייתה להם תרבות מורכבת ויכולות רגשיות (culturally complex beings).
        </div>`,
        final_answer: "Scientists changed their view of Neanderthals from unintelligent brutes to culturally complex beings."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module E Practice (רמה 4/5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>The rising issue of 'space junk' poses a terrifying threat to global communications. There are currently millions of pieces of debris—from dead satellites to tiny flecks of paint—orbiting Earth at 17,500 miles per hour. At such extreme velocities, even a small screw can hit an active communication satellite with the explosive force of a hand grenade, potentially knocking out GPS and internet networks.</div><strong>Why are tiny objects like a \"screw\" considered so dangerous in space?</strong>",
        options: [
            "Because they are highly radioactive and pollute the atmosphere.",
            "Because their extreme speed gives them massive destructive power upon impact.",
            "Because they attract aliens to our solar system.",
            "Because they block the sun's rays and cool down the Earth."
        ],
        correctAnswer: 1,
        hint: "הטקסט מציין את המהירות האדירה (extreme velocities) שהופכת פריט קטן לנשק קטלני (כמו רימון יד).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "הבעיה הגוברת של 'זבל חלל' מהווה איום מבעית על התקשורת העולמית. ישנם כיום מיליוני חתיכות של פסולת - מלוויינים מתים ועד כתמי צבע זעירים - המקיפים את כדור הארץ במהירות של 17,500 מייל לשעה. במהירויות קיצוניות כאלה, אפילו בורג קטן יכול לפגוע בלוויין תקשורת פעיל בעוצמת פיצוץ של רימון יד, מה שעלול לשתק רשתות GPS ואינטרנט."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            הסיבה שבורג זעיר הוא מסוכן היא המהירות הקינטית שלו בחלל ("extreme velocities... explosive force"). 
        </div>`,
        final_answer: "Because their extreme speed gives them massive destructive power upon impact."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module E Practice (רמה 4/5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>The gig economy has provided unparalleled flexibility for millions of modern workers, allowing them to choose their own hours and clients. However, this freedom comes at a steep price. Freelancers and contractors lack the foundational safety nets of traditional employment, such as paid sick leave, health insurance, and employer-sponsored retirement plans.</div><strong>What does the author identify as the main trade-off (downside) of the gig economy?</strong>",
        options: [
            "Workers have to work strictly from 9 to 5.",
            "Workers gain flexibility but lose essential employment benefits and financial security.",
            "Workers are forced to pay higher taxes than traditional employees.",
            "Workers must commute long distances to reach their clients."
        ],
        correctAnswer: 1,
        hint: "הטקסט מדבר על ה'מחיר הכבד' (steep price) שבא עם החופש. הפרילנסרים חסרים רשתות ביטחון כמו ימי מחלה ופנסיה.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "כלכלת החלטורות (gig economy) סיפקה גמישות שאין שנייה לה למיליוני עובדים מודרניים... אולם, חופש זה בא במחיר כבד. לפרילנסרים וקבלנים חסרות רשתות הביטחון הבסיסיות של תעסוקה מסורתית, כגון חופשת מחלה בתשלום, ביטוח בריאות ותוכניות פרישה בחסות המעסיק."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            הכותב מציג פשרה (Trade-off) בין יתרון מול חיסרון: מצד אחד גמישות (flexibility), אך מהצד השני היעדר זכויות סוציאליות והטבות (lose essential employment benefits).
        </div>`,
        final_answer: "Workers gain flexibility but lose essential employment benefits and financial security."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module E Practice (רמה 4/5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Microplastics are now ubiquitous, invading even the most pristine environments on Earth. These tiny plastic particles, shed from synthetic clothing and degrading plastic bottles, have been discovered in fresh Antarctic snow and at the bottom of the Mariana Trench. Alarmingly, they are increasingly making their way up the food chain, eventually accumulating in the human digestive system.</div><strong>What is the most alarming concern regarding microplastics presented in the text?</strong>",
        options: [
            "They make the snow in Antarctica melt faster.",
            "They destroy synthetic clothing very quickly.",
            "They infiltrate the food chain and end up inside human bodies.",
            "They make the ocean water look cloudy and dirty."
        ],
        correctAnswer: 2,
        hint: "המילה 'Alarmingly' (באופן מעורר דאגה/מבהיל) מובילה אותנו ישירות למידע על שרשרת המזון ומערכת העיכול האנושית.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "מיקרו-פלסטיק נמצא כעת בכל מקום (ubiquitous), ופולש אפילו לסביבות הטהורות ביותר על פני כדור הארץ. חלקיקי פלסטיק זעירים אלו... התגלו בשלג אנטארקטי טרי ובתחתית שקע מריאנה. באופן מעורר דאגה, הם מפלסים את דרכם במעלה שרשרת המזון, ולבסוף מצטברים במערכת העיכול האנושית."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            השאלה מבקשת את הדאגה ה'מבהילה' ביותר. הטקסט מסמן זאת על ידי מילת ההדגשה "Alarmingly" – הפלסטיק חודר לשרשרת המזון (food chain) ומשם לגוף האדם (human digestive system).
        </div>`,
        final_answer: "They infiltrate the food chain and end up inside human bodies."
    },
    // ========================================================================
    // תת נושא 5: High School: Module G Practice (רמה 5 יחידות)
    // שאלות הבנת הנקרא ברמה אקדמית, אוצר מילים גבוה במיוחד
    // ========================================================================

    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>For decades, the dogma of genetics suggested that our DNA sequence dictated our biological destiny. However, the emerging field of epigenetics illustrates a more dynamic reality. While our underlying genetic code remains unaltered, environmental factors such as diet, stress, and exposure to toxins can activate or silence specific genes. This means that our lifestyle choices can profoundly influence how our genetic blueprint is expressed.</div><strong>What is the main idea presented in the text regarding epigenetics?</strong>",
        options: [
            "Our genetic code is constantly rewritten by our environment.",
            "Environmental factors can determine which genes are active without changing the DNA sequence itself.",
            "Diet and stress are the only factors that can permanently alter our DNA.",
            "Epigenetics proves that our biological destiny is completely predetermined at birth."
        ],
        correctAnswer: 1,
        hint: "הטקסט אומר: 'While our underlying genetic code remains unaltered... factors can activate or silence specific genes' (בעוד שהקוד עצמו לא משתנה, גורמים יכולים להפעיל או להשתיק גנים).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע (Module G):</strong><br>
            "במשך עשורים, הדוגמה של הגנטיקה הציעה שרצף ה-DNA שלנו מכתיב את גורלנו הביולוגי. אולם, התחום העולה של אפיגנטיקה ממחיש מציאות דינמית יותר. בעוד שהקוד הגנטי הבסיסי שלנו נותר ללא שינוי (unaltered), גורמים סביבתיים כמו תזונה, מתח וחשיפה לרעלנים יכולים להפעיל או להשתיק גנים ספציפיים. המשמעות היא שבחירות אורח החיים שלנו יכולות להשפיע עמוקות על האופן שבו התוכנית הגנטית שלנו באה לידי ביטוי."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            במודול G המסיחים הם טריקיים. תשובה 1 טוענת שהקוד "נכתב מחדש" (rewritten), אך הטקסט אומר שהוא נשאר ללא שינוי. הרעיון המרכזי (תשובה 2) הוא שהסביבה קובעת את <em>הפעילות</em> של הגנים, ולא את המבנה שלהם.
        </div>`,
        final_answer: "Environmental factors can determine which genes are active without changing the DNA sequence itself."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>In modern consumer societies, we often equate freedom with an abundance of choice. Paradoxically, psychological research coined \"The Paradox of Choice\" suggests otherwise. When presented with dozens of varieties of a single product, consumers frequently experience decision fatigue. This overwhelming array of options leads to anxiety, hesitation, and ultimately, less satisfaction with the final purchase compared to those who choose from a limited selection.</div><strong>According to \"The Paradox of Choice,\" how does an abundance of options affect consumers?</strong>",
        options: [
            "It makes them feel more liberated and happier with their purchases.",
            "It encourages them to buy multiple varieties of the same product.",
            "It leads to psychological exhaustion and decreased satisfaction.",
            "It helps them make faster and more rational financial decisions."
        ],
        correctAnswer: 2,
        hint: "הקטע אומר שיותר מדי אפשרויות מובילות ל-'decision fatigue' (עייפות החלטה) ו-'less satisfaction' (פחות סיפוק).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "בחברות צריכה מודרניות, אנו לרוב משווים חופש עם שפע של בחירה. באופן פרדוקסלי, מחקר פסיכולוגי שטבע את המונח 'פרדוקס הבחירה' מציע אחרת. כאשר מוצגים בפניהם עשרות סוגים של מוצר אחד, צרכנים חווים לעיתים קרובות 'עייפות החלטה'. מערך עצום זה של אפשרויות מוביל לחרדה, היסוס, ובסופו של דבר, פחות סיפוק מהרכישה הסופית בהשוואה לאלו שבוחרים מתוך מבחר מוגבל."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            תשובה 3 מנסחת מחדש (Paraphrasing) את הטקסט. "decision fatigue" מתורגם כ-"psychological exhaustion", ו-"less satisfaction" כ-"decreased satisfaction".
        </div>`,
        final_answer: "It leads to psychological exhaustion and decreased satisfaction."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Social media algorithms are designed to maximize user engagement by displaying content that aligns with users' pre-existing beliefs. This mechanism inadvertently traps individuals in \"echo chambers,\" isolating them from dissenting perspectives. Consequently, confirmation bias is amplified, and societal polarization deepens, as people are rarely challenged to critically evaluate their own worldviews.</div><strong>What is a negative consequence of social media algorithms mentioned in the text?</strong>",
        options: [
            "They reduce the amount of time users spend on their platforms.",
            "They force users to constantly evaluate opposing political views.",
            "They reinforce existing biases and contribute to social division.",
            "They fail to display content that aligns with users' beliefs."
        ],
        correctAnswer: 2,
        hint: "הטקסט מציין שתי תוצאות שליליות: confirmation bias is amplified (הטיית אישור מוגברת) ו- societal polarization deepens (קיטוב חברתי מעמיק). איזה מהמשפטים מקביל לזה?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "אלגוריתמים של רשתות חברתיות נועדו למקסם את מעורבות המשתמשים על ידי הצגת תוכן התואם את אמונותיהם הקיימות של המשתמשים. מנגנון זה לוכד בטעות אנשים ב'תיבות תהודה' (echo chambers), ומבודד אותם מנקודות מבט מנוגדות. כתוצאה מכך, הטיית האישור מתעצמת, והקיטוב החברתי מעמיק, שכן אנשים נדרשים לעיתים רחוקות להעריך באופן ביקורתי את תפיסות עולמם."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            התשובה הנכונה משתמשת במילים נרדפות אקדמיות: "reinforce existing biases" (מחזקים הטיות קיימות) ו-"contribute to social division" (תורמים לפילוג/קיטוב חברתי).
        </div>`,
        final_answer: "They reinforce existing biases and contribute to social division."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>The hypothesis of linguistic relativity, often referred to as the Sapir-Whorf hypothesis, posits that the structure of a language profoundly influences its speakers' worldview and cognition. For instance, languages that lack distinct words for certain colors often correlate with their speakers' inability to differentiate between those hues visually. Thus, language is not merely a tool for expressing thought, but a framework that actively shapes it.</div><strong>What does the Sapir-Whorf hypothesis claim about language?</strong>",
        options: [
            "It is merely a tool used to express thoughts that already exist.",
            "It is determined solely by the visual abilities of its speakers.",
            "It acts as a structure that molds and limits human thought processes.",
            "It prevents people from learning words for new colors."
        ],
        correctAnswer: 2,
        hint: "המשפט האחרון בקטע מסכם זאת היטב: השפה אינה רק כלי הבעה, אלא מסגרת המעצבת (shapes) את המחשבה באופן פעיל.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "ההשערה של יחסיות לשונית... מניחה שמבנה השפה משפיע עמוקות על תפיסת עולמם והקוגניציה של דובריה. לדוגמה, שפות שחסרות מילים מובחנות לצבעים מסוימים נמצאות לרוב במתאם עם חוסר היכולת של דובריהן להבדיל בין אותם גוונים באופן חזותי. לכן, שפה אינה רק כלי להבעת מחשבה, אלא מסגרת (framework) שמעצבת אותה (shapes it) באופן פעיל."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            תשובה 1 מציגה את ההפך ממה שההשערה טוענת. תשובה 3 אומרת בדיוק את משפט הסיום במילים נרדפות: framework = structure, shapes = molds.
        </div>`,
        final_answer: "It acts as a structure that molds and limits human thought processes."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Proponents of Universal Basic Income (UBI) argue that providing every citizen with a regular, unconditional sum of money is essential in an era of rapid automation. They maintain that UBI would eradicate extreme poverty and provide a financial safety net, allowing individuals to pursue education or entrepreneurial ventures without the crippling fear of destitution. Critics, conversely, warn of severe inflation and a decline in labor market participation.</div><strong>Why do supporters believe UBI is necessary today?</strong>",
        options: [
            "To combat severe inflation in the current economy.",
            "To encourage a decline in labor market participation.",
            "Because robots are becoming self-aware and taking over the government.",
            "To protect people from poverty caused by the automation of jobs."
        ],
        correctAnswer: 3,
        hint: "השאלה מתמקדת ב'תומכים' (Proponents). מדוע לדעתם זה הכרחי? בגלל האוטומציה המהירה (rapid automation) והצורך למגר עוני אקסטרים.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "תומכי הכנסה בסיסית אוניברסלית (UBI) טוענים שמתן סכום כסף קבוע וללא תנאי לכל אזרח הוא חיוני בעידן של אוטומציה מהירה. הם גורסים ש-UBI ימגר עוני קיצוני ויספק רשת ביטחון פיננסית... מבקרים, לעומת זאת, מזהירים מפני אינפלציה חמורה וירידה בהשתתפות בשוק העבודה."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            הקטע מציג שתי דעות. השאלה שואלת על עמדת ה'תומכים' (Supporters / Proponents). תשובות 1 ו-2 מייצגות את טיעוני ה*מבקרים* (Critics), ולכן הן מסיחים שנועדו לבלבל. תשובה 3 נכונה כי היא מחברת בין האוטומציה לביטחון מהעוני.
        </div>`,
        final_answer: "To protect people from poverty caused by the automation of jobs."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>Historically, urban planning prioritized vehicular traffic, resulting in cities characterized by sprawling highways and limited pedestrian infrastructure. Contemporary urbanists, however, are advocating for the \"15-minute city\" paradigm. This model reimagines urban spaces so that essential amenities—such as groceries, healthcare, and schools—are accessible within a short walk or cycle from any residence, thereby reducing carbon emissions and fostering local communities.</div><strong>What is the primary objective of the \"15-minute city\" paradigm?</strong>",
        options: [
            "To build more sprawling highways for faster vehicular traffic.",
            "To ensure that all essential services are within close proximity to residents' homes.",
            "To increase carbon emissions by limiting the use of public transportation.",
            "To force citizens to move out of the city and into rural areas."
        ],
        correctAnswer: 1,
        hint: "המודל מדמיין מחדש חללים עירוניים כך ששירותים חיוניים יהיו נגישים בהליכה או רכיבה קצרה מכל בית (accessible within a short walk).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "מבחינה היסטורית, תכנון עירוני תעדף תנועת כלי רכב, מה שהוביל לערים המאופיינות בכבישים מהירים משתרעים ותשתית הולכי רגל מוגבלת. אורבניסטים עכשוויים, לעומת זאת, דוגלים בפרדיגמת 'עיר ה-15 דקות'. מודל זה מדמיין מחדש חללים עירוניים כך ששירותים חיוניים – כגון מצרכים, שירותי בריאות ובתי ספר – יהיו נגישים בתוך הליכה קצרה או רכיבה מכל מגורים..."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח השאלה:</strong><br>
            התשובה הנכונה ממירה את הניסוח שבקטע ("accessible within a short walk") למילים אקדמיות נרדפות: "within close proximity" (בקרבה קרובה).
        </div>`,
        final_answer: "To ensure that all essential services are within close proximity to residents' homes."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'>The discovery of penicillin by Alexander Fleming in 1928 was entirely serendipitous. He returned from a vacation to find that a mold had contaminated one of his Petri dishes, creating a bacteria-free zone around it. This accidental observation revolutionized modern medicine, turning previously fatal bacterial infections into easily treatable conditions and undeniably altering the course of human history.</div><strong>Which word best replaces the word \"serendipitous\" based on the context of the paragraph?</strong>",
        options: [
            "Accidental",
            "Premeditated",
            "Disastrous",
            "Contaminated"
        ],
        correctAnswer: 0,
        hint: "שימו לב להקשר: פלמינג חזר מחופשה ומצא עובש בצלחת פטרי. המשפט הבא מדבר על 'accidental observation' (תצפית מקרית).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום הקטע:</strong><br>
            "גילוי הפניצילין על ידי אלכסנדר פלמינג ב-1928 היה לחלוטין סרנדיפיטי (אקראי/במזל). הוא חזר מחופשה ומצא שעובש זיהם את אחת מצלחות הפטרי שלו... התצפית המקרית הזו חוללה מהפכה ברפואה המודרנית..."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>אסטרטגיית קריאה מתוך הקשר:</strong><br>
            במודול G לעיתים נשאלים על מילה קשה (serendipitous). הדרך לפתור היא לחפש מילים דומות בהמשך הפסקה. המילה "accidental" מופיעה במשפט הבא כתיאור של אותו אירוע ממש. לכן שתי המילים נרדפות.
        </div>`,
        final_answer: "Accidental (מקרי / אקראי)"
    },


    // ========================================================================
    // תת נושא 6: Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)
    // שאלות המלמדות את התלמיד *איך* לגשת לטקסט
    // ========================================================================

    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'><strong>Reading Strategy: Skimming for the Main Idea</strong><br>When you want to quickly understand the main idea of a long paragraph, you should usually read the <strong>first</strong> and <strong>last</strong> sentences carefully. The first sentence often introduces the topic (Topic Sentence), and the last sentence summarizes the point.</div><strong>What is the most effective way to \"skim\" a paragraph for its main idea?</strong>",
        options: [
            "Read every single word slowly from beginning to end with a dictionary.",
            "Focus only on the verbs and ignore all the nouns.",
            "Read the first and last sentences of the paragraph carefully.",
            "Look only at the pictures next to the text."
        ],
        correctAnswer: 2,
        hint: "האסטרטגיה של 'רפרוף' (Skimming) נועדה לחסוך זמן במבחן. היא מתמקדת במשפט הפתיחה ומשפט הסיום.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>אסטרטגיית Skimming (רפרוף):</strong><br>
            במבחני בגרות, הזמן קצר. אם אתם נשאלים "What is the main idea of paragraph 2?", אל תקראו את כל הפסקה מחדש. קראו רק את המשפט הראשון (שבדרך כלל מציג את הטענה) ואת המשפט האחרון (שמסכם אותה). טכניקה זו חוסכת זמן יקר.
        </div>`,
        final_answer: "Read the first and last sentences of the paragraph carefully."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'><strong>Reading Strategy: Scanning for Specific Information</strong><br>Scanning is reading quickly to find a specific fact, like a name, a date, or a number. If a question asks, \"In what year did the Apollo 11 mission land on the moon?\", you do not read the whole text. Instead, your eyes should quickly move over the text looking only for a <strong>four-digit number</strong>.</div><strong>When using the \"Scanning\" strategy to find a person's profession, what visual clue should your eyes look for?</strong>",
        options: [
            "Four-digit numbers.",
            "Capital letters indicating a name, followed by words like 'Dr.', 'Professor', or 'worked as'.",
            "Quotation marks showing dialogue.",
            "Question marks at the end of sentences."
        ],
        correctAnswer: 1,
        hint: "סריקה (Scanning) פועלת כמו פונקציית 'חיפוש' (Ctrl+F). אם מחפשים מקצוע של אדם, קודם כל נחפש את שמו (אותיות גדולות) ואז מילים שמתארות עבודה.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>אסטרטגיית Scanning (סריקה):</strong><br>
            כאשר השאלה מבקשת פריט מידע קטן (למשל: תאריך, שם, סכום כסף), העיניים שלנו צריכות "לרחף" מעל הטקסט ולחפש רמזים ויזואליים: מספרים לתאריכים, ואותיות רישיות (Capital Letters) לשמות של אנשים ומקומות. במקרה של חיפוש מקצוע של אדם, נחפש את שמו באות גדולה, ולידו את המילים המרמזות על עבודתו.
        </div>`,
        final_answer: "Capital letters indicating a name, followed by words like 'Dr.' or 'worked as'."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'><strong>Reading Strategy: Guessing Meaning from Context (Contrast Clues)</strong><br>Sometimes, writers use contrast words like <em>however, although, but, unlike</em> to show opposite meanings. Example: \"Although her brother was extremely <strong>garrulous</strong> and talked all the time, Jane was very quiet.\"</div><strong>Based on the contrast clue in the example, what does \"garrulous\" mean?</strong>",
        options: [
            "Very quiet and shy.",
            "Very talkative.",
            "Angry and violent.",
            "Tall and athletic."
        ],
        correctAnswer: 1,
        hint: "המילה 'Although' (למרות) יוצרת ניגוד. אם ג'יין הייתה 'מאוד שקטה' (very quiet), האח שלה (שהיה garrulous) חייב להיות ההיפך משקטה.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>אסטרטגיית ניחוש מהקשר - מילות ניגוד:</strong><br>
            כאשר נתקלים במילה לא מוכרת (כמו Garrulous), אל תכנסו לפאניקה. חפשו את מילות הקישור. המילה "Although" מספרת לנו שיש כאן הפכים. מכיוון שחצי אחד של המשפט אומר שג'יין "שקטה", החצי השני (Garrulous) חייב להיות שווה ערך להפך משקט - כלומר, פטפטן/מדבר הרבה. בנוסף, הסופר השאיר רמז נוסף: "talked all the time".
        </div>`,
        final_answer: "Very talkative (פטפטן / מדבר הרבה)."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'><strong>Reading Strategy: Pronoun Reference (What does \"It\" refer to?)</strong><br>To find what a pronoun (it, they, them, this) refers to, always look <strong>backward</strong> to the previous sentence or the beginning of the same sentence. It usually replaces a noun that matches in gender and number.<br><em>Example:</em> The company introduced a new smart phone. It features a better battery.</div><strong>In the example, what does the pronoun \"It\" replace?</strong>",
        options: [
            "The company",
            "A new smart phone",
            "A better battery",
            "The author"
        ],
        correctAnswer: 1,
        hint: "למי יש 'סוללה טובה יותר'? לחברה (The company) או לטלפון החכם החדש (a new smart phone)?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>אסטרטגיית אזכור כינויי גוף (Pronouns):</strong><br>
            בשאלות Reference, הכלל הראשון הוא "תמיד להסתכל אחורה". המילה "It" (זה/הוא) היא ביחיד, ולכן היא חייבת להחליף שם עצם ביחיד. במשפט הקודם יש שני שמות עצם ביחיד: Company ו-Phone. לפי ההיגיון (למי יש סוללה?), ההתייחסות היא בבירור לסמארטפון החדש.
        </div>`,
        final_answer: "A new smart phone."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'><strong>Reading Strategy: Identifying the Author's Tone</strong><br>The tone of a text is the author's attitude toward the subject (e.g., objective, sarcastic, enthusiastic, critical). You can identify the tone by looking at the adjectives the author uses.<br><em>Example text:</em> \"Oh, brilliant! Yet another useless app that promises to change our lives but only drains our batteries and steals our data.\"</div><strong>What is the author's tone in the example text?</strong>",
        options: [
            "Enthusiastic and supportive",
            "Objective and neutral",
            "Sarcastic and critical",
            "Scientific and formal"
        ],
        correctAnswer: 2,
        hint: "המילה 'Oh, brilliant!' (הו, גאוני!) נאמרת כאן בחוסר כנות, משום שמיד אחריה נאמר שהאפליקציה 'חסרת תועלת' (useless). זהו סגנון קלאסי של סרקזם.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>אסטרטגיית זיהוי הנימה (Tone):</strong><br>
            שאלות של "נימת המחבר" דורשות לקרוא בין השורות ולשים לב לשמות תואר קיצוניים. המילים "useless" (חסר תועלת) ו-"steals" (גונב) מראות על ביקורת שלילית חריפה (Critical). השימוש במילה "Brilliant!" (גאוני) בהקשר שלילי הוא הדוגמה המובהקת ביותר לסרקזם (ציניות עוקצנית). טקסט אובייקטיבי לא היה משתמש במילים נגועות ברגש.
        </div>`,
        final_answer: "Sarcastic and critical (סרקסטי וביקורתי)."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'><strong>Reading Strategy: Cause and Effect Connections</strong><br>Recognizing cause and effect is crucial for reading comprehension. Words like <em>because, since, due to</em> introduce the <strong>Cause</strong>. Words like <em>so, therefore, as a result, consequently</em> introduce the <strong>Effect</strong> (result).<br><em>Example:</em> Due to the heavy snowstorm, all flights were cancelled. Therefore, hundreds of passengers slept in the airport.</div><strong>In the example, what is the INITIAL CAUSE of the entire situation?</strong>",
        options: [
            "Flights were cancelled.",
            "Passengers slept in the airport.",
            "The heavy snowstorm.",
            "The airport was closed."
        ],
        correctAnswer: 2,
        hint: "הסיבה הראשונית תמיד מגיעה אחרי מילים כמו 'Due to' (בגלל / עקב). מה התחיל את כל השרשרת?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>אסטרטגיית זיהוי סיבה ותוצאה:</strong><br>
            הביטוי "Due to" פותח את הסיבה המקורית לאירוע (הסופת שלגים). ביטול הטיסות הוא ה'תוצאה' של הסופה, והשינה בשדה התעופה היא ה'תוצאה' של ביטול הטיסות (המוצגת על ידי המילה Therefore). השורש להכל הוא פגעי מזג האוויר.
        </div>`,
        final_answer: "The heavy snowstorm (סופת השלגים הכבדה)."
    },
    {
        subject: "אנגלית",
        topic: "הבנת הנקרא",
        subTopic: "Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)",
        question: "<div dir='ltr' style='text-align:left; background:#f1f5f9; padding:15px; border-radius:8px; margin-bottom:10px; font-family:sans-serif; border-left:4px solid var(--primary-blue);'><strong>Reading Strategy: Reading the Question First</strong><br>Many successful test-takers read the comprehension questions <em>before</em> they read the text itself. This strategy primes your brain to look for specific answers while you read, turning passive reading into active reading. If a question asks about \"Dr. Smith's opinion,\" you know to slow down and pay close attention when his name appears.</div><strong>What is the main advantage of reading the questions before reading the text?</strong>",
        options: [
            "It saves time because you don't have to read the text at all.",
            "It turns passive reading into active reading, helping you spot answers easily.",
            "It guarantees that you will get a perfect score on the exam.",
            "It helps you learn the grammar rules of the English language."
        ],
        correctAnswer: 1,
        hint: "הטקסט אומר מפורשות: 'This strategy primes your brain... turning passive reading into active reading' (זה הופך קריאה פסיבית לאקטיבית).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>אסטרטגיית 'קריאת השאלות תחילה':</strong><br>
            זוהי העצה המעשית החשובה ביותר לתלמידים בבגרויות (ובפסיכומטרי). קריאת השאלות קודם לכן לא 'פוטרת' אתכם מקריאת הטקסט (תשובה 1 שגויה), אלא ממקדת את הקשב שלכם ('Active Reading'). כך, כשתגיעו לפסקה הרלוונטית, המוח שלכם "ידלק" ותדעו שיש פה פתרון לשאלה שראיתם קודם.
        </div>`,
        final_answer: "It turns passive reading into active reading, helping you spot answers easily."
    }
];