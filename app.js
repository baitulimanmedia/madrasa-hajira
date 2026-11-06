// ==========================================
// মাদ্রাসা হাজিরা ম্যানেজমেন্ট
// DEMO VERSION
// ==========================================


// ==========================================
// ডেমো ক্লাস
// ==========================================

const DEMO_CLASSES = [
    {
        id: "class-1",
        name: "হেফজ ও হাফেজ",
        active: true
    },
    {
        id: "class-2",
        name: "হেফজ — ক",
        active: true
    },
    {
        id: "class-3",
        name: "হেফজ — খ",
        active: true
    },
    {
        id: "class-4",
        name: "হেফজ — গ",
        active: true
    },
    {
        id: "class-5",
        name: "নাজেরা",
        active: true
    },
    {
        id: "class-6",
        name: "বক্তব্য",
        active: true
    }
];


// ==========================================
// ডেমো ছাত্র
// ==========================================

const DEMO_STUDENTS = [

    // হেফজ ও হাফেজ
    {
        id: "student-001",
        name: "আবু বকর",
        roll: 1,
        classId: "class-1",
        active: true
    },
    {
        id: "student-002",
        name: "আব্দুল্লাহ",
        roll: 2,
        classId: "class-1",
        active: true
    },
    {
        id: "student-003",
        name: "মুশতাক",
        roll: 3,
        classId: "class-1",
        active: true
    },
    {
        id: "student-004",
        name: "মুরসালিন",
        roll: 4,
        classId: "class-1",
        active: true
    },
    {
        id: "student-005",
        name: "আব্দুল আহাদ",
        roll: 5,
        classId: "class-1",
        active: true
    },
    {
        id: "student-006",
        name: "আবু সাঈদ",
        roll: 6,
        classId: "class-1",
        active: true
    },
    {
        id: "student-007",
        name: "ইলিয়াছ",
        roll: 7,
        classId: "class-1",
        active: true
    },
    {
        id: "student-008",
        name: "কাউছার",
        roll: 8,
        classId: "class-1",
        active: true
    },
    {
        id: "student-009",
        name: "তাওহিদ",
        roll: 9,
        classId: "class-1",
        active: true
    },
    {
        id: "student-010",
        name: "সিয়াম",
        roll: 10,
        classId: "class-1",
        active: true
    },


    // হেফজ — ক
    {
        id: "student-011",
        name: "জিহাদ",
        roll: 1,
        classId: "class-2",
        active: true
    },
    {
        id: "student-012",
        name: "আলিফ",
        roll: 2,
        classId: "class-2",
        active: true
    },
    {
        id: "student-013",
        name: "আবু হুরায়রা",
        roll: 3,
        classId: "class-2",
        active: true
    },
    {
        id: "student-014",
        name: "হাসান",
        roll: 4,
        classId: "class-2",
        active: true
    },
    {
        id: "student-015",
        name: "আওলাদ",
        roll: 5,
        classId: "class-2",
        active: true
    },


    // হেফজ — খ
    {
        id: "student-016",
        name: "হুজায়ফা",
        roll: 1,
        classId: "class-3",
        active: true
    },
    {
        id: "student-017",
        name: "আবু সাঈদ",
        roll: 2,
        classId: "class-3",
        active: true
    },
    {
        id: "student-018",
        name: "সাকিব",
        roll: 3,
        classId: "class-3",
        active: true
    },
    {
        id: "student-019",
        name: "মুহাম্মদ",
        roll: 4,
        classId: "class-3",
        active: true
    },
    {
        id: "student-020",
        name: "ওমর",
        roll: 5,
        classId: "class-3",
        active: true
    },


    // হেফজ — গ
    {
        id: "student-021",
        name: "ইব্রাহিম",
        roll: 1,
        classId: "class-4",
        active: true
    },
    {
        id: "student-022",
        name: "ইউসুফ",
        roll: 2,
        classId: "class-4",
        active: true
    },
    {
        id: "student-023",
        name: "মুসা",
        roll: 3,
        classId: "class-4",
        active: true
    },
    {
        id: "student-024",
        name: "আনাস",
        roll: 4,
        classId: "class-4",
        active: true
    },
    {
        id: "student-025",
        name: "ওসমান",
        roll: 5,
        classId: "class-4",
        active: true
    },


    // নাজেরা
    {
        id: "student-026",
        name: "আহমাদ",
        roll: 1,
        classId: "class-5",
        active: true
    },
    {
        id: "student-027",
        name: "আনাস",
        roll: 2,
        classId: "class-5",
        active: true
    },
    {
        id: "student-028",
        name: "রায়হান",
        roll: 3,
        classId: "class-5",
        active: true
    },
    {
        id: "student-029",
        name: "সাদ",
        roll: 4,
        classId: "class-5",
        active: true
    },
    {
        id: "student-030",
        name: "সালমান",
        roll: 5,
        classId: "class-5",
        active: true
    },


    // বক্তব্য
    {
        id: "student-031",
        name: "আব্দুর রহমান",
        roll: 1,
        classId: "class-6",
        active: true
    },
    {
        id: "student-032",
        name: "মাহফুজ",
        roll: 2,
        classId: "class-6",
        active: true
    },
    {
        id: "student-033",
        name: "নাঈম",
        roll: 3,
        classId: "class-6",
        active: true
    },
    {
        id: "student-034",
        name: "রিফাত",
        roll: 4,
        classId: "class-6",
        active: true
    },
    {
        id: "student-035",
        name: "ফাহিম",
        roll: 5,
        classId: "class-6",
        active: true
    }
];


