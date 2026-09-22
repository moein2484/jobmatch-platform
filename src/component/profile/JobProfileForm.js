"use client";

import { z } from "zod";

import {
  Form,
  FormInput,
  FormSelect,
  FormSubmit,
  useFormContext,
} from "@/component/myForm";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "C#",
  "UI/UX",
  "SQL",
  "MongoDB",
];

const experienceOptions = [
  { value: "0", label: "بدون سابقه" },
  { value: "1", label: "کمتر از ۱ سال" },
  { value: "1-3", label: "۱ تا ۳ سال" },
  { value: "3-5", label: "۳ تا ۵ سال" },
  { value: "5+", label: "بیشتر از ۵ سال" },
];

const educationOptions = [
  { value: "diploma", label: "دیپلم" },
  { value: "associate", label: "کاردانی" },
  { value: "bachelor", label: "کارشناسی" },
  { value: "master", label: "کارشناسی ارشد" },
  { value: "phd", label: "دکتری" },
];

const jobTypeOptions = [
  { value: "full-time", label: "تمام وقت" },
  { value: "part-time", label: "پاره وقت" },
  { value: "remote", label: "دورکاری" },
  { value: "contract", label: "پروژه‌ای" },
  { value: "internship", label: "کارآموزی" },
];

const schema = z.object({
  jobTitle: z.string().trim().min(1, "عنوان شغلی را وارد کنید"),

  experience: z.string().min(1, "میزان سابقه کاری را انتخاب کنید"),

  education: z.string().min(1, "سطح تحصیلات را انتخاب کنید"),

  skills: z.array(z.string()).min(1, "حداقل یک مهارت را انتخاب کنید"),

  jobType: z.string().min(1, "نوع همکاری را انتخاب کنید"),

  location: z.string().trim().min(1, "شهر مورد نظر را وارد کنید"),

  salary: z.string().min(1, "حداقل حقوق مورد انتظار را وارد کنید"),
});

function SkillsField() {
  const { watch, setValue } = useFormContext();

  const selectedSkills = watch("skills") || [];

  const toggleSkill = (skill) => {
    const updatedSkills = selectedSkills.includes(skill)
      ? selectedSkills.filter((item) => item !== skill)
      : [...selectedSkills, skill];

    setValue("skills", updatedSkills);
  };

  return (
    <div>
      <div className="mb-3">
        <label className="block text-sm font-medium text-slate-700">
          مهارت‌ها
        </label>

        <p className="mt-1 text-xs text-slate-400">
          مهارت‌هایی که در آن‌ها تجربه یا دانش دارید را انتخاب کنید.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          const selected = selectedSkills.includes(skill);

          return (
            <button
              key={skill}
              type="button"
              onClick={() => toggleSkill(skill)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                selected
                  ? "border-indigo-600 bg-indigo-600 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
              }`}
            >
              {skill}
            </button>
          );
        })}
      </div>

      {selectedSkills.length === 0 && (
        <p className="mt-2 text-xs text-red-500">
          حداقل یک مهارت را انتخاب کنید
        </p>
      )}
    </div>
  );
}

export default function JobProfileForm() {
  const handleSubmit = (data) => {
    console.log("FORM DATA:", data);
  };

  return (
    <Form
      id="job-profile-form"
      schema={schema}
      type="normal"
      validationMode="onSubmit"
      defaultValues={{
        jobTitle: "",
        experience: "",
        education: "",
        skills: [],
        jobType: "",
        location: "",
        salary: "",
      }}
      onSubmit={handleSubmit}
    >
      <div className="space-y-8">
        {/* اطلاعات حرفه‌ای */}
        <section>
          <div className="mb-5">
            <h2 className="text-base font-bold text-slate-900">
              اطلاعات حرفه‌ای
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              درباره تجربه و اطلاعات حرفه‌ای خودت بگو.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormInput
              name="jobTitle"
              label="عنوان شغلی"
              placeholder="مثلاً Frontend Developer"
              required
            />

            <FormSelect
              name="experience"
              label="میزان سابقه کاری"
              options={experienceOptions}
              valueKey="value"
              labelKey="label"
              required
            />

            <FormSelect
              name="education"
              label="سطح تحصیلات"
              options={educationOptions}
              valueKey="value"
              labelKey="label"
              required
            />

            <FormInput
              name="location"
              label="شهر مورد نظر"
              placeholder="مثلاً تهران"
              required
            />
          </div>
        </section>

        <div className="border-t border-slate-100" />

        {/* مهارت‌ها */}
        <section>
          <SkillsField />
        </section>

        <div className="border-t border-slate-100" />

        {/* ترجیحات شغلی */}
        <section>
          <div className="mb-5">
            <h2 className="text-base font-bold text-slate-900">ترجیحات شغلی</h2>

            <p className="mt-1 text-xs text-slate-400">
              نوع موقعیت شغلی مورد نظر خودت را مشخص کن.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormSelect
              name="jobType"
              label="نوع همکاری"
              options={jobTypeOptions}
              valueKey="value"
              labelKey="label"
              required
            />

            <FormInput
              name="salary"
              label="حداقل حقوق مورد انتظار"
              placeholder="مثلاً 30000000"
              type="number"
              required
            />
          </div>
        </section>

        <div className="flex justify-end border-t border-slate-100 pt-6">
          <FormSubmit form="job-profile-form">ذخیره و ادامه</FormSubmit>
        </div>
      </div>
    </Form>
  );
}
