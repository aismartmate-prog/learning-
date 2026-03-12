// ========================================================================
// שאלון 35372 | נושא: גאומטריה אנליטית
// פעימה 1: 20 שאלות (תתי נושאים: מרחק בין נקודות + אמצע קטע)
// ========================================================================

const questionsDB = [

    // ---------------------------------------------------------
    // תת נושא 1: מרחק בין נקודות (שאלות 1-10)
    // ---------------------------------------------------------

    // שאלה 1
    {
        topic: "bagrut_35372",
        subTopic: "מרחק בין נקודות",
        question_text: `<strong>מרחק בין נקודות על ציר ה-x:</strong><br>
        נתונות שתי נקודות הנמצאות על ציר ה-x:<br>
        נקודה A היא (2, 0) ונקודה B היא (7, 0).<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 100" width="100%" height="100" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="20" y1="50" x2="230" y2="50" stroke="#cbd5e1" stroke-width="2"/> <circle cx="60" cy="50" r="5" fill="#3b82f6"/>
            <text x="60" y="35" font-family="Arial" font-size="12" font-weight="bold">A(2,0)</text>
            <circle cx="180" cy="50" r="5" fill="#3b82f6"/>
            <text x="180" y="35" font-family="Arial" font-size="12" font-weight="bold">B(7,0)</text>
            <path d="M 60,65 L 180,65" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
            <text x="120" y="85" font-family="Arial" font-size="14" font-weight="bold" fill="#ef4444">d = ?</text>
        </svg>
        </div>
        מהו המרחק (d) בין שתי הנקודות?`,
        options: [
            "5",
            "9",
            "14",
            "4.5"
        ],
        correctAnswer: 0,
        hint: "כאשר שתי הנקודות נמצאות על אותו קו אופקי (ערך ה-y שלהן זהה), אין צורך בנוסחת השורש המלאה. פשוט חסרו את ה-x הקטן מה-x הגדול.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את שיעורי הנקודות. הנקודה הראשונה מסומנת כאיקס אחד וואי אחד.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 2 , y<sub>1</sub> = 0</div>" 
            },
            { 
                verbal_explanation: "הנקודה השנייה מסומנת כאיקס שתיים וואי שתיים.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = 7 , y<sub>2</sub> = 0</div>" 
            },
            { 
                verbal_explanation: "מכיוון שערך ה-y בשתי הנקודות הוא אפס, הקטע מקביל לציר ה-x. אפשר פשוט לחסר את ערכי ה-x כדי למצוא את האורך.", 
                math_expression: "<div dir='ltr'>d = x<sub>2</sub> - x<sub>1</sub></div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים לתרגיל חיסור.", 
                math_expression: "<div dir='ltr'>d = 7 - 2</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור ונקבל את המרחק.", 
                math_expression: "<div dir='ltr'>d = 5</div>" 
            }
        ],
        final_answer: "5"
    },

    // שאלה 2
    {
        topic: "bagrut_35372",
        subTopic: "מרחק בין נקודות",
        question_text: `<strong>חישוב מרחק בסיסי בנוסחה (נקודה וראשית הצירים):</strong><br>
        נתונה ראשית הצירים O בנקודה (0, 0).<br>
        ונתונה נקודה נוספת A בשיעורים (3, 4).<br>
        מהו המרחק בין הנקודה A לראשית הצירים O?`,
        options: [
            "5",
            "7",
            "25",
            "1"
        ],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת המרחק: שורש של הפרש האיקסים בריבוע ועוד הפרש הוואים בריבוע. כלומר, שורש של (3-0) בריבוע ועוד (4-0) בריבוע.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את שיעורי הנקודה הראשונה (ראשית הצירים).", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 0 , y<sub>1</sub> = 0</div>" 
            },
            { 
                verbal_explanation: "נרשום את שיעורי הנקודה השנייה.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = 3 , y<sub>2</sub> = 4</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים בנוסחת המרחק (דיסטנס).", 
                math_expression: "<div dir='ltr'>d = &radic;((3 - 0)<sup>2</sup> + (4 - 0)<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "נחסר בתוך הסוגריים. מכיוון שמחסרים אפס, המספרים נשארים כפי שהם.", 
                math_expression: "<div dir='ltr'>d = &radic;(3<sup>2</sup> + 4<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "נעלה כל מספר בריבוע ונחבר אותם: תשע ועוד שישה עשר נותן עשרים וחמש.", 
                math_expression: "<div dir='ltr'>d = &radic;(9 + 16) = &radic;25</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש ריבועי לקבלת המרחק הסופי.", 
                math_expression: "<div dir='ltr'>d = 5</div>" 
            }
        ],
        final_answer: "5"
    },

    // שאלה 3
    {
        topic: "bagrut_35372",
        subTopic: "מרחק בין נקודות",
        question_text: `<strong>נוסחת המרחק המלאה (נקודות חיוביות):</strong><br>
        חשבו את המרחק בין הנקודה A (1, 2) לבין הנקודה B (4, 6).<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="40" y1="130" x2="220" y2="130" stroke="#cbd5e1" stroke-width="2"/> <line x1="40" y1="130" x2="40" y2="20" stroke="#cbd5e1" stroke-width="2"/> <circle cx="80" cy="100" r="4" fill="#0f172a"/>
            <text x="50" y="105" font-family="Arial" font-size="12" font-weight="bold">A(1,2)</text>
            <circle cx="160" cy="40" r="4" fill="#0f172a"/>
            <text x="170" y="45" font-family="Arial" font-size="12" font-weight="bold">B(4,6)</text>
            <line x1="80" y1="100" x2="160" y2="40" stroke="#22c55e" stroke-width="3"/>
            <text x="110" y="65" font-family="Arial" font-size="14" font-weight="bold" fill="#15803d">d = ?</text>
        </svg>
        </div>`,
        options: [
            "5",
            "7",
            "25",
            "10"
        ],
        correctAnswer: 0,
        hint: "הציבו בנוסחת המרחק. (4 פחות 1) ייתן לכם 3. (6 פחות 2) ייתן לכם 4. העלו כל תוצאה בריבוע, חברו, והוציאו שורש.",
        solution_steps: [
            { 
                verbal_explanation: "נחלץ את הנתונים של נקודה A.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 1 , y<sub>1</sub> = 2</div>" 
            },
            { 
                verbal_explanation: "נחלץ את הנתונים של נקודה B.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = 4 , y<sub>2</sub> = 6</div>" 
            },
            { 
                verbal_explanation: "נציב את ארבעת המספרים בתוך נוסחת הדיסטנס.", 
                math_expression: "<div dir='ltr'>d = &radic;((4 - 1)<sup>2</sup> + (6 - 2)<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "נחשב את החיסור בתוך כל זוג סוגריים.", 
                math_expression: "<div dir='ltr'>d = &radic;(3<sup>2</sup> + 4<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "נעלה בריבוע כל אחת מהתוצאות.", 
                math_expression: "<div dir='ltr'>d = &radic;(9 + 16)</div>" 
            },
            { 
                verbal_explanation: "נחבר את המספרים בתוך השורש ונוציא שורש ריבועי מהסכום.", 
                math_expression: "<div dir='ltr'>d = &radic;25 = 5</div>" 
            }
        ],
        final_answer: "5"
    },

    // שאלה 4
    {
        topic: "bagrut_35372",
        subTopic: "מרחק בין נקודות",
        question_text: `<strong>התמודדות עם מספרים שליליים בנוסחת המרחק:</strong><br>
        חשבו את אורך הקטע שקצותיו הם בנקודות: (-2, 1) ו- (4, 9).`,
        options: [
            "10",
            "14",
            "8",
            "100"
        ],
        correctAnswer: 0,
        hint: "שימו לב היטב! כשמחסרים מספר שלילי זה הופך לפלוס: 4 פחות (מינוס 2) שווה ל-4 פלוס 2, שזה 6.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את ערכי הנקודה הראשונה.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = -2 , y<sub>1</sub> = 1</div>" 
            },
            { 
                verbal_explanation: "נרשום את ערכי הנקודה השנייה.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = 4 , y<sub>2</sub> = 9</div>" 
            },
            { 
                verbal_explanation: "נציב בנוסחת המרחק. שימו לב לחלק הראשון: מינוס של הנוסחה פוגש את המינוס של המספר שתיים.", 
                math_expression: "<div dir='ltr'>d = &radic;((4 - (-2))<sup>2</sup> + (9 - 1)<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "מינוס ומינוס הופכים לפלוס, לכן זה הופך לארבע ועוד שתיים.", 
                math_expression: "<div dir='ltr'>d = &radic;((4 + 2)<sup>2</sup> + (8)<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "נחשב את הסוגריים והחזקות: שש בריבוע זה שלושים ושש. שמונה בריבוע זה שישים וארבע.", 
                math_expression: "<div dir='ltr'>d = &radic;(6<sup>2</sup> + 8<sup>2</sup>) = &radic;(36 + 64)</div>" 
            },
            { 
                verbal_explanation: "נחבר בתוך השורש ונוציא שורש ממאה.", 
                math_expression: "<div dir='ltr'>d = &radic;100 = 10</div>" 
            }
        ],
        final_answer: "10"
    },

    // שאלה 5
    {
        topic: "bagrut_35372",
        subTopic: "מרחק בין נקודות",
        question_text: `<strong>מרחק עם כפילות של מספרים שליליים:</strong><br>
        מצאו את המרחק בין הנקודה (-3, -4) לנקודה (2, 8).`,
        options: [
            "13",
            "17",
            "169",
            "12"
        ],
        correctAnswer: 0,
        hint: "יהיו כאן שני היפוכים של סימנים בגלל המינוסים. 2 פחות (מינוס 3) יהפוך ל-5. בנוסף, 8 פחות (מינוס 4) יהפוך ל-12. העלו הכל בריבוע וחברו.",
        solution_steps: [
            { 
                verbal_explanation: "הנקודה הראשונה מכילה שני מספרים שליליים.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = -3 , y<sub>1</sub> = -4</div>" 
            },
            { 
                verbal_explanation: "הנקודה השנייה היא חיובית.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = 2 , y<sub>2</sub> = 8</div>" 
            },
            { 
                verbal_explanation: "נציב בנוסחת המרחק תוך הקפדה על סוגריים מסביב למספרים השליליים.", 
                math_expression: "<div dir='ltr'>d = &radic;((2 - (-3))<sup>2</sup> + (8 - (-4))<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "נהפוך את סימני המינוס הכפולים לפלוס.", 
                math_expression: "<div dir='ltr'>d = &radic;((2 + 3)<sup>2</sup> + (8 + 4)<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "נחשב את הסוגריים. נקבל חמש ושתים עשרה.", 
                math_expression: "<div dir='ltr'>d = &radic;(5<sup>2</sup> + 12<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "נעלה בריבוע: עשרים וחמש ועוד מאה ארבעים וארבע שווה מאה שישים ותשע.", 
                math_expression: "<div dir='ltr'>d = &radic;(25 + 144) = &radic;169</div>" 
            },
            { 
                verbal_explanation: "השורש של מספר זה נותן את התוצאה הסופית.", 
                math_expression: "<div dir='ltr'>d = 13</div>" 
            }
        ],
        final_answer: "13"
    },

    // שאלה 6
    {
        topic: "bagrut_35372",
        subTopic: "מרחק בין נקודות",
        question_text: `<strong>חישוב רדיוס מעגל בעזרת מרחק:</strong><br>
        במעגל שמרכזו M, נתונה נקודת המרכז: (1, 1).<br>
        נקודה A מונחת על היקף המעגל, ושיעוריה הם (4, 5).<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 200" width="100%" height="150" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="100" cy="100" r="70" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="100" cy="100" r="4" fill="#0f172a"/>
            <text x="100" y="115" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">M(1,1)</text>
            <circle cx="142" cy="44" r="4" fill="#ef4444"/>
            <text x="160" y="40" font-family="Arial" font-size="12" font-weight="bold">A(4,5)</text>
            <line x1="100" y1="100" x2="142" y2="44" stroke="#0f172a" stroke-width="2" stroke-dasharray="4,4"/>
            <text x="110" y="65" font-family="Arial" font-size="14" font-weight="bold">R</text>
        </svg>
        </div>
        מהו <strong>אורך הרדיוס</strong> של המעגל?`,
        options: [
            "5",
            "25",
            "10",
            "7"
        ],
        correctAnswer: 0,
        hint: "רדיוס הוא פשוט המרחק (d) ממרכז המעגל לנקודה שעל ההיקף. השתמשו בנוסחת המרחק בין שתי הנקודות הנתונות כדי למצוא אותו.",
        solution_steps: [
            { 
                verbal_explanation: "הרדיוס מוגדר כקטע המחבר את מרכז המעגל עם נקודה על ההיקף. לכן נשתמש בנוסחת המרחק.", 
                math_expression: "<div dir='ltr'>R = d</div>" 
            },
            { 
                verbal_explanation: "נחלץ את הנתונים מנקודת המרכז.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 1 , y<sub>1</sub> = 1</div>" 
            },
            { 
                verbal_explanation: "נחלץ את הנתונים מנקודת ההיקף.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = 4 , y<sub>2</sub> = 5</div>" 
            },
            { 
                verbal_explanation: "נציב את הערכים אל תוך נוסחת המרחק.", 
                math_expression: "<div dir='ltr'>R = &radic;((4 - 1)<sup>2</sup> + (5 - 1)<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "נחשב את ההפרשים בסוגריים ונעלה בריבוע.", 
                math_expression: "<div dir='ltr'>R = &radic;(3<sup>2</sup> + 4<sup>2</sup>) = &radic;(9 + 16)</div>" 
            },
            { 
                verbal_explanation: "נחבר ונוציא את השורש הסופי לקבלת אורך הרדיוס.", 
                math_expression: "<div dir='ltr'>R = &radic;25 = 5</div>" 
            }
        ],
        final_answer: "5"
    },

    // שאלה 7
    {
        topic: "bagrut_35372",
        subTopic: "מרחק בין נקודות",
        question_text: `<strong>חישוב אורך צלע כחלק מהיקף מלבן:</strong><br>
        במלבן, קודקוד A הוא (-1, 3) וקודקוד B הוא (2, -1).<br>
        חשבו את אורך הצלע AB.`,
        options: [
            "5",
            "25",
            "7",
            "4"
        ],
        correctAnswer: 0,
        hint: "כדי למצוא אורך צלע, מחשבים את המרחק בין קצותיה בעזרת נוסחת המרחק (דיסטנס). שימו לב למינוסים בעת ההצבה.",
        solution_steps: [
            { 
                verbal_explanation: "אורך של צלע מצולע במערכת צירים שווה למרחק הגיאומטרי בין שני הקודקודים שלה.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = -1 , y<sub>1</sub> = 3</div>" 
            },
            { 
                verbal_explanation: "נרשום את הקודקוד השני.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = 2 , y<sub>2</sub> = -1</div>" 
            },
            { 
                verbal_explanation: "נציב בנוסחת המרחק, ונקפיד להפוך את המינוס הכפול לסימן חיבור בתוך סוגרי ה-x.", 
                math_expression: "<div dir='ltr'>d = &radic;((2 - (-1))<sup>2</sup> + (-1 - 3)<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערכי הסוגריים.", 
                math_expression: "<div dir='ltr'>d = &radic;((3)<sup>2</sup> + (-4)<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "נעלה בריבוע. נזכור שמינוס 4 כפול מינוס 4 נותן מספר חיובי.", 
                math_expression: "<div dir='ltr'>d = &radic;(9 + 16)</div>" 
            },
            { 
                verbal_explanation: "נחבר את המספרים בתוך השורש, ונוציא שורש.", 
                math_expression: "<div dir='ltr'>d = &radic;25 = 5</div>" 
            }
        ],
        final_answer: "5"
    },

    // שאלה 8
    {
        topic: "bagrut_35372",
        subTopic: "מרחק בין נקודות",
        question_text: `<strong>מציאת נעלם מתוך מרחק נתון (משוואת שורש):</strong><br>
        המרחק בין הנקודה (0, 0) לנקודה (x, 4) הוא בדיוק 5.<br>
        נתון כי x הוא מספר חיובי.<br>
        מהו ערכו של x?`,
        options: [
            "3",
            "9",
            "5",
            "1"
        ],
        correctAnswer: 0,
        hint: "הציבו את כל הנתונים בנוסחת המרחק. תקבלו שורש של (איקס בריבוע פלוס 16) שווה ל-5. העלו את שני האגפים בריבוע כדי להיפטר מהשורש: איקס בריבוע פלוס 16 שווה ל-25. פתרו את המשוואה.",
        solution_steps: [
            { 
                verbal_explanation: "אנו יודעים את התשובה (המרחק) ואחד המשתנים חסר. נרכיב משוואה לפי הנוסחה.", 
                math_expression: "<div dir='ltr'>5 = &radic;((x - 0)<sup>2</sup> + (4 - 0)<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "נפשט את הביטוי שבתוך השורש על ידי הורדת האפסים.", 
                math_expression: "<div dir='ltr'>5 = &radic;(x<sup>2</sup> + 4<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "נחשב את החזקה של ארבע.", 
                math_expression: "<div dir='ltr'>5 = &radic;(x<sup>2</sup> + 16)</div>" 
            },
            { 
                verbal_explanation: "כדי להיפטר מהשורש, נעלה את שני אגפי המשוואה בריבוע (חזקת שתיים). חמש בריבוע הופך לעשרים וחמש.", 
                math_expression: "<div dir='ltr'>25 = x<sup>2</sup> + 16</div>" 
            },
            { 
                verbal_explanation: "נעביר את המספר שש עשרה לאגף השמאלי ונחסר אותו מעשרים וחמש.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> = 25 - 16 = 9</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש כדי למצוא את איקס. מכיוון שנתון ש-x חיובי, ניקח רק את התשובה החיובית.", 
                math_expression: "<div dir='ltr'>x = &radic;9 = 3</div>" 
            }
        ],
        final_answer: "3"
    },

    // שאלה 9
    {
        topic: "bagrut_35372",
        subTopic: "מרחק בין נקודות",
        question_text: `<strong>מרחק בין נקודות עם אותו ערך y (ללא שורש):</strong><br>
        מהו המרחק בין הנקודה (-5, 8) לבין הנקודה (15, 8)?`,
        options: [
            "20",
            "10",
            "25",
            "15"
        ],
        correctAnswer: 0,
        hint: "שימו לב שלשתי הנקודות יש אותו גובה (y=8). לכן זהו קו אופקי לחלוטין. פשוט חסרו את ה-x הקטן מה-x הגדול: 15 פחות (מינוס 5).",
        solution_steps: [
            { 
                verbal_explanation: "נשים לב שלשתי הנקודות יש בדיוק את אותו ערך בציר האנכי (הגובה שלהן זהה).", 
                math_expression: "<div dir='ltr'>y<sub>1</sub> = 8 , y<sub>2</sub> = 8</div>" 
            },
            { 
                verbal_explanation: "נציב זאת בנוסחת המרחק ונראה כיצד חלק שלם מהנוסחה מתאפס ונופל.", 
                math_expression: "<div dir='ltr'>d = &radic;((15 - (-5))<sup>2</sup> + (8 - 8)<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "הפרש הוואים הוא אפס. נטפל רק בהפרש האיקסים, כאשר מינוס פוגש מינוס והופך לפלוס.", 
                math_expression: "<div dir='ltr'>d = &radic;((15 + 5)<sup>2</sup> + 0<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "נחבר את המספרים ונקבל עשרים. נעלה בריבוע ולאחר מכן נוציא שורש. למעשה, הפעולות מבטלות זו את זו.", 
                math_expression: "<div dir='ltr'>d = &radic;(20<sup>2</sup>) = 20</div>" 
            }
        ],
        final_answer: "20"
    },

    // שאלה 10
    {
        topic: "bagrut_35372",
        subTopic: "מרחק בין נקודות",
        question_text: `<strong>יישום לבדיקת שוקיים במשולש:</strong><br>
        במשולש ABC קודקוד A הוא בנקודה (0, 2) וקודקוד B הוא בנקודה (3, -2).<br>
        רוצים לבדוק האם המשולש שווה שוקיים. מהו אורך השוק AB?`,
        options: [
            "5",
            "7",
            "10",
            "25"
        ],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת הדיסטנס בין נקודה A לנקודה B. שימו לב לחשב בזהירות את מינוס 2 פחות 2 בסוגריים.",
        solution_steps: [
            { 
                verbal_explanation: "נחלץ את נתוני קודקוד A למציאת אורך השוק.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 0 , y<sub>1</sub> = 2</div>" 
            },
            { 
                verbal_explanation: "נחלץ את נתוני קודקוד B.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = 3 , y<sub>2</sub> = -2</div>" 
            },
            { 
                verbal_explanation: "נציב בנוסחת המרחק.", 
                math_expression: "<div dir='ltr'>d = &radic;((3 - 0)<sup>2</sup> + (-2 - 2)<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערכי הסוגריים.", 
                math_expression: "<div dir='ltr'>d = &radic;(3<sup>2</sup> + (-4)<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "נעלה את הערכים בריבוע ונחבר אותם.", 
                math_expression: "<div dir='ltr'>d = &radic;(9 + 16) = &radic;25</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש כדי למצוא את אורך הצלע (השוק) של המשולש.", 
                math_expression: "<div dir='ltr'>d = 5</div>" 
            }
        ],
        final_answer: "5"
    },

    // ---------------------------------------------------------
    // תת נושא 2: אמצע קטע (שאלות 11-20)
    // ---------------------------------------------------------

    // שאלה 11
    {
        topic: "bagrut_35372",
        subTopic: "אמצע קטע",
        question_text: `<strong>מציאת אמצע קטע (מספרים חיוביים):</strong><br>
        נתון קטע שקצותיו הם הנקודות A (2, 4) ו- B (6, 8).<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="40" cy="90" r="4" fill="#0f172a"/>
            <text x="40" y="110" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">A(2,4)</text>
            <circle cx="160" cy="30" r="4" fill="#0f172a"/>
            <text x="160" y="20" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">B(6,8)</text>
            <line x1="40" y1="90" x2="160" y2="30" stroke="#94a3b8" stroke-width="2"/>
            <circle cx="100" cy="60" r="5" fill="#ef4444"/>
            <text x="120" y="75" font-family="Arial" font-size="12" font-weight="bold" fill="#b91c1c">M(x,y)</text>
        </svg>
        </div>
        מהם שיעורי הנקודה M, שהיא אמצע הקטע AB?`,
        options: [
            "(4, 6)",
            "(8, 12)",
            "(3, 5)",
            "(2, 2)"
        ],
        correctAnswer: 0,
        hint: "נקודת האמצע היא הממוצע של שני הקצוות. כדי למצוא את ה-x של האמצע, חברו את איקס של A לאיקס של B וחלקו ב-2. עשו אותו דבר ל-y.",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא את אמצע הקטע, נחשב את הממוצע של ערכי האיקס בנפרד ואת הממוצע של ערכי הוואי בנפרד.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 2 , x<sub>2</sub> = 6</div>" 
            },
            { 
                verbal_explanation: "נחבר את שני ערכי האיקס ונחלק בשתיים.", 
                math_expression: "<div dir='ltr'>x = (2 + 6) / 2</div>" 
            },
            { 
                verbal_explanation: "נבצע את החישוב ונקבל את ה-x של האמצע.", 
                math_expression: "<div dir='ltr'>x = 8 / 2 = 4</div>" 
            },
            { 
                verbal_explanation: "נעבור לערכי הוואי ונציב אותם בנוסחה.", 
                math_expression: "<div dir='ltr'>y = (4 + 8) / 2</div>" 
            },
            { 
                verbal_explanation: "נבצע את החישוב ונקבל את ה-y של האמצע.", 
                math_expression: "<div dir='ltr'>y = 12 / 2 = 6</div>" 
            },
            { 
                verbal_explanation: "נרשום את התשובה הסופית כנקודה מסודרת במערכת צירים.", 
                math_expression: "<div dir='ltr'>(4, 6)</div>" 
            }
        ],
        final_answer: "(4, 6)"
    },

    // שאלה 12
    {
        topic: "bagrut_35372",
        subTopic: "אמצע קטע",
        question_text: `<strong>אמצע קטע עם ראשית הצירים ומספר שלילי:</strong><br>
        מצאו את אמצע הקטע המחבר בין ראשית הצירים (0, 0) לבין הנקודה (10, -4).`,
        options: [
            "(5, -2)",
            "(10, -4)",
            "(-5, 2)",
            "(5, 2)"
        ],
        correctAnswer: 0,
        hint: "כשנקודה אחת היא אפס, החישוב הופך לפשוט מאוד: פשוט חצו לשניים (חלקו ב-2) כל אחד מהשיעורים של הנקודה השנייה.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את הנוסחה למציאת האיקס של האמצע עם הנקודות הנתונות.", 
                math_expression: "<div dir='ltr'>x = (0 + 10) / 2</div>" 
            },
            { 
                verbal_explanation: "עשר חלקי שתיים שווה חמש.", 
                math_expression: "<div dir='ltr'>x = 10 / 2 = 5</div>" 
            },
            { 
                verbal_explanation: "נרשום את הנוסחה למציאת הוואי של האמצע, שכולל מספר שלילי.", 
                math_expression: "<div dir='ltr'>y = (0 + (-4)) / 2</div>" 
            },
            { 
                verbal_explanation: "מינוס ארבע חלקי שתיים נותן תוצאה שלילית.", 
                math_expression: "<div dir='ltr'>y = -4 / 2 = -2</div>" 
            },
            { 
                verbal_explanation: "נקודת האמצע מורכבת משתי התוצאות.", 
                math_expression: "<div dir='ltr'>(5, -2)</div>" 
            }
        ],
        final_answer: "(5, -2)"
    },

    // שאלה 13
    {
        topic: "bagrut_35372",
        subTopic: "אמצע קטע",
        question_text: `<strong>אמצע קטע עם ערכים נגדיים ושליליים:</strong><br>
        מצאו את אמצע הקטע שקצותיו הם (-4, 2) ו- (2, -6).`,
        options: [
            "(-1, -2)",
            "(-2, -4)",
            "(-1, -4)",
            "(1, 2)"
        ],
        correctAnswer: 0,
        hint: "היזהרו בחיבור מספרים שליליים וחיוביים. חישוב ה-x יהיה (מינוס 4 פלוס 2) חלקי 2. חישוב ה-y יהיה (2 פלוס מינוס 6) חלקי 2.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את ערך האיקס של נקודת האמצע. נחבר מינוס ארבע עם שתיים.", 
                math_expression: "<div dir='ltr'>x = (-4 + 2) / 2</div>" 
            },
            { 
                verbal_explanation: "המונה הוא מינוס שתיים, ואנו מחלקים אותו בשתיים.", 
                math_expression: "<div dir='ltr'>x = -2 / 2 = -1</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערך הוואי של האמצע. נחבר שתיים עם מינוס שש.", 
                math_expression: "<div dir='ltr'>y = (2 + (-6)) / 2</div>" 
            },
            { 
                verbal_explanation: "המונה יוצא מינוס ארבע, וגם אותו נחלק בשתיים.", 
                math_expression: "<div dir='ltr'>y = -4 / 2 = -2</div>" 
            },
            { 
                verbal_explanation: "נרשום את הנקודה הסופית.", 
                math_expression: "<div dir='ltr'>(-1, -2)</div>" 
            }
        ],
        final_answer: "(-1, -2)"
    },

    // שאלה 14
    {
        topic: "bagrut_35372",
        subTopic: "אמצע קטע",
        question_text: `<strong>מציאת קצה קטע כאשר האמצע נתון (שאלה הפוכה):</strong><br>
        נתון קטע AB. נקודת האמצע שלו היא <strong>M (3, 3)</strong>.<br>
        ידוע כי אחד הקצוות הוא הנקודה <strong>A (1, 1)</strong>.<br>
        מהם שיעורי נקודת הקצה השנייה B?`,
        options: [
            "(5, 5)",
            "(2, 2)",
            "(4, 4)",
            "(6, 6)"
        ],
        correctAnswer: 0,
        hint: "במקום להציב את הקצוות, אתם יודעים את התוצאה (3). בנו משוואה ל-x: (אחד ועוד x) לחלק ל-2 שווה ל-3. הכפילו את שני האגפים ב-2 כדי להיפטר מהשבר (תקבלו 1+x=6) ופתרו.",
        solution_steps: [
            { 
                verbal_explanation: "הפעם נתון לנו ערך האמצע (M) וערך של קצה אחד (A). אנו מחפשים את קצה B.", 
                math_expression: "<div dir='ltr'>x<sub>M</sub> = 3 , x<sub>A</sub> = 1</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים בנוסחת האמצע עבור ציר איקס, כאשר איקס של B הוא הנעלם.", 
                math_expression: "<div dir='ltr'>3 = (1 + x<sub>B</sub>) / 2</div>" 
            },
            { 
                verbal_explanation: "כדי להיפטר מהשבר, נכפיל את שני אגפי המשוואה בשתיים.", 
                math_expression: "<div dir='ltr'>6 = 1 + x<sub>B</sub></div>" 
            },
            { 
                verbal_explanation: "נעביר את המספר אחת לאגף השמאלי ונקבל את האיקס של הקצה השני.", 
                math_expression: "<div dir='ltr'>x<sub>B</sub> = 6 - 1 = 5</div>" 
            },
            { 
                verbal_explanation: "נחזור על אותו תהליך בדיוק עבור ציר הוואי.", 
                math_expression: "<div dir='ltr'>3 = (1 + y<sub>B</sub>) / 2</div>" 
            },
            { 
                verbal_explanation: "נכפיל בשתיים ונעביר אגף.", 
                math_expression: "<div dir='ltr'>6 = 1 + y<sub>B</sub> &nbsp;&#10132;&nbsp; y<sub>B</sub> = 5</div>" 
            },
            { 
                verbal_explanation: "נרשום את שיעורי נקודת הקצה שמצאנו.", 
                math_expression: "<div dir='ltr'>(5, 5)</div>" 
            }
        ],
        final_answer: "(5, 5)"
    },

    // שאלה 15
    {
        topic: "bagrut_35372",
        subTopic: "אמצע קטע",
        question_text: `<strong>מציאת קצה כשהאמצע הוא ראשית הצירים:</strong><br>
        הנקודה (0, 0) היא אמצע הקטע המחבר את הנקודה A (-3, 4) לנקודה B.<br>
        מהי הנקודה B?`,
        options: [
            "(3, -4)",
            "(-3, 4)",
            "(1.5, -2)",
            "(0, 0)"
        ],
        correctAnswer: 0,
        hint: "כאשר האמצע הוא אפס, זה אומר ששני הקצוות מאזנים ומבטלים זה את זה. לכן הקצה השני חייב להיות מורכב מהמספרים הנגדיים (הפוכים בסימן) לנקודה הראשונה.",
        solution_steps: [
            { 
                verbal_explanation: "האמצע שווה לאפס. נרכיב משוואה עבור ציר האיקס.", 
                math_expression: "<div dir='ltr'>0 = (-3 + x<sub>B</sub>) / 2</div>" 
            },
            { 
                verbal_explanation: "הכפלת אפס בשתיים משאירה אותנו עם אפס.", 
                math_expression: "<div dir='ltr'>0 = -3 + x<sub>B</sub></div>" 
            },
            { 
                verbal_explanation: "نعביר את מינוס שלוש אגף ונקבל את האיקס המשלים.", 
                math_expression: "<div dir='ltr'>x<sub>B</sub> = 3</div>" 
            },
            { 
                verbal_explanation: "נרכיב משוואה דומה עבור ציר הוואי.", 
                math_expression: "<div dir='ltr'>0 = (4 + y<sub>B</sub>) / 2</div>" 
            },
            { 
                verbal_explanation: "נפשט ונפתור.", 
                math_expression: "<div dir='ltr'>0 = 4 + y<sub>B</sub> &nbsp;&#10132;&nbsp; y<sub>B</sub> = -4</div>" 
            },
            { 
                verbal_explanation: "שני המספרים שמצאנו הם למעשה המספרים הנגדיים לנקודה A, מהגיוני בסימטריה סביב האפס.", 
                math_expression: "<div dir='ltr'>(3, -4)</div>" 
            }
        ],
        final_answer: "(3, -4)"
    },

    // שאלה 16
    {
        topic: "bagrut_35372",
        subTopic: "אמצע קטע",
        question_text: `<strong>יישום אמצע קטע למציאת מרכז מעגל:</strong><br>
        AB הוא קוטר במעגל.<br>
        קצות הקוטר נמצאים על ציר ה-x בנקודות: A (-2, 0) ו- B (8, 0).<br>
        מהן קואורדינטות <strong>מרכז המעגל</strong>?`,
        options: [
            "(3, 0)",
            "(5, 0)",
            "(4, 0)",
            "(6, 0)"
        ],
        correctAnswer: 0,
        hint: "מרכז המעגל תמיד נמצא בדיוק באמצע הקוטר. השתמשו בנוסחת אמצע קטע על הנקודות הנתונות כדי למצוא אותו.",
        solution_steps: [
            { 
                verbal_explanation: "מרכז המעגל חוצה כל קוטר לשני רדיוסים שווים, ולכן הוא מחושב כנקודת האמצע של הקוטר.", 
                math_expression: "<div dir='ltr'>x = (-2 + 8) / 2</div>" 
            },
            { 
                verbal_explanation: "נחבר את המונים ונחלק בשתיים כדי למצוא את מיקום האיקס של מרכז המעגל.", 
                math_expression: "<div dir='ltr'>x = 6 / 2 = 3</div>" 
            },
            { 
                verbal_explanation: "נחשב את הוואי של המרכז. מכיוון ששני הקצוות הם בעלי גובה אפס, הממוצע שלהם חייב להיות אפס.", 
                math_expression: "<div dir='ltr'>y = (0 + 0) / 2 = 0</div>" 
            },
            { 
                verbal_explanation: "נרשום את מרכז המעגל כנקודה.", 
                math_expression: "<div dir='ltr'>(3, 0)</div>" 
            }
        ],
        final_answer: "(3, 0)"
    },

    // שאלה 17
    {
        topic: "bagrut_35372",
        subTopic: "אמצע קטע",
        question_text: `<strong>הבנת תיכון במשולש:</strong><br>
        במשולש ABC, מעבירים תיכון מקודקוד A אל הצלע BC.<br>
        התיכון פוגע בצלע BC וחוצה אותה לשניים בנקודה M.<br>
        אם נתון ש- B (2, 5) ו- C (8, 1), מהי הנקודה M?`,
        options: [
            "(5, 3)",
            "(10, 6)",
            "(6, -4)",
            "(4, 2)"
        ],
        correctAnswer: 0,
        hint: "תיכון הוא קו שיורד מקודקוד לאמצע הצלע שממולו. לכן, נקודה M היא פשוט אמצע הקטע שבין B ל-C. התעלמו מ-A וחשבו ממוצע לקצוות B ו-C.",
        solution_steps: [
            { 
                verbal_explanation: "הגדרה גיאומטרית: תיכון במשולש הוא ישר שמחבר קודקוד בדיוק אל נקודת האמצע של הצלע שמולו. לכן M היא אמצע BC.", 
                math_expression: "<div dir='ltr'>M = Midpoint(B,C)</div>" 
            },
            { 
                verbal_explanation: "נחשב את האיקס של האמצע באמצעות הנתונים של בי ושי.", 
                math_expression: "<div dir='ltr'>x = (2 + 8) / 2</div>" 
            },
            { 
                verbal_explanation: "התוצאה לאיקס היא חמש.", 
                math_expression: "<div dir='ltr'>x = 10 / 2 = 5</div>" 
            },
            { 
                verbal_explanation: "נחשב את הוואי של האמצע באותה דרך.", 
                math_expression: "<div dir='ltr'>y = (5 + 1) / 2</div>" 
            },
            { 
                verbal_explanation: "התוצאה לוואי היא שלוש.", 
                math_expression: "<div dir='ltr'>y = 6 / 2 = 3</div>" 
            },
            { 
                verbal_explanation: "נרשום את נקודת הפגיעה של התיכון.", 
                math_expression: "<div dir='ltr'>(5, 3)</div>" 
            }
        ],
        final_answer: "(5, 3)"
    },

    // שאלה 18
    {
        topic: "bagrut_35372",
        subTopic: "אמצע קטע",
        question_text: `<strong>מפגש אלכסונים במקבילית:</strong><br>
        במקבילית ABCD, האלכסונים חוצים זה את זה (נפגשים בדיוק באמצע שלהם).<br>
        נתונים שני קודקודים נגדיים של המקבילית: A (1, 2) ו- C (5, 6).<br>
        מהי נקודת המפגש של האלכסונים?`,
        options: [
            "(3, 4)",
            "(4, 8)",
            "(2, 2)",
            "(6, 8)"
        ],
        correctAnswer: 0,
        hint: "במקבילית, נקודת מפגש האלכסונים היא בדיוק נקודת האמצע של האלכסון AC (וגם של האלכסון BD). חשבו את ממוצע הנקודות A ו-C.",
        solution_steps: [
            { 
                verbal_explanation: "הכלל הגיאומטרי קובע שאלכסוני המקבילית חוצים (חותכים לחצי) אחד את השני. לכן, נקודת המפגש היא אמצע הקטע של כל אלכסון.", 
                math_expression: "<div dir='ltr'>M = Midpoint(A,C)</div>" 
            },
            { 
                verbal_explanation: "נחשב את אמצע האלכסון אי סי עבור ציר איקס.", 
                math_expression: "<div dir='ltr'>x = (1 + 5) / 2</div>" 
            },
            { 
                verbal_explanation: "נקבל את מיקום האיקס של מפגש האלכסונים.", 
                math_expression: "<div dir='ltr'>x = 6 / 2 = 3</div>" 
            },
            { 
                verbal_explanation: "נחשב את אמצע האלכסון עבור ציר וואי.", 
                math_expression: "<div dir='ltr'>y = (2 + 6) / 2</div>" 
            },
            { 
                verbal_explanation: "נקבל את גובה המפגש.", 
                math_expression: "<div dir='ltr'>y = 8 / 2 = 4</div>" 
            },
            { 
                verbal_explanation: "נרשום את נקודת החיתוך המרכזית של המקבילית.", 
                math_expression: "<div dir='ltr'>(3, 4)</div>" 
            }
        ],
        final_answer: "(3, 4)"
    },

    // שאלה 19
    {
        topic: "bagrut_35372",
        subTopic: "אמצע קטע",
        question_text: `<strong>הבנת הגיאומטריה דרך בעיה מילולית:</strong><br>
        שני חברים עומדים בשתי נקודות שונות על משטח ורוצים להיפגש בדיוק באמצע הדרך ביניהם.<br>
        חבר א' עומד בנקודה (4, 10).<br>
        חבר ב' עומד בנקודה (12, 20).<br>
        באיזו נקודה הם ייפגשו?`,
        options: [
            "(8, 15)",
            "(16, 30)",
            "(8, 10)",
            "(6, 5)"
        ],
        correctAnswer: 0,
        hint: "תרגום: למצוא את אמצע הקטע שבין שתי הנקודות הללו. (4 ועוד 12) חלקי 2 ייתן את ה-x. (10 ועוד 20) חלקי 2 ייתן את ה-y.",
        solution_steps: [
            { 
                verbal_explanation: "הנקודה שנמצאת 'בדיוק באמצע הדרך' מוגדרת מתמטית כנקודת אמצע קטע. נחשב את ממוצע האיקסים של החברים.", 
                math_expression: "<div dir='ltr'>x = (4 + 12) / 2</div>" 
            },
            { 
                verbal_explanation: "נפתור ונקבל את המיקום האופקי למפגש.", 
                math_expression: "<div dir='ltr'>x = 16 / 2 = 8</div>" 
            },
            { 
                verbal_explanation: "נחשב את ממוצע הוואים (הגבהים) של שניהם.", 
                math_expression: "<div dir='ltr'>y = (10 + 20) / 2</div>" 
            },
            { 
                verbal_explanation: "נפתור ונקבל את המיקום האנכי למפגש.", 
                math_expression: "<div dir='ltr'>y = 30 / 2 = 15</div>" 
            },
            { 
                verbal_explanation: "נרשום את נקודת המפגש המדויקת שהיא שוויונית לשניהם.", 
                math_expression: "<div dir='ltr'>(8, 15)</div>" 
            }
        ],
        final_answer: "(8, 15)"
    },

    // שאלה 20
    {
        topic: "bagrut_35372",
        subTopic: "אמצע קטע",
        question_text: `<strong>מציאת שני נעלמים שונים בו-זמנית בעזרת אמצע קטע:</strong><br>
        נקודת האמצע של הקטע AB היא <strong>M (4, y)</strong> (ה-y שלה חסר).<br>
        קצות הקטע הם <strong>A (2, 8)</strong> ו- <strong>B (x, 12)</strong> (ה-x חסר).<br>
        מצאו את ערכם של הנעלמים x ו- y.`,
        options: [
            "x = 6 , y = 10",
            "x = 2 , y = 10",
            "x = 6 , y = 20",
            "x = 4 , y = 10"
        ],
        correctAnswer: 0,
        hint: "טפלו בכל ציר בנפרד! עבור x בנו משוואה הפוכה: 4 = (2 ועוד x) חלקי 2. פתרו אותה. עבור y זה קל יותר כי יש לכם את שני הקצוות: y = (8 ועוד 12) חלקי 2.",
        solution_steps: [
            { 
                verbal_explanation: "נפריד את הבעיה לשני חלקים שונים שלא תלויים זה בזה. נתחיל מציר האיקס, שעבורו יש לנו את נקודת האמצע הנתונה. נבנה משוואה.", 
                math_expression: "<div dir='ltr'>4 = (2 + x) / 2</div>" 
            },
            { 
                verbal_explanation: "נכפיל בשתיים את שני האגפים כדי לבטל את השבר.", 
                math_expression: "<div dir='ltr'>8 = 2 + x</div>" 
            },
            { 
                verbal_explanation: "נעביר את המספר ונמצא את האיקס החסר בנקודת הקצה.", 
                math_expression: "<div dir='ltr'>x = 6</div>" 
            },
            { 
                verbal_explanation: "נעבור לציר הוואי. כאן האמצע הוא הנעלם, ושני הקצוות נתונים לנו.", 
                math_expression: "<div dir='ltr'>y = (8 + 12) / 2</div>" 
            },
            { 
                verbal_explanation: "נחבר את המונה ונחלק בשתיים.", 
                math_expression: "<div dir='ltr'>y = 20 / 2 = 10</div>" 
            },
            { 
                verbal_explanation: "נרשום את התוצאות הסופיות עבור שני הנעלמים שנדרשנו למצוא.", 
                math_expression: "<div dir='ltr'>x = 6 , y = 10</div>" 
            }
        ],
        final_answer: "x = 6 , y = 10"
    },// ---------------------------------------------------------
    // תת נושא 3: ישרים מקבילים וניצבים (שאלות 21-30)
    // ---------------------------------------------------------

    // שאלה 21
    {
        topic: "bagrut_35372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: `<strong>זיהוי ישרים מקבילים מתוך משוואות:</strong><br>
        נתונות שתי משוואות של קווים ישרים:<br>
        ישר א': <span dir="ltr" style="font-weight:bold;">y = 4x - 7</span><br>
        ישר ב': <span dir="ltr" style="font-weight:bold;">y = 4x + 2</span><br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 100" width="100%" height="100" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="40" y1="80" x2="140" y2="20" stroke="#3b82f6" stroke-width="3"/>
            <line x1="80" y1="90" x2="180" y2="30" stroke="#22c55e" stroke-width="3"/>
        </svg>
        </div>
        מהו היחס בין שני הישרים הללו?`,
        options: [
            "<bdi dir=\"rtl\">הישרים מקבילים זה לזה</bdi>",
            "<bdi dir=\"rtl\">הישרים חותכים זה את זה בנקודה אחת</bdi>",
            "<bdi dir=\"rtl\">הישרים מאונכים (ניצבים) זה לזה</bdi>",
            "<bdi dir=\"rtl\">הישרים מתלכדים (אותו ישר בדיוק)</bdi>"
        ],
        correctAnswer: 0,
        hint: "הסתכלו על השיפוע (המספר שכופל את ה-x) בשתי המשוואות. כאשר לשני ישרים יש בדיוק את אותו השיפוע, הם עולים או יורדים באותו הקצב ולעולם לא ייפגשו.",
        solution_steps: [
            { 
                verbal_explanation: "כדי לדעת את היחס בין שני ישרים, עלינו לבדוק את השיפועים שלהם. השיפוע הוא המספר שמקדם את ה-x.", 
                math_expression: "<div dir='ltr'>y = m &times; x + b</div>" 
            },
            { 
                verbal_explanation: "נחלץ את השיפוע של הישר הראשון.", 
                math_expression: "<div dir='ltr'>m<sub>1</sub> = 4</div>" 
            },
            { 
                verbal_explanation: "נחלץ את השיפוע של הישר השני.", 
                math_expression: "<div dir='ltr'>m<sub>2</sub> = 4</div>" 
            },
            { 
                verbal_explanation: "מכיוון ששני השיפועים שווים בדיוק אחד לשני, הקווים משופעים באותה זווית בדיוק ולעולם לא יחתכו זה את זה.", 
                math_expression: "<div dir='ltr'>m<sub>1</sub> = m<sub>2</sub></div>" 
            },
            { 
                verbal_explanation: "קווים בעלי שיפוע זהה נקראים קווים מקבילים.", 
                math_expression: "<div dir='ltr'><bdi dir='rtl'>מקבילים</bdi></div>" 
            }
        ],
        final_answer: "<bdi dir=\"rtl\">הישרים מקבילים זה לזה</bdi>"
    },

    // שאלה 22
    {
        topic: "bagrut_35372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: `<strong>זיהוי ישרים ניצבים (מאונכים):</strong><br>
        נתונות שתי משוואות ישר:<br>
        ישר 1: <span dir="ltr" style="font-weight:bold;">y = 2x + 5</span><br>
        ישר 2: <span dir="ltr" style="font-weight:bold;">y = -0.5x + 3</span><br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="60" y1="100" x2="140" y2="20" stroke="#3b82f6" stroke-width="3"/>
            <line x1="40" y1="40" x2="160" y2="80" stroke="#ef4444" stroke-width="3"/>
            <path d="M 92,68 L 100,76 L 108,68" fill="none" stroke="#0f172a" stroke-width="2"/>
        </svg>
        </div>
        מה ניתן לומר על שני הישרים?`,
        options: [
            "<bdi dir=\"rtl\">הישרים מאונכים (ניצבים) זה לזה</bdi>",
            "<bdi dir=\"rtl\">הישרים מקבילים זה לזה</bdi>",
            "<bdi dir=\"rtl\">הישרים מתלכדים</bdi>",
            "<bdi dir=\"rtl\">הישרים חותכים זה את זה אך אינם מאונכים</bdi>"
        ],
        correctAnswer: 0,
        hint: "הכפילו את השיפוע של הישר הראשון בשיפוע של הישר השני (2 כפול מינוס 0.5). אם התוצאה היא מינוס 1, הישרים יוצרים זווית של 90 מעלות והם מאונכים זה לזה.",
        solution_steps: [
            { 
                verbal_explanation: "נחלץ את השיפוע של הישר הראשון מתוך המשוואה.", 
                math_expression: "<div dir='ltr'>m<sub>1</sub> = 2</div>" 
            },
            { 
                verbal_explanation: "נחלץ את השיפוע של הישר השני. נוכל לרשום אותו כמינוס חצי.", 
                math_expression: "<div dir='ltr'>m<sub>2</sub> = -0.5 = -1 / 2</div>" 
            },
            { 
                verbal_explanation: "כדי לבדוק האם הם ניצבים (יוצרים זווית ישרה), נבדוק אם מכפלת השיפועים שווה למינוס אחת.", 
                math_expression: "<div dir='ltr'>m<sub>1</sub> &times; m<sub>2</sub> = 2 &times; (-0.5)</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת הכפל.", 
                math_expression: "<div dir='ltr'>2 &times; (-0.5) = -1</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהמכפלה היא מינוס אחת, השיפועים הופכיים ונגדיים זה לזה. משמעות הדבר היא שהישרים מאונכים.", 
                math_expression: "<div dir='ltr'><bdi dir='rtl'>ניצבים</bdi></div>" 
            }
        ],
        final_answer: "<bdi dir=\"rtl\">הישרים מאונכים (ניצבים) זה לזה</bdi>"
    },

    // שאלה 23
    {
        topic: "bagrut_35372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: `<strong>מציאת שיפוע של ישר מקביל:</strong><br>
        נתון הישר שמשוואתו היא <span dir="ltr" style="font-weight:bold;">y = -3x + 8</span>.<br>
        אנו רוצים לסרטט ישר חדש שיהיה <strong>מקביל</strong> לישר הנתון.<br>
        מה חייב להיות ה<strong>שיפוע</strong> של הישר החדש?`,
        options: [
            "-3",
            "3",
            "8",
            "1/3"
        ],
        correctAnswer: 0,
        hint: "תנאי המקבילות הוא פשוט מאוד: לישרים מקבילים יש בדיוק את אותו השיפוע. מצאו את השיפוע של הישר הנתון.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את השיפוע של הישר המקורי שנתון לנו.", 
                math_expression: "<div dir='ltr'>m<sub>1</sub> = -3</div>" 
            },
            { 
                verbal_explanation: "הכלל קובע שקווים מקבילים שומרים תמיד על אותו מרחק זה מזה מכיוון שהם נוטים באותה זווית.", 
                math_expression: "<div dir='ltr'><bdi dir='rtl'>הכלל:</bdi> m<sub>2</sub> = m<sub>1</sub></div>" 
            },
            { 
                verbal_explanation: "לכן, השיפוע של הישר החדש חייב להיות זהה לחלוטין לשיפוע הישן.", 
                math_expression: "<div dir='ltr'>m<sub>2</sub> = -3</div>" 
            }
        ],
        final_answer: "-3"
    },

    // שאלה 24
    {
        topic: "bagrut_35372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: `<strong>מציאת שיפוע של ישר מאונך (הופכי ונגדי):</strong><br>
        נתון הישר שמשוואתו היא <span dir="ltr" style="font-weight:bold;">y = 5x - 4</span>.<br>
        אנו מחפשים ישר חדש שיהיה <strong>מאונך (ניצב)</strong> לישר הנתון.<br>
        מה צריך להיות השיפוע של הישר החדש?`,
        options: [
            "-1/5 (מינוס חמישית)",
            "-5",
            "1/5",
            "5"
        ],
        correctAnswer: 0,
        hint: "כדי למצוא שיפוע של ישר מאונך, מבצעים שתי פעולות על השיפוע המקורי: הופכים את הסימן שלו (מפלוס למינוס) והופכים את המספר לשבר (שמים 1 במונה, והמספר יורד למכנה).",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את השיפוע של הישר המקורי. זהו המספר 5.", 
                math_expression: "<div dir='ltr'>m<sub>1</sub> = 5</div>" 
            },
            { 
                verbal_explanation: "תנאי הניצבות דורש מכפלה של מינוס אחת. דרך קלה לעשות זאת היא למצוא את המספר ה'הופכי ונגדי'. קודם נהפוך את המספר השלם לשבר (הופכי).", 
                math_expression: "<div dir='ltr'>5 &nbsp;&#10132;&nbsp; 1 / 5</div>" 
            },
            { 
                verbal_explanation: "לאחר מכן נהפוך את הסימן שלו לחיובי או שלילי (נגדי). מכיוון שחמש היה חיובי, השבר יהיה שלילי.", 
                math_expression: "<div dir='ltr'>1 / 5 &nbsp;&#10132;&nbsp; -1 / 5</div>" 
            },
            { 
                verbal_explanation: "זהו השיפוע המאונך. נוכל לוודא זאת על ידי הכפלתם.", 
                math_expression: "<div dir='ltr'>5 &times; (-1 / 5) = -1</div>" 
            }
        ],
        final_answer: "-1/5 (מינוס חמישית)"
    },

    // שאלה 25
    {
        topic: "bagrut_35372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: `<strong>מציאת שיפוע ממשוואה לא מסודרת:</strong><br>
        נתון ישר שמשוואתו אינה מפורשת:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">2y - 6x = 10</div>
        מהו השיפוע של ישר ש<strong>מקביל</strong> לישר זה?`,
        options: [
            "3",
            "6",
            "-6",
            "-3"
        ],
        correctAnswer: 0,
        hint: "לפני שמוצאים את השיפוע, חובה לסדר את המשוואה לצורה y = mx + b. העבירו את ה-6x אגף כך שיהיה חיובי, ואז חלקו את כל המשוואה ב-2. רק אז תראו את השיפוע האמיתי.",
        solution_steps: [
            { 
                verbal_explanation: "אסור לחלץ שיפוע ממשוואה שאינה מתחילה ב-'y שווה'. נסדר אותה. תחילה נעביר את שש איקס לאגף ימין.", 
                math_expression: "<div dir='ltr'>2y = 6x + 10</div>" 
            },
            { 
                verbal_explanation: "כעת נחלק את שני האגפים במקדם של וואי (שהוא שתיים) כדי לבודד אותו לחלוטין.", 
                math_expression: "<div dir='ltr'>y = (6x) / 2 + 10 / 2</div>" 
            },
            { 
                verbal_explanation: "נבצע את החלוקה ונקבל משוואה מסודרת ומפורשת.", 
                math_expression: "<div dir='ltr'>y = 3x + 5</div>" 
            },
            { 
                verbal_explanation: "כעת קל לראות שהשיפוע המקורי הוא שלוש.", 
                math_expression: "<div dir='ltr'>m<sub>1</sub> = 3</div>" 
            },
            { 
                verbal_explanation: "ישר מקביל דורש שיפוע זהה, ולכן גם הוא יהיה שלוש.", 
                math_expression: "<div dir='ltr'>m<sub>2</sub> = 3</div>" 
            }
        ],
        final_answer: "3"
    },

    // שאלה 26
    {
        topic: "bagrut_35372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: `<strong>הוכחת זווית ישרה במשולש (ניצבות מצלעות):</strong><br>
        במשולש נתונות שתי צלעות, AB ו- BC.<br>
        ידוע ששיפוע הצלע AB הוא <strong>3/4</strong> (שלושה רבעים).<br>
        ושיפוע הצלע BC הוא <strong>-4/3</strong> (מינוס ארבעה שלישים).<br>
        מהי המסקנה לגבי הזווית B שבין שתי צלעות אלו?`,
        options: [
            "<bdi dir=\"rtl\">הזווית B היא זווית ישרה (90 מעלות)</bdi>",
            "<bdi dir=\"rtl\">הזווית B אינה ישרה</bdi>",
            "<bdi dir=\"rtl\">הצלעות מקבילות זו לזו</bdi>",
            "<bdi dir=\"rtl\">לא ניתן להסיק כלום לגבי הזווית</bdi>"
        ],
        correctAnswer: 0,
        hint: "הכפילו את שני השיפועים שקיבלתם זה בזה. שלוש פעמים מינוס 4, חלקי 4 פעמים 3. מהי התוצאה? אם התוצאה היא 1-, הקווים מאונכים והזווית היא 90 מעלות.",
        solution_steps: [
            { 
                verbal_explanation: "נבדוק האם שתי הצלעות מאונכות זו לזו (יוצרות זווית ישרה). לשם כך נכפיל את השיפועים שלהן.", 
                math_expression: "<div dir='ltr'>m<sub>1</sub> &times; m<sub>2</sub> = (3 / 4) &times; (-4 / 3)</div>" 
            },
            { 
                verbal_explanation: "בכפל שברים, נכפול את המונים בנפרד (שלוש כפול מינוס ארבע).", 
                math_expression: "<div dir='ltr'>3 &times; (-4) = -12</div>" 
            },
            { 
                verbal_explanation: "נכפול את המכנים בנפרד (ארבע כפול שלוש).", 
                math_expression: "<div dir='ltr'>4 &times; 3 = 12</div>" 
            },
            { 
                verbal_explanation: "נחלק את המונה במכנה שמצאנו.", 
                math_expression: "<div dir='ltr'>-12 / 12 = -1</div>" 
            },
            { 
                verbal_explanation: "מכיוון שמכפלת השיפועים היא בדיוק מינוס אחת, הישרים ניצבים זה לזה. לכן הזווית ביניהם היא 90 מעלות.", 
                math_expression: "<div dir='ltr'>&ang;B = 90&deg;</div>" 
            }
        ],
        final_answer: "<bdi dir=\"rtl\">הזווית B היא זווית ישרה (90 מעלות)</bdi>"
    },

    // שאלה 27
    {
        topic: "bagrut_35372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: `<strong>מציאת שיפוע בין שתי נקודות ולאחר מכן ניצבות:</strong><br>
        ישר L עובר דרך הנקודות (1, 2) ו- (3, 8).<br>
        מה צריך להיות השיפוע של ישר ש<strong>מאונך</strong> לישר L?`,
        options: [
            "-1/3",
            "3",
            "-3",
            "1/3"
        ],
        correctAnswer: 0,
        hint: "שלב א': מצאו את השיפוע של ישר L בעזרת נוסחת השיפוע (הפרש ה-y לחלק להפרש ה-x). שלב ב': מצאו את ההופכי והנגדי לשיפוע שחישבתם.",
        solution_steps: [
            { 
                verbal_explanation: "ראשית נחשב את השיפוע של ישר L בעזרת נוסחת השיפוע בין שתי נקודות.", 
                math_expression: "<div dir='ltr'>m = (y<sub>2</sub> - y<sub>1</sub>) / (x<sub>2</sub> - x<sub>1</sub>)</div>" 
            },
            { 
                verbal_explanation: "נציב את שיעורי הנקודות שלנו. במונה נחסר את ערכי הוואי.", 
                math_expression: "<div dir='ltr'>8 - 2 = 6</div>" 
            },
            { 
                verbal_explanation: "במכנה נחסר את ערכי האיקס, בדיוק באותו הסדר.", 
                math_expression: "<div dir='ltr'>3 - 1 = 2</div>" 
            },
            { 
                verbal_explanation: "נחלק מונה במכנה לקבלת השיפוע המקורי.", 
                math_expression: "<div dir='ltr'>m<sub>1</sub> = 6 / 2 = 3</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא שיפוע לישר המאונך אליו, נהפוך את 3 לשבר (שליש) ונהפוך את הסימן שלו למינוס.", 
                math_expression: "<div dir='ltr'>m<sub>2</sub> = -1 / 3</div>" 
            }
        ],
        final_answer: "-1/3"
    },

    // שאלה 28
    {
        topic: "bagrut_35372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: `<strong>הבחנה בין מקבילים ונחתכים:</strong><br>
        נתונות שלוש משוואות:<br>
        1) <span dir="ltr" style="font-weight:bold;">y = 5x + 2</span><br>
        2) <span dir="ltr" style="font-weight:bold;">y = -5x + 2</span><br>
        3) <span dir="ltr" style="font-weight:bold;">y = 5x - 8</span><br>
        אילו מבין הישרים מקבילים זה לזה?`,
        options: [
            "<bdi dir=\"rtl\">ישר 1 וישר 3</bdi>",
            "<bdi dir=\"rtl\">ישר 1 וישר 2</bdi>",
            "<bdi dir=\"rtl\">כולם מקבילים</bdi>",
            "<bdi dir=\"rtl\">אף אחד אינו מקביל</bdi>"
        ],
        correctAnswer: 0,
        hint: "מקבילות תלויה אך ורק בשיפוע m (המקדם של x). חפשו אילו שתי משוואות מחזיקות בשיפוע זהה לחלוטין כולל הסימן.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את השיפוע של הישר הראשון.", 
                math_expression: "<div dir='ltr'>m<sub>1</sub> = 5</div>" 
            },
            { 
                verbal_explanation: "נרשום את השיפוע של הישר השני. שימו לב למינוס.", 
                math_expression: "<div dir='ltr'>m<sub>2</sub> = -5</div>" 
            },
            { 
                verbal_explanation: "נרשום את השיפוע של הישר השלישי.", 
                math_expression: "<div dir='ltr'>m<sub>3</sub> = 5</div>" 
            },
            { 
                verbal_explanation: "נשווה ביניהם. אנו מחפשים שוויון מוחלט (אותו מספר ואותו סימן).", 
                math_expression: "<div dir='ltr'>m<sub>1</sub> = m<sub>3</sub></div>" 
            },
            { 
                verbal_explanation: "המספרים החופשיים (2 ומינוס 8) רק מזיזים את הישר למעלה ולמטה, אך אינם פוגעים במקבילות. לכן ישר 1 וישר 3 הם המקבילים.", 
                math_expression: "<div dir='ltr'>1 || 3</div>" 
            }
        ],
        final_answer: "<bdi dir=\"rtl\">ישר 1 וישר 3</bdi>"
    },

    // שאלה 29
    {
        topic: "bagrut_35372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: `<strong>ישרים ניצבים עם שברים:</strong><br>
        נתון ישר שמשוואתו <span dir="ltr" style="font-weight:bold;">y = -(2/5)x + 3</span> (מינוס שתי חמישיות x).<br>
        מהו שיפוע הישר שמאונך אליו?`,
        options: [
            "5/2 (שני וחצי)",
            "-5/2",
            "2/5",
            "-2/5"
        ],
        correctAnswer: 0,
        hint: "כדי למצוא את ההופכי והנגדי של שבר פשוט: 1) החליפו בין המונה למכנה. 2) הפכו את הסימן. מה קורה כשאתם הופכים 'מינוס שתיים חלקי חמש'?",
        solution_steps: [
            { 
                verbal_explanation: "נחלץ את שיפוע הישר המקורי שהוא שבר שלילי.", 
                math_expression: "<div dir='ltr'>m<sub>1</sub> = -2 / 5</div>" 
            },
            { 
                verbal_explanation: "שלב ראשון בניצבות: 'הופכי'. נהפוך את השבר כך שהמכנה יעלה למונה והמונה ירד למכנה.", 
                math_expression: "<div dir='ltr'>-2 / 5 &nbsp;&#10132;&nbsp; -5 / 2</div>" 
            },
            { 
                verbal_explanation: "שלב שני בניצבות: 'נגדי'. נהפוך את הסימן של התוצאה ממינוס לפלוס.", 
                math_expression: "<div dir='ltr'>-5 / 2 &nbsp;&#10132;&nbsp; 5 / 2</div>" 
            },
            { 
                verbal_explanation: "השיפוע החדש הוא חמש חלקי שתיים, ששווה גם לשניים וחצי עשרוני.", 
                math_expression: "<div dir='ltr'>m<sub>2</sub> = 2.5</div>" 
            }
        ],
        final_answer: "5/2 (שני וחצי)"
    },

    // שאלה 30
    {
        topic: "bagrut_35372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: `<strong>מציאת נעלם ליצירת ישרים מקבילים:</strong><br>
        נתונות משוואות של שני ישרים שמטרתם להיות מקבילים:<br>
        ישר 1: <span dir="ltr" style="font-weight:bold;">y = 3x - 1</span><br>
        ישר 2: <span dir="ltr" style="font-weight:bold;">y = (k - 2)x + 5</span><br>
        מה צריך להיות הערך של המספר <strong>k</strong> כדי שהישרים יהיו מקבילים?`,
        options: [
            "k = 5",
            "k = 3",
            "k = 1",
            "k = -1"
        ],
        correctAnswer: 0,
        hint: "כדי שישרים יהיו מקבילים, השיפועים שלהם חייבים להיות שווים בדיוק. כלומר, הביטוי (k - 2) צריך להיות שווה ל-3. פתרו את המשוואה המהירה הזו.",
        solution_steps: [
            { 
                verbal_explanation: "השיפוע של הישר הראשון הוא פשוט המספר שמקדם את האיקס.", 
                math_expression: "<div dir='ltr'>m<sub>1</sub> = 3</div>" 
            },
            { 
                verbal_explanation: "השיפוע של הישר השני הוא כל הביטוי שבתוך הסוגריים שמקדם את האיקס.", 
                math_expression: "<div dir='ltr'>m<sub>2</sub> = k - 2</div>" 
            },
            { 
                verbal_explanation: "אנו רוצים שהישרים יהיו מקבילים, ולכן עלינו לדרוש שהשיפועים יהיו שווים זה לזה. נבנה משוואה.", 
                math_expression: "<div dir='ltr'>k - 2 = 3</div>" 
            },
            { 
                verbal_explanation: "נעביר את מינוס שתיים לאגף הימני ונהפוך לפלוס.", 
                math_expression: "<div dir='ltr'>k = 3 + 2</div>" 
            },
            { 
                verbal_explanation: "נחבר ונקבל את הערך של קיי שיבטיח קווים מקבילים.", 
                math_expression: "<div dir='ltr'>k = 5</div>" 
            }
        ],
        final_answer: "k = 5"
    },

    // ---------------------------------------------------------
    // תת נושא 4: מציאת משוואת ישר (שאלות 31-40)
    // ---------------------------------------------------------

    // שאלה 31
    {
        topic: "bagrut_35372",
        subTopic: "מציאת משוואת ישר",
        question_text: `<strong>מציאת משוואת ישר לפי שיפוע ונקודה:</strong><br>
        מצאו את משוואת הישר ששיפועו <strong>m = 2</strong>, והוא עובר דרך הנקודה <strong>(1, 5)</strong>.`,
        options: [
            "y = 2x + 3",
            "y = 2x + 5",
            "y = 5x + 2",
            "y = 2x - 3"
        ],
        correctAnswer: 0,
        hint: "השתמשו בנוסחה למציאת משוואת ישר: y פחות y1 שווה m כפול (x פחות x1). הציבו את הנקודה (1,5) והשיפוע 2, ופתחו סוגריים.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את הנוסחה הכללית למציאת משוואת ישר.", 
                math_expression: "<div dir='ltr'>y - y<sub>1</sub> = m &times; (x - x<sub>1</sub>)</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים שיש לנו: השיפוע m=2, ושיעורי הנקודה x1=1, y1=5.", 
                math_expression: "<div dir='ltr'>y - 5 = 2 &times; (x - 1)</div>" 
            },
            { 
                verbal_explanation: "נפתח את הסוגריים באגף ימין על ידי הכפלת ה-2 בשני האיברים שבפנים.", 
                math_expression: "<div dir='ltr'>y - 5 = 2x - 2</div>" 
            },
            { 
                verbal_explanation: "נעביר את מינוס 5 לאגף ימין (הוא יהפוך לפלוס 5) כדי לבודד את y.", 
                math_expression: "<div dir='ltr'>y = 2x - 2 + 5</div>" 
            },
            { 
                verbal_explanation: "נחבר את המספרים החופשיים ונקבל את המשוואה הסופית.", 
                math_expression: "<div dir='ltr'>y = 2x + 3</div>" 
            }
        ],
        final_answer: "y = 2x + 3"
    },

    // שאלה 32
    {
        topic: "bagrut_35372",
        subTopic: "מציאת משוואת ישר",
        question_text: `<strong>מציאת ישר עם שיפוע שלילי וחיתוך עם הציר:</strong><br>
        מצאו את משוואת הישר ששיפועו <strong>m = -3</strong>, והוא עובר דרך הנקודה <strong>(0, 4)</strong>.`,
        options: [
            "y = -3x + 4",
            "y = -3x - 4",
            "y = 4x - 3",
            "y = 3x + 4"
        ],
        correctAnswer: 0,
        hint: "שימו לב שהנקודה הנתונה (0,4) נמצאת על ציר ה-y (כי ה-x שלה הוא אפס). זה אומר שהמספר 4 הוא למעשה פרמטר b (נקודת חיתוך עם ציר y). תוכלו פשוט להרכיב את המשוואה ישירות: y = mx + b.",
        solution_steps: [
            { 
                verbal_explanation: "כאשר נתונה לנו נקודה שבה האיקס שווה לאפס, זוהי נקודת החיתוך של הישר עם ציר הוואי.", 
                math_expression: "<div dir='ltr'>x = 0 &nbsp;&#10132;&nbsp; b = 4</div>" 
            },
            { 
                verbal_explanation: "נוכל לדלג על הנוסחה הארוכה, ולהציב את הנתונים ישירות בתבנית הישר הקצרה.", 
                math_expression: "<div dir='ltr'>y = mx + b</div>" 
            },
            { 
                verbal_explanation: "נציב את השיפוע הנתון m ואת המספר החופשי b שמצאנו.", 
                math_expression: "<div dir='ltr'>y = -3x + 4</div>" 
            }
        ],
        final_answer: "y = -3x + 4"
    },

    // שאלה 33
    {
        topic: "bagrut_35372",
        subTopic: "מציאת משוואת ישר",
        question_text: `<strong>מציאת משוואת ישר המקביל לישר אחר:</strong><br>
        מצאו את משוואת הישר העובר דרך הנקודה <strong>(-1, 2)</strong>, ומקביל לישר <span dir="ltr" style="font-weight:bold;">y = 4x - 5</span>.`,
        options: [
            "y = 4x + 6",
            "y = 4x - 2",
            "y = -1x + 2",
            "y = 4x + 2"
        ],
        correctAnswer: 0,
        hint: "ישרים מקבילים חולקים את אותו השיפוע. קחו את השיפוע 4 מהמשוואה הנתונה. עכשיו יש לכם שיפוע (4) ונקודה (-1, 2). הציבו בנוסחת הישר.",
        solution_steps: [
            { 
                verbal_explanation: "כדי לבנות משוואת ישר, אנו זקוקים לשיפוע. נגנוב את השיפוע מהישר הנתון כי הם מקבילים.", 
                math_expression: "<div dir='ltr'>m = 4</div>" 
            },
            { 
                verbal_explanation: "נציב את השיפוע והנקודה החדשה לתוך נוסחת משוואת הישר. שימו לב להציב מינוס אחת בתוך האיקס.", 
                math_expression: "<div dir='ltr'>y - 2 = 4 &times; (x - (-1))</div>" 
            },
            { 
                verbal_explanation: "מינוס ומינוס הופך לפלוס.", 
                math_expression: "<div dir='ltr'>y - 2 = 4 &times; (x + 1)</div>" 
            },
            { 
                verbal_explanation: "נפתח את הסוגריים באגף ימין.", 
                math_expression: "<div dir='ltr'>y - 2 = 4x + 4</div>" 
            },
            { 
                verbal_explanation: "נעביר את מינוס 2 לאגף ימין כפלוס שתיים ונחבר למספר החופשי.", 
                math_expression: "<div dir='ltr'>y = 4x + 4 + 2 &nbsp;&#10132;&nbsp; y = 4x + 6</div>" 
            }
        ],
        final_answer: "y = 4x + 6"
    },

    // שאלה 34
    {
        topic: "bagrut_35372",
        subTopic: "מציאת משוואת ישר",
        question_text: `<strong>מציאת משוואת ישר המאונך לישר אחר:</strong><br>
        מצאו את משוואת הישר העובר דרך הנקודה <strong>(6, 1)</strong>, ומאונך לישר <span dir="ltr" style="font-weight:bold;">y = 3x + 8</span>.`,
        options: [
            "y = -1/3x + 3",
            "y = 3x - 17",
            "y = -3x + 19",
            "y = -1/3x + 1"
        ],
        correctAnswer: 0,
        hint: "הישרים מאונכים, ולכן השיפוע שלהם הופכי ונגדי. השיפוע הישן הוא 3, אז השיפוע החדש הוא מינוס 1/3. הציבו את השיפוע הזה עם הנקודה (6, 1) בנוסחת הישר.",
        solution_steps: [
            { 
                verbal_explanation: "נחלץ את השיפוע של הישר הישן.", 
                math_expression: "<div dir='ltr'>m<sub>1</sub> = 3</div>" 
            },
            { 
                verbal_explanation: "נמצא את השיפוע המאונך לו על ידי פעולת הופכי (שליש) ונגדי (מינוס).", 
                math_expression: "<div dir='ltr'>m<sub>2</sub> = -1 / 3</div>" 
            },
            { 
                verbal_explanation: "נציב את השיפוע החדש והנקודה הנתונה לתוך הנוסחה.", 
                math_expression: "<div dir='ltr'>y - 1 = (-1 / 3) &times; (x - 6)</div>" 
            },
            { 
                verbal_explanation: "נפתח סוגריים. מינוס שליש כפול מינוס שש הופך לפלוס שתיים.", 
                math_expression: "<div dir='ltr'>y - 1 = (-1 / 3)x + 2</div>" 
            },
            { 
                verbal_explanation: "נעביר את מינוס 1 לאגף הימני ונקבל את המשוואה הסופית.", 
                math_expression: "<div dir='ltr'>y = (-1 / 3)x + 3</div>" 
            }
        ],
        final_answer: "y = -1/3x + 3"
    },

    // שאלה 35
    {
        topic: "bagrut_35372",
        subTopic: "מציאת משוואת ישר",
        question_text: `<strong>מציאת משוואת ישר על פי שתי נקודות (המסלול המלא):</strong><br>
        מצאו את משוואת הישר העובר דרך שתי הנקודות: <strong>(1, 3)</strong> ו- <strong>(4, 9)</strong>.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="60" cy="90" r="4" fill="#0f172a"/>
            <text x="60" y="105" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">(1,3)</text>
            <circle cx="140" cy="30" r="4" fill="#0f172a"/>
            <text x="140" y="20" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">(4,9)</text>
            <line x1="20" y1="120" x2="180" y2="0" stroke="#3b82f6" stroke-width="2"/>
        </svg>
        </div>`,
        options: [
            "y = 2x + 1",
            "y = 3x + 0",
            "y = 2x + 3",
            "y = -2x + 5"
        ],
        correctAnswer: 0,
        hint: "זהו תהליך בשני שלבים. 1) חשבו את השיפוע m בעזרת הנוסחה: הפרש ה-y לחלק להפרש ה-x.  2) בחרו את אחת מהנקודות (לא משנה איזו), והציבו עם השיפוע שמצאתם בנוסחת משוואת הישר.",
        solution_steps: [
            { 
                verbal_explanation: "שלב ראשון: מציאת השיפוע. נרכיב שבר שבו המונה הוא הפרש שיעורי הוואי, והמכנה הוא הפרש שיעורי האיקס.", 
                math_expression: "<div dir='ltr'>m = (9 - 3) / (4 - 1)</div>" 
            },
            { 
                verbal_explanation: "נחשב ונקבל את השיפוע.", 
                math_expression: "<div dir='ltr'>m = 6 / 3 = 2</div>" 
            },
            { 
                verbal_explanation: "שלב שני: הצבה. נבחר את הנקודה הפשוטה מבין השתיים, ונציב אותה יחד עם השיפוע בנוסחת הישר.", 
                math_expression: "<div dir='ltr'>y - 3 = 2 &times; (x - 1)</div>" 
            },
            { 
                verbal_explanation: "נפתח סוגריים.", 
                math_expression: "<div dir='ltr'>y - 3 = 2x - 2</div>" 
            },
            { 
                verbal_explanation: "נעביר אגפים ונחבר למציאת המשוואה.", 
                math_expression: "<div dir='ltr'>y = 2x - 2 + 3 &nbsp;&#10132;&nbsp; y = 2x + 1</div>" 
            }
        ],
        final_answer: "y = 2x + 1"
    },

    // שאלה 36
    {
        topic: "bagrut_35372",
        subTopic: "מציאת משוואת ישר",
        question_text: `<strong>מציאת משוואת ישר עם נקודות וסימנים שליליים:</strong><br>
        מצאו את משוואת הישר שעובר בנקודות <strong>(-2, 0)</strong> ו- <strong>(0, 4)</strong>.`,
        options: [
            "y = 2x + 4",
            "y = -2x + 4",
            "y = 2x - 4",
            "y = 0.5x + 4"
        ],
        correctAnswer: 0,
        hint: "חשבו את השיפוע בזהירות: (4 פחות 0) לחלק ל- (0 פחות מינוס 2). המכנה הופך ל-2 חיובי. לאחר שמצאתם את השיפוע, שימו לב שהנקודה (0,4) נותנת לכם ישירות את המספר החופשי של המשוואה!",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את השיפוע בעזרת הנוסחה. נשים לב שהחיסור במכנה הופך לחיבור בגלל המינוס.", 
                math_expression: "<div dir='ltr'>m = (4 - 0) / (0 - (-2))</div>" 
            },
            { 
                verbal_explanation: "המונה הוא ארבע, והמכנה הוא שתיים חיובי.", 
                math_expression: "<div dir='ltr'>m = 4 / 2 = 2</div>" 
            },
            { 
                verbal_explanation: "הנקודה השנייה שנתונה לנו יושבת על ציר הוואי. כלומר, המספר 4 הוא בדיוק נקודת החיתוך (האיבר b).", 
                math_expression: "<div dir='ltr'>x = 0 &nbsp;&#10132;&nbsp; b = 4</div>" 
            },
            { 
                verbal_explanation: "נוכל לחבר את הנתונים ישירות למשוואה אחת בלי תהליך ארוך.", 
                math_expression: "<div dir='ltr'>y = 2x + 4</div>" 
            }
        ],
        final_answer: "y = 2x + 4"
    },

    // שאלה 37
    {
        topic: "bagrut_35372",
        subTopic: "מציאת משוואת ישר",
        question_text: `<strong>משוואה של ישר המקביל לציר ה-x:</strong><br>
        מצאו את משוואת הישר אשר <strong>מקביל לציר ה-x</strong>, ועובר דרך הנקודה <strong>(3, 8)</strong>.`,
        options: [
            "y = 8",
            "x = 3",
            "y = 3x + 8",
            "y = 0"
        ],
        correctAnswer: 0,
        hint: "ישר שמקביל לציר ה-x הוא ישר שטוח לחלוטין (מאוזן). השיפוע שלו הוא 0. לכן משוואתו מורכבת רק מהגובה (y) הקבוע שלו, שאינו משתנה לעולם.",
        solution_steps: [
            { 
                verbal_explanation: "ישר שמקביל לציר האופקי לא עולה ולא יורד. זה אומר שהשיפוע שלו אפס.", 
                math_expression: "<div dir='ltr'>m = 0</div>" 
            },
            { 
                verbal_explanation: "נציב זאת בנוסחת הישר הכללית.", 
                math_expression: "<div dir='ltr'>y = 0 &times; x + b</div>" 
            },
            { 
                verbal_explanation: "האיקס מתאפס ונעלם, ונשארנו עם משוואה מהצורה y=b.", 
                math_expression: "<div dir='ltr'>y = b</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהישר עובר בנקודה שבה הגובה הוא 8, הגובה הזה נשאר קבוע לכל אורך הישר.", 
                math_expression: "<div dir='ltr'>y = 8</div>" 
            }
        ],
        final_answer: "y = 8"
    },

    // שאלה 38
    {
        topic: "bagrut_35372",
        subTopic: "מציאת משוואת ישר",
        question_text: `<strong>משוואה של ישר המקביל לציר ה-y:</strong><br>
        מצאו את משוואת הישר אשר <strong>מקביל לציר ה-y</strong>, ועובר דרך הנקודה <strong>(5, -2)</strong>.`,
        options: [
            "x = 5",
            "y = -2",
            "x = -2",
            "y = 5x"
        ],
        correctAnswer: 0,
        hint: "ישר שמקביל לציר ה-y הוא ישר אנכי ('עומד'). לישר כזה אין שיפוע מוגדר והוא לא מתחיל ב-'y שווה'. הוא פשוט מקובע על ערך x אחד שלא משתנה לעולם.",
        solution_steps: [
            { 
                verbal_explanation: "ישר שמקביל לציר האנכי הוא קו עומד. לא ניתן לתאר אותו באמצעות פונקציה רגילה עם שיפוע.", 
                math_expression: "<div dir='ltr'>|</div>" 
            },
            { 
                verbal_explanation: "התכונה היחידה של קו כזה היא שערך האיקס שלו נשאר תמיד אותו דבר, ולא משנה מה הגובה (y).", 
                math_expression: "<div dir='ltr'>x = constant</div>" 
            },
            { 
                verbal_explanation: "מכיוון שנתון לנו שהוא עובר בנקודה שבה האיקס הוא 5, הוא יהיה תקוע על המספר הזה לנצח.", 
                math_expression: "<div dir='ltr'>x = 5</div>" 
            }
        ],
        final_answer: "x = 5"
    },

    // שאלה 39
    {
        topic: "bagrut_35372",
        subTopic: "מציאת משוואת ישר",
        question_text: `<strong>מציאת נקודת חיתוך בין שני ישרים:</strong><br>
        נתונים שני ישרים:<br>
        ישר א': <span dir="ltr" style="font-weight:bold;">y = 2x</span><br>
        ישר ב': <span dir="ltr" style="font-weight:bold;">y = x + 3</span><br>
        באיזו נקודה נחתכים שני הישרים הללו?`,
        options: [
            "(3, 6)",
            "(1, 4)",
            "(3, 3)",
            "(6, 3)"
        ],
        correctAnswer: 0,
        hint: "נקודת חיתוך היא המקום שבו שני הישרים שווים זה לזה. לכן, השוו את צד ימין של ישר א' לצד ימין של ישר ב': 2x = x + 3. פתרו ומצאו את x, ואז הציבו אותו כדי למצוא את y.",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא את נקודת המפגש של שני קווים, נשווה את המשוואות שלהן זו לזו (נבנה משוואה שבה האיקסים שווים).", 
                math_expression: "<div dir='ltr'>2x = x + 3</div>" 
            },
            { 
                verbal_explanation: "נעביר את האיקס הבודד מאגף ימין לאגף שמאל (הסימן יהפוך למינוס).", 
                math_expression: "<div dir='ltr'>2x - x = 3</div>" 
            },
            { 
                verbal_explanation: "נחסר ונקבל את ערך האיקס של נקודת המפגש.", 
                math_expression: "<div dir='ltr'>x = 3</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את גובה נקודת המפגש (y), נציב את האיקס שמצאנו באחת המשוואות (לא משנה איזו מהן). נציב בראשונה.", 
                math_expression: "<div dir='ltr'>y = 2 &times; 3</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערך הוואי ונרשום את התשובה כנקודה אחת מסודרת.", 
                math_expression: "<div dir='ltr'>y = 6 &nbsp;&#10132;&nbsp; (3, 6)</div>" 
            }
        ],
        final_answer: "(3, 6)"
    },

    // שאלה 40
    {
        topic: "bagrut_35372",
        subTopic: "מציאת משוואת ישר",
        question_text: `<strong>שאלת אתגר - משוואת התיכון במשולש:</strong><br>
        במשולש ABC, נתונים הקודקודים: <strong>A(0, 6)</strong> , <strong>B(2, 0)</strong> , <strong>C(6, 0)</strong>.<br>
        מקודקוד A יוצא תיכון לצלע BC.<br>
        מהי משוואת התיכון? (רמז: מצאו קודם את האמצע של BC).`,
        options: [
            "y = -1.5x + 6",
            "y = 1.5x + 6",
            "y = -2x + 6",
            "y = -1.5x + 0"
        ],
        correctAnswer: 0,
        hint: "תיכון מחבר קודקוד לאמצע הצלע שמולו. 1) מצאו את האמצע של הקטע BC (איקס של B פלוס איקס של C, לחלק ל-2). תקבלו את הנקודה (4,0). 2) מצאו את משוואת הישר שעובר בין הנקודה A לבין אמצע הקטע שמצאתם.",
        solution_steps: [
            { 
                verbal_explanation: "תיכון מחבר את הקודקוד בדיוק אל אמצע הצלע שממול. נחשב את האמצע של הצלע בי-סי על ידי ממוצע.", 
                math_expression: "<div dir='ltr'>x = (2 + 6) / 2 = 4</div>" 
            },
            { 
                verbal_explanation: "מכיוון ששני הקצוות נמצאים על ציר איקס, הוואי נשאר אפס. קצה התיכון שלנו יושב בנקודה זו.", 
                math_expression: "<div dir='ltr'>M(4, 0)</div>" 
            },
            { 
                verbal_explanation: "כעת נמצא את משוואת הקו המחבר את קודקוד איי עם האמצע. נתחיל מחישוב שיפוע התיכון.", 
                math_expression: "<div dir='ltr'>m = (0 - 6) / (4 - 0)</div>" 
            },
            { 
                verbal_explanation: "נפתור את השבר ונמצא את השיפוע (מינוס שישה רבעים, שמצטמצם למינוס אחת וחצי).", 
                math_expression: "<div dir='ltr'>m = -6 / 4 = -1.5</div>" 
            },
            { 
                verbal_explanation: "נקודת ההתחלה של התיכון יושבת על ציר הוואי (כי האיקס הוא אפס). זה אומר שהמספר שש הוא המספר החופשי שלנו.", 
                math_expression: "<div dir='ltr'>A(0, 6) &nbsp;&#10132;&nbsp; b = 6</div>" 
            },
            { 
                verbal_explanation: "נרכיב את משוואת הישר מהשיפוע והמספר החופשי למשוואה אחת סופית.", 
                math_expression: "<div dir='ltr'>y = -1.5x + 6</div>" 
            }
        ],
        final_answer: "y = -1.5x + 6"
    }
];