// ==========================================
// DATA LOAD
// ==========================================

function loadData(key, defaultData) {

    try {

        const saved = localStorage.getItem(key);

        if (saved !== null) {
            return JSON.parse(saved);
        }

    } catch (error) {

        console.error("Local Storage read error:", error);

    }

    const copy = JSON.parse(JSON.stringify(defaultData));

    try {
        localStorage.setItem(key, JSON.stringify(copy));
    } catch (error) {
        console.error("Local Storage write error:", error);
    }

    return copy;
}


function writeStorage(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

        return true;

    } catch (error) {

        console.error("Local Storage write error:", error);

        alert(
            "⚠️ ডাটা সংরক্ষণ করা যাচ্ছে না। ব্রাউজারের Local Storage অনুমতি পরীক্ষা করুন।"
        );

        return false;
    }
}


// ==========================================
// CLASS DATA
// ==========================================

let classes = loadData(
    "madrasa_classes",
    DEMO_CLASSES
);


// ==========================================
// STUDENT DATA
// ==========================================

let students = loadData(
    "madrasa_students",
    DEMO_STUDENTS
);


// ==========================================
// পুরনো ডাটায় ছাত্র না থাকলে
// DEMO ছাত্র যোগ করা
// ==========================================

function makeSureDemoStudentsExist() {

    let changed = false;

    DEMO_STUDENTS.forEach(demoStudent => {

        const exists = students.some(
            student =>
                student.id === demoStudent.id
        );

        if (!exists) {

            students.push(
                demoStudent
            );

            changed = true;

        }

    });


    // পুরনো ক্লাস না থাকলে যোগ করা

    DEMO_CLASSES.forEach(demoClass => {

        const exists = classes.some(
            item =>
                item.id === demoClass.id
        );

        if (!exists) {

            classes.push(
                demoClass
            );

            changed = true;

        }

    });


    if (changed) {

        saveStudents();
        saveClasses();

    }

}


function saveStudents() {
    writeStorage("madrasa_students", students);
}


function saveClasses() {
    writeStorage("madrasa_classes", classes);
}


makeSureDemoStudentsExist();


// ==========================================
// SETTINGS
// ==========================================

let settings = loadData(
    "madrasa_settings",
    {
        name: "মাদ্রাসা হাজিরা ম্যানেজমেন্ট",
        address: "মাদ্রাসার ঠিকানা",
        phone: "",
        extra: ""
    }
);


// ==========================================
// ATTENDANCE DATA
// ==========================================

let attendance = loadData(
    "madrasa_attendance",
    {}
);


function saveAttendance() {
    writeStorage("madrasa_attendance", attendance);
}


