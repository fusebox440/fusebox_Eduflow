import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { HiOutlineCurrencyRupee } from "react-icons/hi"
import { MdNavigateNext } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"

import {
  addCourseDetails,
  editCourseDetails,
  fetchCourseCategories,
} from "../../../../../services/operations/courseDetailsAPI"
import { setCourse, setStep } from "../../../../../slices/courseSlice"
import { COURSE_STATUS } from "../../../../../utils/constants"
import IconBtn from "../../../../common/IconBtn"
import Upload from "../Upload"
import ChipInput from "./ChipInput"
import RequirementsField from "./RequirementField"
import { categories } from "../../../../../services/apis"

export default function CourseInformationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)
  const { course, editCourse } = useSelector((state) => state.course)

  const [loading, setLoading] = useState(false)
  const [courseCategories, setCourseCategories] = useState([])

  // ================= FETCH CATEGORIES + EDIT MODE =================
  useEffect(() => {
    const getCategories = async () => {
      setLoading(true)
      const categories = await fetchCourseCategories()
      if (categories?.length > 0) {
        setCourseCategories(categories)
      }
      setLoading(false)
    }

    if (editCourse && course) {
      setValue("courseTitle", course.courseName)
      setValue("courseShortDesc", course.courseDescription)
      setValue("coursePrice", course.price)
      setValue("courseTags", course.tag)
      setValue("courseBenefits", course.whatYouWillLearn)
      setValue("courseCategory", course.category?._id)
      setValue("courseRequirements", course.instructions)
      setValue("courseImage", course.thumbnail)
    }

    getCategories()
  }, [editCourse, course, setValue])

  // ================= CHECK FORM CHANGES =================
  const isFormUpdated = () => {
    const currentValues = getValues()

    return (
      currentValues.courseTitle !== course.courseName ||
      currentValues.courseShortDesc !== course.courseDescription ||
      Number(currentValues.coursePrice) !== Number(course.price) ||
      currentValues.courseTags.toString() !== course.tag.toString() ||
      currentValues.courseBenefits !== course.whatYouWillLearn ||
      currentValues.courseCategory !== course.category._id ||
      currentValues.courseRequirements.toString() !==
        course.instructions.toString() ||
      currentValues.courseImage !== course.thumbnail
    )
  }

  // ================= SUBMIT =================
  const onSubmit = async (data) => {
    if (editCourse) {
      if (!isFormUpdated()) {
        toast.error("No changes made to the form")
        return
      }

      const formData = new FormData()
      formData.append("courseId", course._id)

      if (data.courseTitle !== course.courseName)
        formData.append("courseName", data.courseTitle)

      if (data.courseShortDesc !== course.courseDescription)
        formData.append("courseDescription", data.courseShortDesc)

      if (Number(data.coursePrice) !== Number(course.price))
        formData.append("price", data.coursePrice)

      if (data.courseTags.toString() !== course.tag.toString())
        formData.append("tag", JSON.stringify(data.courseTags))

      if (data.courseBenefits !== course.whatYouWillLearn)
        formData.append("whatYouWillLearn", data.courseBenefits)

      if (data.courseCategory !== course.category._id)
        formData.append("category", data.courseCategory)

      if (
        data.courseRequirements.toString() !==
        course.instructions.toString()
      )
        formData.append(
          "instructions",
          JSON.stringify(data.courseRequirements)
        )

      if (data.courseImage !== course.thumbnail)
        formData.append("thumbnailImage", data.courseImage)

      setLoading(true)
      const result = await editCourseDetails(formData, token)
      setLoading(false)

      if (result) {
        dispatch(setCourse(result))
        dispatch(setStep(2))
      }

      return
    }

    // ================= CREATE COURSE =================
    const formData = new FormData()
    formData.append("courseName", data.courseTitle)
    formData.append("courseDescription", data.courseShortDesc)
    formData.append("price", data.coursePrice)
    formData.append("tag", JSON.stringify(data.courseTags))
    formData.append("whatYouWillLearn", data.courseBenefits)
    formData.append("category", data.courseCategory)
    formData.append("instructions", JSON.stringify(data.courseRequirements))
    formData.append("status", COURSE_STATUS.DRAFT)
    formData.append("thumbnailImage", data.courseImage)

    setLoading(true)
    const result = await addCourseDetails(formData, token)
    setLoading(false)

    if (result) {
      dispatch(setCourse(result))
      dispatch(setStep(2))
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-md border border-richblack-700 bg-richblack-800 p-6"
    >
      {/* Course Title */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5">
          Course Title <sup className="text-pink-200">*</sup>
        </label>
        <input
          {...register("courseTitle", { required: true })}
          placeholder="Enter Course Title"
          className="form-style w-full"
        />
        {errors.courseTitle && (
          <span className="text-xs text-pink-200">
            Course title is required
          </span>
        )}
      </div>

      {/* Short Description */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5">
          Course Short Description <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          {...register("courseShortDesc", { required: true })}
          className="form-style min-h-[130px]"
          placeholder="Enter Description"
        />
      </div>

      {/* Price */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5">
          Course Price <sup className="text-pink-200">*</sup>
        </label>
        <div className="relative">
          <input
            {...register("coursePrice", { required: true, valueAsNumber: true })}
            className="form-style w-full pl-12"
            placeholder="Enter Price"
          />
          <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-richblack-400" />
        </div>
      </div>

      {/* Category */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5">
          Course Category <sup className="text-pink-200">*</sup>
        </label>
        <select
          {...register("courseCategory", { required: false })}
          className="form-style w-full"
        >
          <option value="">Choose a Category</option>
          {!loading &&
            courseCategories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
        </select>
      </div>

      {/* Tags */}
      <ChipInput
        label="Tags"
        name="courseTags"
        register={register}
        setValue={setValue}
        errors={errors}
      />

      {/* Thumbnail */}
      <Upload
        name="courseImage"
        label="Course Thumbnail"
        register={register}
        setValue={setValue}
        errors={errors}
        editData={editCourse ? course.thumbnail : null}
      />

      {/* Benefits */}
      <textarea
        {...register("courseBenefits", { required: true })}
        className="form-style min-h-[130px]"
        placeholder="Benefits of the course"
      />

      {/* Requirements */}
      <RequirementsField
        name="courseRequirements"
        register={register}
        setValue={setValue}
        errors={errors}
      />

      {/* Buttons */}
      <div className="flex justify-end gap-2">
        {editCourse && (
          <button
            type="button"
            onClick={() => dispatch(setStep(2))}
            className="rounded-md bg-richblack-300 px-5 py-2 font-semibold text-richblack-900"
          >
            Continue Without Saving
          </button>
        )}
        <IconBtn disabled={loading} text={editCourse ? "Save Changes" : "Next"}>
          <MdNavigateNext />
        </IconBtn>
      </div>
    </form>
  )
}
