import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ENROLLMENTS_API = `${HTTP_SERVER}/api/users`;

export const enrollInCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(
    `${ENROLLMENTS_API}/${userId}/courses/${courseId}/enroll`
  );
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(
    `${ENROLLMENTS_API}/${userId}/courses/${courseId}/unenroll`
  );
  return response.data;
};

export const findEnrollmentsForUser = async (userId: string) => {
  const response = await axiosWithCredentials.get(
    `${ENROLLMENTS_API}/${userId}/enrollments`
  );
  return response.data;
};