// ==========================================
// ELEMENTS
// ==========================================

const classSelect =
    document.getElementById(
        "classSelect"
    );

const attendanceDate =
    document.getElementById(
        "attendanceDate"
    );

const studentList =
    document.getElementById(
        "studentList"
    );


// ==========================================
// DATE
// ==========================================

function getToday() {

    const now = new Date();

    const year =
        now.getFullYear();

    const month =
        String(
            now.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            now.getDate()
        ).padStart(2, "0");

    return `${year}-${month}-${day}`;

}


if (!attendanceDate.value) {

    attendanceDate.value =
        getToday();

}


// ==========================================
// HEADER
// ==========================================

function updateHeader() {

    const name =
        document.getElementById(
            "headerMadrasaName"
        );

    const address =
        document.getElementById(
            "headerMadrasaAddress"
        );


    if (name) {

        name.textContent =
            settings.name ||
            "মাদ্রাসা হাজিরা";

    }


    if (address) {

        address.textContent =
            settings.address ||
            "Attendance Management System";

    }

}


updateHeader();


// ==========================================
// CLASS SELECT
// ==========================================

function renderClassSelect() {

    classSelect.innerHTML = `
        <option value="">
            ক্লাস নির্বাচন করুন
        </option>
    `;


    classes
        .filter(
            item =>
                item.active !== false
        )
        .forEach(item => {

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                item.id;

            option.textContent =
                item.name;

            classSelect.appendChild(
                option
            );

        });

}


renderClassSelect();


// ==========================================
// CLASS STUDENTS
// ==========================================

function getStudentsByClass(
    classId
) {

    return students
        .filter(
            student =>
                student.classId === classId &&
                student.active !== false
        )
        .sort(
            (a, b) =>
                Number(a.roll) -
                Number(b.roll)
        );

}


// ==========================================
// GET ATTENDANCE
// ==========================================

function getClassAttendance() {

    const date =
        attendanceDate.value;

    const classId =
        classSelect.value;


    if (!date || !classId) {

        return {};

    }


    if (!attendance[date]) {

        attendance[date] = {};

    }


    if (!attendance[date][classId]) {

        attendance[date][classId] = {};

    }


    return attendance[date][classId];

}


// ==========================================
// LOAD STUDENTS
// ==========================================

