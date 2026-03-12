// ========================================================================
// שאלון 35372 | נושא: חקירת פונקציה
// פעימה 1: 20 שאלות (תחומי עליה וירידה + מקסימום ומינימום)
// ========================================================================

const questionsDB = [

    // ---------------------------------------------------------
    // תת נושא 1: תחומי עליה וירידה (שאלות 1-10)
    // ---------------------------------------------------------

    // שאלה 1
    {
        topic: "bagrut_35372",
        subTopic: "תחומי עליה וירידה",
        question_text: `<strong>זיהוי תחום עלייה מתוך גרף (פרבולה מחייכת):</strong><br>
        לפניכם גרף של פונקציה ריבועית (פרבולה). קודקוד הפרבולה מסומן בנקודה שבה <strong>x = 2</strong>.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 150" width="100%" height="150" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="20" y1="120" x2="180" y2="120" stroke="#cbd5e1" stroke-width="2"/> <line x1="100" y1="20" x2="100" y2="140" stroke="#cbd5e1" stroke-width="2"/> <path d="M 50,40 Q 75,100 100,100" fill="none" stroke="#94a3b8" stroke-width="3"/>
            <path d="M 100,100 Q 125,100 150,40" fill="none" stroke="#22c55e" stroke-width="4"/>
            <polygon points="150,40 142,48 152,50" fill="#22c55e"/> <circle cx="100" cy="100" r="4" fill="#0f172a"/>
            <line x1="100" y1="100" x2="100" y2="120" stroke="#0f172a" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="100" y="135" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">2</text>
        </svg>
        </div>
        על פי הגרף, מהו <strong>תחום העלייה</strong> של הפונקציה?`,
        options: [
            "x > 2",
            "x < 2",
            "x = 2",
            "תמיד עולה"
        ],
        correctAnswer: 0,
        hint: "קראו את הגרף משמאל לימין. בצד השמאלי הגרף יורד מטה לעבר הקודקוד. מהקודקוד (x=2) והלאה ימינה, הגרף מטפס כלפי מעלה. צד ימין אומר ש-x גדול מהמספר.",
        solution_steps: [
            { 
                verbal_explanation: "גרף קוראים תמיד משמאל לימין, כמו כיוון ההתקדמות של ציר האיקס.", 
                math_expression: "<div dir='ltr'>&rarr;</div>" 
            },
            { 
                verbal_explanation: "בנקודת הקודקוד, הגרף משנה את כיוונו. שיעור האיקס של הקודקוד נתון לנו.", 
                math_expression: "<div dir='ltr'>x = 2</div>" 
            },
            { 
                verbal_explanation: "החל מנקודה זו ימינה, הפונקציה מתחילה לטפס ולעלות כלפי מעלה (הקו הירוק בשרטוט).", 
                math_expression: "<div dir='ltr'>&nearr;</div>" 
            },
            { 
                verbal_explanation: "תחום שנמצא מימין לנקודה מסוימת, מתואר מתמטית בעזרת הסימן 'גדול מ'. לכן הפונקציה עולה עבור איקסים שגדולים מ-2.", 
                math_expression: "<div dir='ltr'>x > 2</div>" 
            }
        ],
        final_answer: "x > 2"
    },

    // שאלה 2
    {
        topic: "bagrut_35372",
        subTopic: "תחומי עליה וירידה",
        question_text: `<strong>זיהוי תחום ירידה מתוך גרף (פרבולה בוכה):</strong><br>
        לפניכם גרף של פונקציה. קודקוד הפרבולה נמצא בנקודה שבה <strong>x = -1</strong>.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 150" width="100%" height="150" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="20" y1="120" x2="180" y2="120" stroke="#cbd5e1" stroke-width="2"/> 
            <line x1="140" y1="20" x2="140" y2="140" stroke="#cbd5e1" stroke-width="2"/> 
            <path d="M 40,120 Q 65,40 90,40" fill="none" stroke="#94a3b8" stroke-width="3"/>
            <path d="M 90,40 Q 115,40 140,120" fill="none" stroke="#ef4444" stroke-width="4"/>
            <polygon points="140,120 132,112 142,110" fill="#ef4444"/> <circle cx="90" cy="40" r="4" fill="#0f172a"/>
            <line x1="90" y1="40" x2="90" y2="120" stroke="#0f172a" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="90" y="135" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">-1</text>
        </svg>
        </div>
        על פי הגרף, מהו <strong>תחום הירידה</strong> של הפונקציה?`,
        options: [
            "x > -1",
            "x < -1",
            "x = -1",
            "תמיד יורדת"
        ],
        correctAnswer: 0,
        hint: "בפרבולה מסוג 'הר', הפונקציה מטפסת במעלה ההר עד לפסגה, ואחרי הפסגה היא מתחילה לרדת. מכיוון שהפסגה היא במינוס 1, הירידה מתרחשת במספרים שגדולים ממינוס 1 (הצד הימני).",
        solution_steps: [
            { 
                verbal_explanation: "הגרף עולה עד לנקודת המקסימום (הפסגה), ומשם משנה כיוון ומתחיל לרדת.", 
                math_expression: "<div dir='ltr'>&searr;</div>" 
            },
            { 
                verbal_explanation: "שיעור האיקס של הפסגה (הקודקוד) מסומן בגרף ונתון בשאלה כמינוס אחת.", 
                math_expression: "<div dir='ltr'>x = -1</div>" 
            },
            { 
                verbal_explanation: "הירידה (הקו האדום) מתרחשת החל מנקודה זו והלאה לכיוון ימין של הציר.", 
                math_expression: "<div dir='ltr'>&rarr;</div>" 
            },
            { 
                verbal_explanation: "הצד הימני מיוצג במתמטיקה על ידי כל מספרי האיקס שגדולים מנקודת המעבר.", 
                math_expression: "<div dir='ltr'>x > -1</div>" 
            }
        ],
        final_answer: "x > -1"
    },

    // שאלה 3
    {
        topic: "bagrut_35372",
        subTopic: "תחומי עליה וירידה",
        question_text: `<strong>חישוב נגזרת של פונקציה ריבועית (פולינום):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">f(x) = 3x<sup>2</sup> - 12x + 5</div>
        מהי ה<strong>נגזרת</strong> של פונקציה זו, כלומר מהו (f'(x?`,
        options: [
            "f'(x) = 6x - 12",
            "f'(x) = 3x - 12",
            "f'(x) = 6x - 12x",
            "f'(x) = 2x - 12"
        ],
        correctAnswer: 0,
        hint: "כדי לגזור פונקציה: 1) באיבר עם איקס בריבוע, מכפילים את החזקה (2) במקדם שמופיע לפני האיקס, ומורידים את החזקה ל-1. 2) באיבר עם איקס רגיל, האיקס פשוט נעלם ונשאר רק המספר שלפניו. 3) מספרים חופשיים (ללא איקס) נמחקים והופכים לאפס.",
        solution_steps: [
            { 
                verbal_explanation: "נגזור את הפונקציה איבר אחרי איבר. נתחיל באיבר הראשון הכולל איקס בריבוע. נכפיל את המקדם שלוש בחזקה שתיים, והאיקס הופך לאיקס רגיל.", 
                math_expression: "<div dir='ltr'>3 &times; 2x = 6x</div>" 
            },
            { 
                verbal_explanation: "נעבור לאיבר השני. הנגזרת של איקס רגיל (ללא חזקה נראית לעין) היא פשוט השמטת האיקס והשארת המקדם המספרי שלו בלבד.", 
                math_expression: "<div dir='ltr'>-12x &nbsp;&#10132;&nbsp; -12</div>" 
            },
            { 
                verbal_explanation: "נעבור לאיבר השלישי, שהוא מספר חופשי. הנגזרת של מספר קבוע נטול איקס היא תמיד אפס.", 
                math_expression: "<div dir='ltr'>+ 5 &nbsp;&#10132;&nbsp; 0</div>" 
            },
            { 
                verbal_explanation: "נחבר יחד את כל הרכיבים שגזרנו כדי לקבל את משוואת הנגזרת השלמה.", 
                math_expression: "<div dir='ltr'>f'(x) = 6x - 12</div>" 
            }
        ],
        final_answer: "f'(x) = 6x - 12"
    },

    // שאלה 4
    {
        topic: "bagrut_35372",
        subTopic: "תחומי עליה וירידה",
        question_text: `<strong>מציאת הנקודה שבה הנגזרת מתאפסת (נקודת קיצון):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">f(x) = -x<sup>2</sup> + 8x - 3</div>
        באיזה ערך של x <strong>הנגזרת שווה לאפס</strong> (כלומר f'(x) = 0)?`,
        options: [
            "x = 4",
            "x = -4",
            "x = 8",
            "x = 0"
        ],
        correctAnswer: 0,
        hint: "שלב ראשון: גזרו את הפונקציה (הנגזרת של מינוס איקס בריבוע היא מינוס שני איקס). שלב שני: השוו את הנגזרת שקיבלתם לאפס. פתרו את המשוואה הפשוטה שתתקבל כדי למצוא את איקס.",
        solution_steps: [
            { 
                verbal_explanation: "כדי לדעת מתי הנגזרת מתאפסת, עלינו קודם כל למצוא את הנגזרת עצמה. נגזור את הפונקציה.", 
                math_expression: "<div dir='ltr'>f'(x) = -2x + 8</div>" 
            },
            { 
                verbal_explanation: "כעת, נשווה את פונקציית הנגזרת לאפס, כפי שהשאלה דורשת.", 
                math_expression: "<div dir='ltr'>-2x + 8 = 0</div>" 
            },
            { 
                verbal_explanation: "נעביר את האיבר עם האיקס לאגף השני כדי שהסימן שלו יהפוך לחיובי ויהיה קל יותר לפתור.", 
                math_expression: "<div dir='ltr'>8 = 2x</div>" 
            },
            { 
                verbal_explanation: "נחלק את המשוואה בשתיים כדי לבודד את האיקס.", 
                math_expression: "<div dir='ltr'>x = 8 / 2</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק. זוהי הנקודה שבה שיפוע המשיק הוא אפס (נקודת הקיצון).", 
                math_expression: "<div dir='ltr'>x = 4</div>" 
            }
        ],
        final_answer: "x = 4"
    },

    // שאלה 5
    {
        topic: "bagrut_35372",
        subTopic: "תחומי עליה וירידה",
        question_text: `<strong>הקשר בין סימן הנגזרת למגמת הפונקציה:</strong><br>
        הנגזרת של פונקציה מסוימת היא:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">f'(x) = 2x - 10</div>
        מציבים בנגזרת את הנקודה שבה <strong>x = 7</strong>.<br>
        מה קורה לפונקציה המקורית בנקודה זו?`,
        options: [
            "הפונקציה עולה (כי הנגזרת חיובית)",
            "הפונקציה יורדת (כי הנגזרת שלילית)",
            "הפונקציה בנקודת מינימום או מקסימום (כי הנגזרת אפס)",
            "לא ניתן לדעת ללא הפונקציה המקורית"
        ],
        correctAnswer: 0,
        hint: "הציבו את המספר 7 במקום האיקס בתוך הנגזרת (2 כפול 7 פחות 10). האם התוצאה שקיבלתם גדולה מאפס או קטנה מאפס? תוצאה חיובית אומרת שהשיפוע חיובי, כלומר הפונקציה עולה.",
        solution_steps: [
            { 
                verbal_explanation: "כדי לדעת את מגמת הפונקציה, עלינו לבדוק את ערך הנגזרת בנקודה המבוקשת. נציב שבע בנגזרת.", 
                math_expression: "<div dir='ltr'>f'(7) = 2 &times; (7) - 10</div>" 
            },
            { 
                verbal_explanation: "נחשב את הכפל בתחילת התרגיל.", 
                math_expression: "<div dir='ltr'>f'(7) = 14 - 10</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החיסור ונמצא את ערך הנגזרת (שהוא למעשה שיפוע המשיק).", 
                math_expression: "<div dir='ltr'>f'(7) = 4</div>" 
            },
            { 
                verbal_explanation: "התוצאה (4) היא מספר חיובי, הגדול מאפס.", 
                math_expression: "<div dir='ltr'>4 > 0</div>" 
            },
            { 
                verbal_explanation: "כלל יסוד בחקירת פונקציה אומר: כאשר הנגזרת חיובית, המשיק עולה, ולכן הפונקציה המקורית עולה.", 
                math_expression: "<div dir='ltr'>+ &nbsp;&#10132;&nbsp; עליה</div>" 
            }
        ],
        final_answer: "הפונקציה עולה (כי הנגזרת חיובית)"
    },

    // שאלה 6
    {
        topic: "bagrut_35372",
        subTopic: "תחומי עליה וירידה",
        question_text: `<strong>מציאת תחום עליה מתוך משוואה (ללא שרטוט):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">f(x) = x<sup>2</sup> - 8x + 3</div>
        מהו <strong>תחום העלייה</strong> של הפונקציה?`,
        options: [
            "x > 4",
            "x < 4",
            "x > 8",
            "x < -4"
        ],
        correctAnswer: 0,
        hint: "1. גזרו את הפונקציה והשוו לאפס כדי למצוא את הקודקוד (נקודת המעבר).<br>2. שאלו את עצמכם: האם זו פרבולה מחייכת או בוכה? מחייכת עולה מצד ימין של הקודקוד (גדול מ...).",
        solution_steps: [
            { 
                verbal_explanation: "נמצא את הנקודה שמפרידה בין עליה לירידה (הקודקוד). לשם כך נגזור את הפונקציה.", 
                math_expression: "<div dir='ltr'>f'(x) = 2x - 8</div>" 
            },
            { 
                verbal_explanation: "נשווה את הנגזרת לאפס כדי למצוא את מיקום האיקס של הנקודה.", 
                math_expression: "<div dir='ltr'>2x - 8 = 0</div>" 
            },
            { 
                verbal_explanation: "נעביר את המספר החופשי ונחלק בשתיים.", 
                math_expression: "<div dir='ltr'>2x = 8 &nbsp;&#10132;&nbsp; x = 4</div>" 
            },
            { 
                verbal_explanation: "נקודת המעבר היא בארבע. נבחן את סוג הפונקציה. המקדם של איקס בריבוע חיובי, לכן זו פרבולה 'מחייכת' (קערה).", 
                math_expression: "<div dir='ltr'>a = 1 > 0 &nbsp;&#10132;&nbsp; &cup;</div>" 
            },
            { 
                verbal_explanation: "קערה יורדת שמאלה מהמרכז, ועולה ימינה מהמרכז. ימינה משמעותו שאיקס גדול מארבע.", 
                math_expression: "<div dir='ltr'>x > 4</div>" 
            }
        ],
        final_answer: "x > 4"
    },

    // שאלה 7
    {
        topic: "bagrut_35372",
        subTopic: "תחומי עליה וירידה",
        question_text: `<strong>מציאת תחום ירידה מתוך משוואה (פרבולה בוכה):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">f(x) = -x<sup>2</sup> + 10x - 1</div>
        מהו <strong>תחום הירידה</strong> של פונקציה זו?`,
        options: [
            "x > 5",
            "x < 5",
            "x > -5",
            "x < 10"
        ],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה: מינוס שתי איקס פלוס עשר. השוו לאפס וגלו שהקודקוד ב-x=5. זו פרבולה בוכה (צורת גבעה). גבעה מתחילה לרדת אחרי הפסגה (כשאיקס גדול מ...).",
        solution_steps: [
            { 
                verbal_explanation: "שלב ראשון: גזירת הפונקציה כדי למצוא את שיפוע המשיק בכל נקודה.", 
                math_expression: "<div dir='ltr'>f'(x) = -2x + 10</div>" 
            },
            { 
                verbal_explanation: "שלב שני: השוואת הנגזרת לאפס למציאת נקודת הקיצון.", 
                math_expression: "<div dir='ltr'>-2x + 10 = 0</div>" 
            },
            { 
                verbal_explanation: "שלב שלישי: העברת אגפים וחלוקה, כדי לחלץ את ערכו של האיקס.", 
                math_expression: "<div dir='ltr'>10 = 2x &nbsp;&#10132;&nbsp; x = 5</div>" 
            },
            { 
                verbal_explanation: "שלב רביעי: בחינת סוג הגרף. המקדם של איקס בריבוע הוא שלילי, לכן זו פרבולה 'בוכה' (גבעה).", 
                math_expression: "<div dir='ltr'>a = -1 < 0 &nbsp;&#10132;&nbsp; &cap;</div>" 
            },
            { 
                verbal_explanation: "שלב חמישי: גבעה עולה מצד שמאל עד לפסגה, ומשם יורדת ימינה. הירידה מתרחשת עבור איקסים שגדולים מהפסגה.", 
                math_expression: "<div dir='ltr'>x > 5</div>" 
            }
        ],
        final_answer: "x > 5"
    },

    // שאלה 8
    {
        topic: "bagrut_35372",
        subTopic: "תחומי עליה וירידה",
        question_text: `<strong>חישוב נגזרת של פונקציה ממעלה שלישית (כהכנה לקיצון):</strong><br>
        נתונה הפונקציה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">f(x) = x<sup>3</sup> - 6x<sup>2</sup> + 9x</div>
        מהי הנגזרת של הפונקציה?`,
        options: [
            "f'(x) = 3x<sup>2</sup> - 12x + 9",
            "f'(x) = x<sup>2</sup> - 12x + 9",
            "f'(x) = 3x<sup>3</sup> - 12x + 9x",
            "f'(x) = 2x<sup>2</sup> - 6x + 9"
        ],
        correctAnswer: 0,
        hint: "חוק הגזירה תקף לכל החזקות! באיבר הראשון: כופלים בחזקה (3) ומורידים אותה ל-2 (מקבלים 3 איקס בריבוע). באיבר השני: כופלים את ה-2 במינוס 6 ומורידים את החזקה ל-1. באיבר השלישי האיקס נעלם.",
        solution_steps: [
            { 
                verbal_explanation: "כדי לגזור חזקה שלישית, מורידים את ה-3 למטה כמקדם כפל, והחזקה קטנה באחת והופכת לריבוע.", 
                math_expression: "<div dir='ltr'>x<sup>3</sup> &nbsp;&#10132;&nbsp; 3x<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "האיבר השני הוא מינוס 6 איקס בריבוע. נכפיל את המקדם 6 בחזקה 2, והאיקס הופך לרגיל.", 
                math_expression: "<div dir='ltr'>-6x<sup>2</sup> &nbsp;&#10132;&nbsp; -12x</div>" 
            },
            { 
                verbal_explanation: "האיבר השלישי הוא תשעה איקס. בנגזרת, האיקס הפשוט מושמט ונשאר רק המקדם המספרי שלו.", 
                math_expression: "<div dir='ltr'>+ 9x &nbsp;&#10132;&nbsp; + 9</div>" 
            },
            { 
                verbal_explanation: "נחבר את שלושת החלקים ברצף לקבלת הפונקציה הנגזרת המלאה.", 
                math_expression: "<div dir='ltr'>f'(x) = 3x<sup>2</sup> - 12x + 9</div>" 
            }
        ],
        final_answer: "f'(x) = 3x<sup>2</sup> - 12x + 9"
    },

    // שאלה 9
    {
        topic: "bagrut_35372",
        subTopic: "תחומי עליה וירידה",
        question_text: `<strong>המשמעות הגיאומטרית של נגזרת שווה אפס:</strong><br>
        בנקודה שבה מתקיים <strong>f'(x) = 0</strong>, מהי המשמעות לגבי המשיק לגרף הפונקציה באותה נקודה?`,
        options: [
            "המשיק מקביל לציר ה-x (שיפועו אפס)",
            "המשיק מקביל לציר ה-y (אנכי)",
            "המשיק עולה בשיפוע חיובי",
            "לפונקציה אין משיק בנקודה זו"
        ],
        correctAnswer: 0,
        hint: "הנגזרת (f' של x) מייצגת תמיד את השיפוע של המשיק. אם הערך שלה הוא אפס, זה אומר שהשיפוע הוא אפס - כלומר זהו קו ישר מאוזן לחלוטין (כמו רצפה שטוחה).",
        solution_steps: [
            { 
                verbal_explanation: "הנגזרת של פונקציה מסמלת במתמטיקה את השיפוע של קו שמשיק לגרף בכל נקודה.", 
                math_expression: "<div dir='ltr'>f'(x) = m</div>" 
            },
            { 
                verbal_explanation: "כאשר הנתון אומר לנו שהנגזרת שווה לאפס, המשמעות היא שהשיפוע שווה לאפס.", 
                math_expression: "<div dir='ltr'>m = 0</div>" 
            },
            { 
                verbal_explanation: "קו ישר שבו השיפוע הוא אפס אינו עולה ואינו יורד. הוא לחלוטין מאוזן ואופקי.", 
                math_expression: "<div dir='ltr'>&mdash;</div>" 
            },
            { 
                verbal_explanation: "ישר אופקי כזה מקביל תמיד לציר ה-x שנמצא תחתיו.", 
                math_expression: "<div dir='ltr'>מקביל לציר איקס</div>" 
            }
        ],
        final_answer: "המשיק מקביל לציר ה-x (שיפועו אפס)"
    },

    // שאלה 10
    {
        topic: "bagrut_35372",
        subTopic: "תחומי עליה וירידה",
        question_text: `<strong>קריאת שיפוע משיק מתוך גרף יורד:</strong><br>
        לפניכם גרף היורד משמאל לימין. עליו מסורטט קו משיק בנקודה מסוימת.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 150" width="100%" height="150" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="20" y1="120" x2="180" y2="120" stroke="#cbd5e1" stroke-width="2"/> 
            <line x1="100" y1="20" x2="100" y2="140" stroke="#cbd5e1" stroke-width="2"/> 
            <path d="M 40,40 Q 100,100 160,110" fill="none" stroke="#0f172a" stroke-width="2"/>
            <line x1="50" y1="20" x2="130" y2="110" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
            <circle cx="90" cy="65" r="4" fill="#b91c1c"/>
            <text x="145" y="105" font-family="Arial" font-size="12" font-weight="bold" fill="#b91c1c">משיק</text>
        </svg>
        </div>
        מה ניתן לומר בוודאות על ערך הנגזרת <strong>f'(x)</strong> באותה נקודה?`,
        options: [
            "הנגזרת היא מספר שלילי (f'(x) < 0)",
            "הנגזרת היא מספר חיובי (f'(x) > 0)",
            "הנגזרת שווה לאפס (f'(x) = 0)",
            "אין נגזרת בנקודה זו"
        ],
        correctAnswer: 0,
        hint: "הנגזרת היא השיפוע של קו המשיק. אם המשיק נראה כמו 'מגלשה' שיורדת כלפי מטה משמאל לימין, סימן שהשיפוע שלו שלילי, ולכן גם הנגזרת שלילית.",
        solution_steps: [
            { 
                verbal_explanation: "בשרטוט ניתן לראות בבירור שהמשיק המקווקו נוטה כלפי מטה כאשר אנו נעים משמאל לימין.", 
                math_expression: "<div dir='ltr'>&searr;</div>" 
            },
            { 
                verbal_explanation: "משיק שיורד מסמן ששיפועו (m) קטן מאפס.", 
                math_expression: "<div dir='ltr'>m < 0</div>" 
            },
            { 
                verbal_explanation: "כפי שלמדנו, ערך הנגזרת בנקודה מסוימת שווה בדיוק לשיפוע המשיק באותה נקודה.", 
                math_expression: "<div dir='ltr'>f'(x) = m</div>" 
            },
            { 
                verbal_explanation: "לכן, מכיוון שהשיפוע שלילי, אנו מסיקים בוודאות שגם הנגזרת באותה נקודה היא מספר שלילי.", 
                math_expression: "<div dir='ltr'>f'(x) < 0</div>" 
            }
        ],
        final_answer: "הנגזרת היא מספר שלילי (f'(x) < 0)"
    },

    // ---------------------------------------------------------
    // תת נושא 2: מקסימום ומינימום (שאלות 11-20)
    // ---------------------------------------------------------

    // שאלה 11
    {
        topic: "bagrut_35372",
        subTopic: "מקסימום ומינימום",
        question_text: `<strong>זיהוי נקודות קיצון מתוך גרף (פולינום כללי):</strong><br>
        לפניכם שרטוט של פונקציה. הגרף עולה, מגיע לפסגה בנקודה A, יורד לשקע בנקודה B, ושוב עולה.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 150" width="100%" height="150" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="20" y1="100" x2="180" y2="100" stroke="#cbd5e1" stroke-width="2"/> 
            <line x1="100" y1="20" x2="100" y2="140" stroke="#cbd5e1" stroke-width="2"/> 
            <path d="M 40,140 Q 60,30 90,50 T 140,110 Q 160,110 170,40" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="78" cy="45" r="4" fill="#0f172a"/>
            <text x="78" y="35" font-family="Arial" font-size="12" font-weight="bold">A</text>
            <circle cx="140" cy="110" r="4" fill="#0f172a"/>
            <text x="140" y="125" font-family="Arial" font-size="12" font-weight="bold">B</text>
        </svg>
        </div>
        אילו סוגי נקודות קיצון הן A ו-B?`,
        options: [
            "A היא נקודת מקסימום, B היא נקודת מינימום",
            "A היא נקודת מינימום, B היא נקודת מקסימום",
            "שתיהן נקודות מקסימום",
            "שתיהן נקודות מינימום"
        ],
        correctAnswer: 0,
        hint: "נקודת מקסימום נראית כמו 'הר' או פסגה - סביבתה הקרובה נמוכה ממנה. נקודת מינימום נראית כמו 'עמק' או קערה - סביבתה הקרובה גבוהה ממנה.",
        solution_steps: [
            { 
                verbal_explanation: "נתבונן בנקודה A בשרטוט. לפני הנקודה הפונקציה עולה, ואחריה היא יורדת.", 
                math_expression: "<div dir='ltr'>&nearr; A &searr;</div>" 
            },
            { 
                verbal_explanation: "נקודה שמהווה שיא בגובה ביחס לסביבתה הקרובה (פסגה) מוגדרת כנקודת מקסימום מקומית.", 
                math_expression: "<div dir='ltr'>A = מקסימום</div>" 
            },
            { 
                verbal_explanation: "נתבונן בנקודה B בשרטוט. לפני הנקודה הפונקציה יורדת, ואחריה היא עולה חזרה.", 
                math_expression: "<div dir='ltr'>&searr; B &nearr;</div>" 
            },
            { 
                verbal_explanation: "נקודה שמהווה שקע הנמוך מסביבתו (עמק) מוגדרת כנקודת מינימום מקומית.", 
                math_expression: "<div dir='ltr'>B = מינימום</div>" 
            }
        ],
        final_answer: "A היא נקודת מקסימום, B היא נקודת מינימום"
    },

    // שאלה 12
    {
        topic: "bagrut_35372",
        subTopic: "מקסימום ומינימום",
        question_text: `<strong>מציאת נקודת הקיצון בעזרת הנגזרת (פונקציה חיובית):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">f(x) = x<sup>2</sup> - 4x + 1</div>
        מהם שיעורי נקודת הקיצון של הפונקציה, ומה סוגה?`,
        options: [
            "(2, -3), מינימום",
            "(2, 1), מקסימום",
            "(-2, 13), מינימום",
            "(4, 1), מינימום"
        ],
        correctAnswer: 0,
        hint: "1. גזרו והשוו לאפס כדי למצוא את x. <br>2. הציבו את ה-x חזרה בפונקציה המקורית כדי למצוא את ה-y. <br>3. פרבולה עם איקס בריבוע חיובי היא תמיד בעלת נקודת מינימום (מחייכת).",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא קיצון, נגזור את הפונקציה תחילה.", 
                math_expression: "<div dir='ltr'>f'(x) = 2x - 4</div>" 
            },
            { 
                verbal_explanation: "נשווה את הנגזרת לאפס, מכיוון שבנקודת קיצון השיפוע אופקי לחלוטין.", 
                math_expression: "<div dir='ltr'>2x - 4 = 0</div>" 
            },
            { 
                verbal_explanation: "נפתור את המשוואה ונגלה את שיעור האיקס של נקודת הקיצון.", 
                math_expression: "<div dir='ltr'>2x = 4 &nbsp;&#10132;&nbsp; x = 2</div>" 
            },
            { 
                verbal_explanation: "כעת, נציב איקס שווה שתיים בפונקציה המקורית (ולא בנגזרת!) כדי לגלות את גובהה.", 
                math_expression: "<div dir='ltr'>f(2) = (2)<sup>2</sup> - 4 &times; (2) + 1</div>" 
            },
            { 
                verbal_explanation: "נחשב את התרגיל (ארבע פחות שמונה ועוד אחת).", 
                math_expression: "<div dir='ltr'>f(2) = 4 - 8 + 1 = -3</div>" 
            },
            { 
                verbal_explanation: "קיבלנו את הנקודה (2,-3). מכיוון שהמקדם של איקס בריבוע בפונקציה המקורית הוא חיובי (פרבולה מחייכת), מדובר בנקודת מינימום נמוכה.", 
                math_expression: "<div dir='ltr'>a > 0 &nbsp;&#10132;&nbsp; מינימום</div>" 
            }
        ],
        final_answer: "(2, -3), מינימום"
    },

    // שאלה 13
    {
        topic: "bagrut_35372",
        subTopic: "מקסימום ומינימום",
        question_text: `<strong>מציאת נקודת הקיצון בעזרת נגזרת (פונקציה שלילית):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">f(x) = -x<sup>2</sup> + 6x</div>
        מהם שיעורי נקודת הקיצון של הפונקציה?`,
        options: [
            "(3, 9)",
            "(-3, -27)",
            "(6, 0)",
            "(0, 0)"
        ],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה: מינוס שתי איקס פלוס שש. השוו לאפס וחלצו את איקס. אל תשכחו להציב את האיקס בחזרה למשוואה המקורית (f של x) כדי למצוא את שיעור ה-y.",
        solution_steps: [
            { 
                verbal_explanation: "נגזור את הפונקציה. שימו לב לשמור על סימן המינוס.", 
                math_expression: "<div dir='ltr'>f'(x) = -2x + 6</div>" 
            },
            { 
                verbal_explanation: "נשווה לאפס כדי לאתר את המיקום האופקי של הקיצון (הקודקוד).", 
                math_expression: "<div dir='ltr'>-2x + 6 = 0</div>" 
            },
            { 
                verbal_explanation: "נעביר את שתי איקס לאגף הימני כדי לעבוד עם מספר חיובי, ונחלק בשתיים.", 
                math_expression: "<div dir='ltr'>6 = 2x &nbsp;&#10132;&nbsp; x = 3</div>" 
            },
            { 
                verbal_explanation: "נציב את התוצאה בפונקציה המקורית. המינוס שלפני האיקס אינו חלק מהחזקה, לכן יש להעלות את שלוש בריבוע ואז להוסיף מינוס.", 
                math_expression: "<div dir='ltr'>f(3) = -(3)<sup>2</sup> + 6 &times; (3)</div>" 
            },
            { 
                verbal_explanation: "נחשב: מינוס תשע ועוד שמונה עשרה.", 
                math_expression: "<div dir='ltr'>f(3) = -9 + 18</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיבור ונקבל את שיעור ה-y. לכן הנקודה היא (3,9). (מדובר בנקודת מקסימום כי הפרבולה בוכה).", 
                math_expression: "<div dir='ltr'>y = 9</div>" 
            }
        ],
        final_answer: "(3, 9)"
    },

    // שאלה 14
    {
        topic: "bagrut_35372",
        subTopic: "מקסימום ומינימום",
        question_text: `<strong>מציאת נקודת הקיצון של פונקציה ממעלה שלישית (שתי נקודות קיצון):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">f(x) = x<sup>3</sup> - 3x</div>
        מהם <strong>ערכי ה-x</strong> של נקודות הקיצון של פונקציה זו?`,
        options: [
            "x = 1 , x = -1",
            "x = 3 , x = -3",
            "x = 0 בלבד",
            "x = 0 , x = 3"
        ],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה. תקבלו נגזרת ריבועית: 3 איקס בריבוע פחות 3. השוו לאפס. העבירו את ה-3 אגף, חלקו ב-3, והוציאו שורש. זכרו ששורש נותן גם תשובה חיובית וגם שלילית!",
        solution_steps: [
            { 
                verbal_explanation: "שלב ראשון הוא גזירת הפונקציה. האיבר הראשון הופך לשלוש איקס בריבוע, והאיבר השני הופך למינוס שלוש.", 
                math_expression: "<div dir='ltr'>f'(x) = 3x<sup>2</sup> - 3</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא היכן יש נקודות קיצון (פסגות או עמקים), נשווה את הנגזרת לאפס.", 
                math_expression: "<div dir='ltr'>3x<sup>2</sup> - 3 = 0</div>" 
            },
            { 
                verbal_explanation: "נעביר את המספר שלוש לאגף הימני כדי לבודד את הנעלמים.", 
                math_expression: "<div dir='ltr'>3x<sup>2</sup> = 3</div>" 
            },
            { 
                verbal_explanation: "נחלק את המשוואה בשלוש כדי להשאיר את איקס בריבוע לבדו.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> = 1</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש ריבועי. חובה לזכור ששורש של 1 נותן שני פתרונות אפשריים: גם חיובי וגם שלילי.", 
                math_expression: "<div dir='ltr'>x = &plusmn;&radic;1</div>" 
            },
            { 
                verbal_explanation: "לכן קיימות שתי נקודות קיצון שונות לאורך הגרף.", 
                math_expression: "<div dir='ltr'>x = 1 , x = -1</div>" 
            }
        ],
        final_answer: "x = 1 , x = -1"
    },

    // שאלה 15
    {
        topic: "bagrut_35372",
        subTopic: "מקסימום ומינימום",
        question_text: `<strong>מציאת גובה הקיצון כאשר ה-x נתון:</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">f(x) = x<sup>2</sup> - 10x + 20</div>
        ידוע מראש שיש לה נקודת קיצון (מינימום) ב- <strong>x = 5</strong>.<br>
        מהו <strong>ערך ה-y</strong> של נקודת המינימום הזו?`,
        options: [
            "-5",
            "20",
            "5",
            "-25"
        ],
        correctAnswer: 0,
        hint: "חסכו לכם עבודה: כיוון שה-x כבר נתון לכם, אין צורך לגזור את הפונקציה כלל! פשוט קחו את המספר 5 והציבו אותו במשוואה המקורית במקום איקס.",
        solution_steps: [
            { 
                verbal_explanation: "כאשר המיקום האופקי (x) של הקיצון נתון לנו במפורש, נוכל לדלג על שלב הגזירה וההשוואה לאפס.", 
                math_expression: "<div dir='ltr'>x = 5</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את הגובה (y), פשוט נציב את הנתון הזה ישירות לתוך הפונקציה המקורית.", 
                math_expression: "<div dir='ltr'>f(5) = (5)<sup>2</sup> - 10 &times; (5) + 20</div>" 
            },
            { 
                verbal_explanation: "נחשב את החזקה והכפל.", 
                math_expression: "<div dir='ltr'>f(5) = 25 - 50 + 20</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החיסור (עשרים וחמש פחות חמישים זה מינוס עשרים וחמש).", 
                math_expression: "<div dir='ltr'>f(5) = -25 + 20</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיבור הסופי ונגלה שהנקודה הנמוכה ביותר נמצאת בגובה של מינוס חמש.", 
                math_expression: "<div dir='ltr'>y = -5</div>" 
            }
        ],
        final_answer: "-5"
    },

    // שאלה 16
    {
        topic: "bagrut_35372",
        subTopic: "מקסימום ומינימום",
        question_text: `<strong>הבנת המשמעות התיאורטית של קיצון:</strong><br>
        ידוע שלפונקציה f(x) יש נקודת <strong>מקסימום</strong> בנקודה (2, 8).<br>
        אם נציב את המספר 2 בתוך <strong>פונקציית הנגזרת</strong> (כלומר נחשב את f'(2)), איזו תוצאה נקבל בוודאות?`,
        options: [
            "0 (אפס)",
            "8",
            "מספר שלילי",
            "מספר חיובי"
        ],
        correctAnswer: 0,
        hint: "נקודת מקסימום או מינימום היא תמיד 'פסגה' או 'עמק' בגרף. בנקודות אלו המשיק לגרף הוא שטוח לחלוטין (מאוזן). מהו השיפוע של קו מאוזן? אפס.",
        solution_steps: [
            { 
                verbal_explanation: "הנקודה הנתונה היא נקודת מקסימום מקומית של הפונקציה. זוהי למעשה פסגה של הר בגרף.", 
                math_expression: "<div dir='ltr'>Max: (2, 8)</div>" 
            },
            { 
                verbal_explanation: "הנגזרת f'(x) מייצגת תמיד את השיפוע של קו המשיק לפונקציה בכל נקודה.", 
                math_expression: "<div dir='ltr'>f'(x) = m</div>" 
            },
            { 
                verbal_explanation: "בנקודת פסגה, הגרף אינו עולה ואינו יורד באותו רגע קט. המשיק שם הוא אופקי ושטוח לחלוטין.", 
                math_expression: "<div dir='ltr'>&mdash;</div>" 
            },
            { 
                verbal_explanation: "השיפוע של קו אופקי הוא תמיד אפס. לכן, הצבת שיעור האיקס של הקיצון בתוך הנגזרת חייבת לתת תוצאה של אפס.", 
                math_expression: "<div dir='ltr'>f'(2) = 0</div>" 
            }
        ],
        final_answer: "0 (אפס)"
    },

    // שאלה 17
    {
        topic: "bagrut_35372",
        subTopic: "מקסימום ומינימום",
        question_text: `<strong>קביעת סוג הקיצון בעזרת נקודות בדיקה מהסביבה:</strong><br>
        לפונקציה מסוימת יש נקודת קיצון ב- <strong>x = 4</strong>.<br>
        בדקנו את שיפוע הפונקציה מימין ומשמאל לנקודה זו, וגילינו ש:<br>
        - בנקודה x = 3, הנגזרת היא חיובית (הפונקציה <strong>עולה</strong>).<br>
        - בנקודה x = 5, הנגזרת היא שלילית (הפונקציה <strong>יורדת</strong>).<br>
        איזה סוג של נקודת קיצון יש ב- x = 4?`,
        options: [
            "נקודת מקסימום",
            "נקודת מינימום",
            "לא מינימום ולא מקסימום",
            "לא ניתן לדעת מהנתונים"
        ],
        correctAnswer: 0,
        hint: "ציירו זאת באוויר או על דף: מצד שמאל (לפני 4) עולים למעלה, מצד ימין (אחרי 4) יורדים למטה. איזו צורה נוצרה לכם בקודקוד שבאמצע? הר או עמק?",
        solution_steps: [
            { 
                verbal_explanation: "ננתח את סביבת הנקודה. משמאל לנקודת התורפה (באיקס שווה שלוש), הנגזרת חיובית, שזה אומר מגמת עלייה.", 
                math_expression: "<div dir='ltr'>f'(3) > 0 &nbsp;&#10132;&nbsp; &nearr;</div>" 
            },
            { 
                verbal_explanation: "בנקודת התורפה עצמה (באיקס שווה ארבע), המגמה נעצרת והשיפוע מתאפס.", 
                math_expression: "<div dir='ltr'>f'(4) = 0 &nbsp;&#10132;&nbsp; &mdash;</div>" 
            },
            { 
                verbal_explanation: "מימין לנקודת התורפה (באיקס שווה חמש), הנגזרת שלילית, שזה אומר מגמת ירידה.", 
                math_expression: "<div dir='ltr'>f'(5) < 0 &nbsp;&#10132;&nbsp; &searr;</div>" 
            },
            { 
                verbal_explanation: "השילוב של 'עולה ואז יורדת' יוצר תבנית של פסגה (הר). במתמטיקה פסגה כזו נקראת נקודת מקסימום.", 
                math_expression: "<div dir='ltr'>&cap; &nbsp;&#10132;&nbsp; מקסימום</div>" 
            }
        ],
        final_answer: "נקודת מקסימום"
    },

    // שאלה 18
    {
        topic: "bagrut_35372",
        subTopic: "מקסימום ומינימום",
        question_text: `<strong>קביעת סוג הקיצון בסדר הפוך (עמק):</strong><br>
        לפונקציה יש נקודת קיצון ב- <strong>x = -1</strong>.<br>
        הצבנו ערכים בנגזרת וקיבלנו:<br>
        - בנקודה x = -2 (משמאל לקיצון): הנגזרת היא -4 (כלומר הפונקציה <strong>יורדת</strong>).<br>
        - בנקודה x = 0 (מימין לקיצון): הנגזרת היא 4 (כלומר הפונקציה <strong>עולה</strong>).<br>
        איזה סוג של נקודת קיצון יש ב- x = -1?`,
        options: [
            "נקודת מינימום",
            "נקודת מקסימום",
            "לא מינימום ולא מקסימום",
            "לא ניתן לדעת מהנתונים"
        ],
        correctAnswer: 0,
        hint: "שוב, ציירו באוויר: לפני מינוס 1 יש ירידה כלפי מטה (לתוך הבור), ואחרי מינוס 1 יש עליה כלפי מעלה (יציאה מהבור). הצורה הנוצרת היא עמק.",
        solution_steps: [
            { 
                verbal_explanation: "ננתח את הצד השמאלי. בערך הקטן יותר ממינוס אחת, הנגזרת שלילית ולכן הקו יורד.", 
                math_expression: "<div dir='ltr'>f'(-2) < 0 &nbsp;&#10132;&nbsp; &searr;</div>" 
            },
            { 
                verbal_explanation: "ננתח את הצד הימני. בערך הגדול יותר ממינוס אחת, הנגזרת חיובית ולכן הקו מטפס ועולה.", 
                math_expression: "<div dir='ltr'>f'(0) > 0 &nbsp;&#10132;&nbsp; &nearr;</div>" 
            },
            { 
                verbal_explanation: "מבנה שבו הפונקציה יורדת אל נקודה מסוימת ואז עולה ממנה יוצר צורה של שקע או קערה.", 
                math_expression: "<div dir='ltr'>&cup;</div>" 
            },
            { 
                verbal_explanation: "נקודת השפל הנמוכה ביותר בקערה כזו נקראת נקודת מינימום.", 
                math_expression: "<div dir='ltr'>מינימום</div>" 
            }
        ],
        final_answer: "נקודת מינימום"
    },

    // שאלה 19
    {
        topic: "bagrut_35372",
        subTopic: "מקסימום ומינימום",
        question_text: `<strong>שאלת יישום (נקודת שיא בבעיה מילולית):</strong><br>
        כדור נזרק לאוויר. הגובה שלו במטרים, לפי הזמן t בשניות, מתואר על ידי הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">h(t) = -5t<sup>2</sup> + 20t + 2</div>
        באיזו שניה יגיע הכדור ל<strong>גובה המקסימלי</strong> שלו?`,
        options: [
            "t = 2 שניות",
            "t = 4 שניות",
            "t = 1 שניה",
            "t = 5 שניות"
        ],
        correctAnswer: 0,
        hint: "גובה מקסימלי משמעותו נקודת מקסימום! עליכם למצוא את הקודקוד. גזרו את הפונקציה (האות כאן היא t במקום x, אבל החוקים זהים): מינוס עשר כפול t, ועוד 20. השוו לאפס ופתרו.",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא את זמן השיא, נחפש את נקודת המקסימום של הפונקציה. שלב ראשון הוא לגזור את פונקציית הגובה.", 
                math_expression: "<div dir='ltr'>h'(t) = -10t + 20</div>" 
            },
            { 
                verbal_explanation: "בנקודת השיא, הכדור עוצר לרגע באוויר לפני שהוא נופל, ולכן מהירותו (שהיא הנגזרת) היא אפס. נשווה את הנגזרת לאפס.", 
                math_expression: "<div dir='ltr'>-10t + 20 = 0</div>" 
            },
            { 
                verbal_explanation: "נעביר את מינוס 10 t לאגף השני כדי להפוך אותו לחיובי.", 
                math_expression: "<div dir='ltr'>20 = 10t</div>" 
            },
            { 
                verbal_explanation: "נחלק בעשר כדי לבודד את הזמן t.", 
                math_expression: "<div dir='ltr'>t = 20 / 10</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק ונגלה שהכדור יגיע לשיא הגובה בדיוק לאחר שתי שניות.", 
                math_expression: "<div dir='ltr'>t = 2</div>" 
            }
        ],
        final_answer: "t = 2 שניות"
    },

    // שאלה 20
    {
        topic: "bagrut_35372",
        subTopic: "מקסימום ומינימום",
        question_text: `<strong>הבנת פונקציה ללא נקודות קיצון:</strong><br>
        נתונה הפונקציה הבאה (פונקציה קווית):<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">f(x) = 4x - 7</div>
        אם ננסה למצוא לה נקודת מינימום או מקסימום בעזרת הנגזרת, מה יקרה?`,
        options: [
            "הנגזרת היא 4, היא אף פעם לא מתאפסת ולכן אין נקודת קיצון",
            "נקבל שנקודת הקיצון היא ב- x = 0",
            "הנגזרת היא 4x, לכן נקודת הקיצון היא ב- x = 0",
            "הנגזרת היא -7, לכן היא תמיד יורדת"
        ],
        correctAnswer: 0,
        hint: "נסו לגזור את הפונקציה. הנגזרת של 4x היא 4, והנגזרת של 7- היא אפס. אז הנגזרת היא תמיד המספר הקבוע 4. האם 4 יכול להיות שווה לאפס אי פעם? לא. לכן קו ישר לעולם אינו משנה כיוון ואין לו 'פסגות'.",
        solution_steps: [
            { 
                verbal_explanation: "נפעל לפי השלבים למציאת קיצון. נגזור את הפונקציה הקווית.", 
                math_expression: "<div dir='ltr'>f'(x) = 4</div>" 
            },
            { 
                verbal_explanation: "כעת עלינו להשוות את הנגזרת לאפס, אבל קיבלנו בנגזרת מספר קבוע ולא משוואה עם נעלם.", 
                math_expression: "<div dir='ltr'>4 = 0</div>" 
            },
            { 
                verbal_explanation: "ארבע לעולם לא יכול להיות שווה לאפס. זהו פסוק שקר. המשמעות היא שאין שום נקודה שבה השיפוע מתאפס.", 
                math_expression: "<div dir='ltr'>4 &ne; 0 &nbsp;&#10132;&nbsp; אין פתרון</div>" 
            },
            { 
                verbal_explanation: "גיאומטרית, קו ישר רק עולה תמיד (או רק יורד תמיד), ולכן אין לו אף נקודת פסגה או שקע. לכן לפונקציה זו אין נקודות קיצון כלל.", 
                math_expression: "<div dir='ltr'>אין קיצון</div>" 
            }
        ],
        final_answer: "הנגזרת היא 4, היא אף פעם לא מתאפסת ולכן אין נקודת קיצון"
    }
];