function loadStudents() {

    const classId =
        classSelect.value;


    if (!classId) {

        studentList.innerHTML = `
            <div class="empty-state">

                <div class="empty-icon">
                    👨‍🎓
                </div>

                <h3>
                    একটি ক্লাস নির্বাচন করুন
                </h3>

                <p>
                    উপরের ক্লাসের তালিকা থেকে
                    একটি ক্লাস নির্বাচন করুন।
                </p>

            </div>
        `;

        updateSummary();

        return;

    }


    const selectedClass =
        classes.find(
            item =>
                item.id === classId
        );


    const classStudents =
        getStudentsByClass(
            classId
        );


    document.getElementById(
        "selectedClassText"
    ).textContent =
        `${selectedClass.name} — হাজিরা`;


    studentList.innerHTML = "";


    const classAttendance =
        getClassAttendance();


    // ======================================
    // প্রতিটি ছাত্র
    // ======================================

    classStudents.forEach(
        student => {

            if (
                !classAttendance[
                    student.id
                ]
            ) {

                classAttendance[
                    student.id
                ] = {

                    status:
                        "present",

                    lateMinutes:
                        0

                };

            }


            const record =
                classAttendance[
                    student.id
                ];


            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "student-row";


            row.dataset.studentId =
                student.id;


            row.innerHTML = `

                <div class="student-number">
                    ${student.roll}
                </div>


                <div class="student-name">
                    ${student.name}
                </div>


                <!-- উপস্থিত -->

                <button
                    class="status-toggle
                    present-toggle
                    ${
                        record.status === "present"
                            ? "active"
                            : ""
                    }"
                    data-status="present"
                >

                    <span class="toggle-light">
                        ●
                    </span>

                    <span>
                        উপস্থিত
                    </span>

                </button>


                <!-- অনুপস্থিত -->

                <button
                    class="status-toggle
                    absent-toggle
                    ${
                        record.status === "absent"
                            ? "active"
                            : ""
                    }"
                    data-status="absent"
                >

                    <span class="toggle-light">
                        ●
                    </span>

                    <span>
                        অনুপস্থিত
                    </span>

                </button>


                <!-- দেরিতে -->

                <button
                    class="status-toggle
                    late-toggle
                    ${
                        record.status === "late"
                            ? "active"
                            : ""
                    }"
                    data-status="late"
                >

                    <span class="toggle-light">
                        ●
                    </span>

                    <span>
                        দেরিতে
                    </span>

                </button>


                <!-- অসুস্থ -->

                <button
                    class="status-toggle
                    sick-toggle
                    ${
                        record.status === "sick"
                            ? "active"
                            : ""
                    }"
                    data-status="sick"
                >

                    <span class="toggle-light">
                        ●
                    </span>

                    <span>
                        অসুস্থ
                    </span>

                </button>


                <!-- ছুটি -->

                <button
                    class="status-toggle
                    leave-toggle
                    ${
                        record.status === "leave"
                            ? "active"
                            : ""
                    }"
                    data-status="leave"
                >

                    <span class="toggle-light">
                        ●
                    </span>

                    <span>
                        ছুটি
                    </span>

                </button>


                <!-- দেরির সময় -->

                <div
                    class="late-box"
                    ${
                        record.status === "late"
                            ? ""
                            : 'style="display:none"'
                    }
                >

                    <span>
                        কত মিনিট দেরি?
                    </span>

                    <select
                        class="late-minutes"
                    >

                        <option
                            value="5"
                            ${
                                record.lateMinutes == 5
                                    ? "selected"
                                    : ""
                            }
                        >
                            ৫ মিনিট
                        </option>

                        <option
                            value="10"
                            ${
                                record.lateMinutes == 10
                                    ? "selected"
                                    : ""
                            }
                        >
                            ১০ মিনিট
                        </option>

                        <option
                            value="15"
                            ${
                                record.lateMinutes == 15
                                    ? "selected"
                                    : ""
                            }
                        >
                            ১৫ মিনিট
                        </option>

                        <option
                            value="20"
                            ${
                                record.lateMinutes == 20
                                    ? "selected"
                                    : ""
                            }
                        >
                            ২০ মিনিট
                        </option>

                        <option
                            value="30"
                            ${
                                record.lateMinutes == 30
                                    ? "selected"
                                    : ""
                            }
                        >
                            ৩০ মিনিট
                        </option>

                        <option
                            value="45"
                            ${
                                record.lateMinutes == 45
                                    ? "selected"
                                    : ""
                            }
                        >
                            ৪৫ মিনিট
                        </option>

                        <option
                            value="60"
                            ${
                                record.lateMinutes == 60
                                    ? "selected"
                                    : ""
                            }
                        >
                            ১ ঘণ্টা
                        </option>

                    </select>

                </div>

            `;


            studentList.appendChild(
                row
            );

        }
    );


    saveAttendance();

    attachStatusEvents();

    updateSummary();

}


// ==========================================
// STATUS TOGGLE
// ==========================================

function attachStatusEvents() {

    document
        .querySelectorAll(
            ".student-row"
        )
        .forEach(row => {

            const studentId =
                row.dataset.studentId;


            const buttons =
                row.querySelectorAll(
                    ".status-toggle"
                );


            buttons.forEach(button => {

                button.addEventListener(
                    "click",
                    function () {

                        const status =
                            this.dataset.status;


                        const data =
                            getClassAttendance();


                        data[
                            studentId
                        ] = {

                            status:
                                status,

                            lateMinutes:
                                status === "late"
                                    ? (
                                        data[
                                            studentId
                                        ]?.lateMinutes ||
                                        5
                                    )
                                    : 0

                        };


                        // সব Toggle OFF

                        buttons.forEach(
                            btn =>
                                btn.classList
                                    .remove(
                                        "active"
                                    )
                        );


                        // শুধু নির্বাচিত Toggle ON

                        this.classList.add(
                            "active"
                        );


                        // দেরির সময়

                        const lateBox =
                            row.querySelector(
                                ".late-box"
                            );


                        if (
                            status ===
                            "late"
                        ) {

                            lateBox.style.display =
                                "flex";

                        } else {

                            lateBox.style.display =
                                "none";

                        }


                        saveAttendance();

                        updateSummary();

                    }
                );

            });


            const lateSelect =
                row.querySelector(
                    ".late-minutes"
                );


            if (lateSelect) {

                lateSelect.addEventListener(
                    "change",
                    function () {

                        const data =
                            getClassAttendance();


                        if (
                            !data[
                                studentId
                            ]
                        ) {

                            data[
                                studentId
                            ] = {

                                status:
                                    "late",

                                lateMinutes:
                                    5

                            };

                        }


                        data[
                            studentId
                        ].lateMinutes =
                            Number(
                                this.value
                            );


                        saveAttendance();

                    }
                );

            }

        });

}


// ==========================================
// SUMMARY
// ==========================================

function updateSummary() {

    const classId =
        classSelect.value;


    const studentsInClass =
        getStudentsByClass(
            classId
        );


    const data =
        getClassAttendance();


    let present = 0;
    let absent = 0;
    let late = 0;
    let sick = 0;
    let leave = 0;


    studentsInClass.forEach(
        student => {

            const record =
                data[
                    student.id
                ];


            const status =
                record?.status ||
                "present";


            if (
                status === "present"
            ) {
                present++;
            }


            if (
                status === "absent"
            ) {
                absent++;
            }


            if (
                status === "late"
            ) {
                late++;
            }


            if (
                status === "sick"
            ) {
                sick++;
            }


            if (
                status === "leave"
            ) {
                leave++;
            }

        }
    );


    document.getElementById(
        "totalStudents"
    ).textContent =
        studentsInClass.length;


    document.getElementById(
        "presentCount"
    ).textContent =
        present;


    document.getElementById(
        "absentCount"
    ).textContent =
        absent;


    document.getElementById(
        "lateCount"
    ).textContent =
        late;


    document.getElementById(
        "sickCount"
    ).textContent =
        sick;


    document.getElementById(
        "leaveCount"
    ).textContent =
        leave;

}


// ==========================================
// সবাই উপস্থিত
// ==========================================

document
    .getElementById(
        "allPresentBtn"
    )
    .addEventListener(
        "click",
        function () {

            const data =
                getClassAttendance();


            getStudentsByClass(
                classSelect.value
            )
            .forEach(student => {

                data[
                    student.id
                ] = {

                    status:
                        "present",

                    lateMinutes:
                        0

                };

            });


            saveAttendance();

            loadStudents();

        }
    );


// ==========================================
// সবাই অনুপস্থিত
// ==========================================

document
    .getElementById(
        "allAbsentBtn"
    )
    .addEventListener(
        "click",
        function () {

            const data =
                getClassAttendance();


            getStudentsByClass(
                classSelect.value
            )
            .forEach(student => {

                data[
                    student.id
                ] = {

                    status:
                        "absent",

                    lateMinutes:
                        0

                };

            });


            saveAttendance();

            loadStudents();

        }
    );


// ==========================================
// CLASS CHANGE
// ==========================================

classSelect.addEventListener(
    "change",
    loadStudents
);


attendanceDate.addEventListener(
    "change",
    loadStudents
);


// ==========================================
// SAVE ATTENDANCE BUTTON
// ==========================================

const saveAttendanceBtn =
    document.getElementById(
        "saveAttendanceBtn"
    );


if (saveAttendanceBtn) {

    saveAttendanceBtn.addEventListener(
        "click",
        function () {

            saveAttendance();

            alert(
                "✅ হাজিরা সফলভাবে সংরক্ষণ হয়েছে।"
            );

        }
    );

}


// ==========================================
// DARK MODE
// ==========================================

const darkToggle =
    document.getElementById(
        "darkModeToggle"
    );


const savedTheme =
    localStorage.getItem(
        "madrasa_theme"
    );


if (
    savedTheme === "dark"
) {

    document.body.classList.add(
        "dark"
    );

    if (darkToggle) {

        darkToggle.checked =
            true;

    }

}


if (darkToggle) {

    darkToggle.addEventListener(
        "change",
        function () {

            if (this.checked) {

                document.body.classList.add(
                    "dark"
                );

                localStorage.setItem("madrasa_theme", "dark");

            } else {

                document.body.classList.remove(
                    "dark"
                );

                localStorage.setItem("madrasa_theme", "light");

            }

        }
    );

}


// ==========================================
// SETTINGS
// ==========================================

function loadSettings() {

    const name =
        document.getElementById(
            "madrasaName"
        );

    const address =
        document.getElementById(
            "madrasaAddress"
        );

    const phone =
        document.getElementById(
            "madrasaPhone"
        );

    const extra =
        document.getElementById(
            "madrasaExtra"
        );


    if (name) {

        name.value =
            settings.name || "";

    }


    if (address) {

        address.value =
            settings.address || "";

    }


    if (phone) {

        phone.value =
            settings.phone || "";

    }


    if (extra) {

        extra.value =
            settings.extra || "";

    }

}


loadSettings();


const saveSettingsBtn =
    document.getElementById(
        "saveSettingsBtn"
    );


if (saveSettingsBtn) {

    saveSettingsBtn.addEventListener(
        "click",
        function () {

            settings = {

                name:
                    document.getElementById(
                        "madrasaName"
                    ).value,

                address:
                    document.getElementById(
                        "madrasaAddress"
                    ).value,

                phone:
                    document.getElementById(
                        "madrasaPhone"
                    ).value,

                extra:
                    document.getElementById(
                        "madrasaExtra"
                    ).value

            };


            writeStorage(
                "madrasa_settings",
                settings
            );


            updateHeader();


            alert(
                "✅ মাদ্রাসার তথ্য সংরক্ষণ হয়েছে।"
            );

        }
    );

}


// ==========================================
// INITIAL LOAD
// ==========================================

// প্রথমে হেফজ ও হাফেজ নির্বাচন

if (
    classes.some(
        item =>
            item.id === "class-1"
    )
) {

    classSelect.value =
        "class-1";

}


loadStudents();


// ==========================================
// শেষ
// ==========================================

// ==========================================
// NAVIGATION
// ==========================================

document.querySelectorAll(".nav-btn").forEach(button => {

    button.addEventListener("click", function () {

        const targetId = this.dataset.section;

        document.querySelectorAll(".nav-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        document.querySelectorAll(".page-section").forEach(section => {
            section.classList.remove("active-section");
        });

        this.classList.add("active");

        const target = document.getElementById(targetId);

        if (target) {
            target.classList.add("active-section");
        }

        if (targetId === "classesSection") {
            renderClassManagement();
        }

    });

});


// ==========================================
// CLASS MANAGEMENT
// Rename করলে ID অপরিবর্তিত থাকে
// তাই ছাত্ররা হারিয়ে যাবে না
// ==========================================

const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const cancelModalBtn = document.getElementById("cancelModalBtn");
const addClassBtn = document.getElementById("addClassBtn");
const saveClassBtn = document.getElementById("saveClassBtn");
const classNameInput = document.getElementById("classNameInput");
const modalTitle = document.getElementById("modalTitle");
const classManagementList = document.getElementById("classManagementList");

let editingClassId = null;


function openClassModal(classId = null) {

    editingClassId = classId;

    if (classId) {

        const item = classes.find(c => c.id === classId);

        modalTitle.textContent = "ক্লাসের নাম পরিবর্তন করুন";

        classNameInput.value = item ? item.name : "";

    } else {

        modalTitle.textContent = "নতুন ক্লাস";

        classNameInput.value = "";

    }

    modalOverlay.classList.add("show");

    setTimeout(() => {
        classNameInput.focus();
    }, 50);

}


function closeClassModal() {

    editingClassId = null;

    modalOverlay.classList.remove("show");

    classNameInput.value = "";

}


function renderClassManagement() {

    if (!classManagementList) return;

    classManagementList.innerHTML = "";

    classes.forEach(item => {

        const studentCount = students.filter(
            student =>
                student.classId === item.id &&
                student.active !== false
        ).length;

        const card = document.createElement("div");

        card.className = "class-management-item";

        card.innerHTML = `
            <div class="class-info">
                <div class="class-icon">🏫</div>

                <div>
                    <strong>${escapeHtml(item.name)}</strong>
                    <span>${studentCount} জন ছাত্র</span>
                </div>
            </div>

            <div class="class-actions">

                <button
                    class="secondary-btn edit-class-btn"
                    data-id="${item.id}"
                >
                    ✏️ নাম পরিবর্তন
                </button>

                <button
                    class="danger-btn deactivate-class-btn"
                    data-id="${item.id}"
                >
                    ${item.active === false ? "♻️ চালু করুন" : "⏸️ বন্ধ করুন"}
                </button>

            </div>
        `;

        classManagementList.appendChild(card);

    });


    classManagementList
        .querySelectorAll(".edit-class-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                openClassModal(button.dataset.id);

            });

        });


    classManagementList
        .querySelectorAll(".deactivate-class-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const item = classes.find(
                    c => c.id === button.dataset.id
                );

                if (!item) return;

                item.active = item.active === false;

                saveClasses();

                renderClassManagement();

                renderClassSelect();

                if (
                    classSelect.value === item.id &&
                    item.active === false
                ) {

                    classSelect.value = "";

                    loadStudents();

                }

            });

        });

}


function escapeHtml(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


if (addClassBtn) {

    addClassBtn.addEventListener(
        "click",
        () => openClassModal()
    );

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeClassModal
    );

}


if (cancelModalBtn) {

    cancelModalBtn.addEventListener(
        "click",
        closeClassModal
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        event => {

            if (event.target === modalOverlay) {
                closeClassModal();
            }

        }
    );

}


if (saveClassBtn) {

    saveClassBtn.addEventListener(
        "click",
        function () {

            const name =
                classNameInput.value.trim();

            if (!name) {

                alert("⚠️ ক্লাসের নাম লিখুন।");

                classNameInput.focus();

                return;

            }


            if (editingClassId) {

                const item = classes.find(
                    c => c.id === editingClassId
                );

                if (item) {

                    /*
                     * খুব গুরুত্বপূর্ণ:
                     * শুধু name পরিবর্তন হচ্ছে।
                     * id পরিবর্তন হচ্ছে না।
                     * তাই এই ক্লাসের আগের ছাত্ররা
                     * আগের classId-তেই থাকবে।
                     */

                    item.name = name;

                    saveClasses();

                    renderClassSelect();

                    classSelect.value =
                        editingClassId;

                    loadStudents();

                }

            } else {

                const newClass = {

                    id:
                        "class-" +
                        Date.now(),

                    name: name,

                    active: true

                };

                classes.push(newClass);

                saveClasses();

                renderClassSelect();

                classSelect.value =
                    newClass.id;

                loadStudents();

            }


            renderClassManagement();

            closeClassModal();

        }
    );

}


if (classNameInput) {

    classNameInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                event.preventDefault();

                if (saveClassBtn) {
                    saveClassBtn.click();
                }

            }

            if (event.key === "Escape") {
                closeClassModal();
            }

        }
    );

}


// ==========================================
// CURRENT DATE IN HEADER
// ==========================================

function updateCurrentDate() {

    const element =
        document.getElementById("currentDate");

    if (!element) return;

    const now = new Date();

    element.textContent =
        now.toLocaleDateString(
            "bn-BD",
            {
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        );

}

updateCurrentDate();


// ==========================================
// START CLASS MANAGEMENT
// ==========================================

renderClassManagement();


// ==========================================
// DEBUG / STORAGE STATUS
// ==========================================

window.madrasaAttendance = {

    getData() {

        return {

            classes,
            students,
            attendance,
            settings

        };

    },

    clearAttendance() {

        if (
            confirm(
                "সব হাজিরার ডাটা মুছে ফেলতে চান?"
            )
        ) {

            attendance = {};

            saveAttendance();

            loadStudents();

        }

    }

};
