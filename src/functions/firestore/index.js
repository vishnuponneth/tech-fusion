import { db } from '../../firebase'; // Firestore instance
import { collection, getDocs, query, where, doc } from 'firebase/firestore';

// Function to get all courses
export const getCourses = async () => {
    try {
      const coursesCollection = collection(db, 'courses');
      const coursesSnapshot = await getDocs(coursesCollection);
      const courses = coursesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      return courses;
    } catch (error) {
      console.error('Error getting courses:', error);
      throw error;
    }
  };
  

// Function to get videos from a specific course
export const getVideosByCourseId = async (courseId) => {
    try {
      const courseDoc = doc(db, 'courses', courseId);
      const videosCollection = collection(courseDoc, 'videos');
      const videosSnapshot = await getDocs(videosCollection);
  
      const videos = videosSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      return videos;
    } catch (error) {
      console.error(`Error getting videos for course ID ${courseId}:`, error);
      throw error;
    }
  };

  // Function to get courses by type ("internship" or "subject")
  export const getCoursesByType = async (type) => {
    try {
      const coursesCollection = collection(db, 'courses');
      const coursesQuery = query(coursesCollection, where('type', '==', type));
      const coursesSnapshot = await getDocs(coursesQuery);
  
      const courses = coursesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      return courses;
    } catch (error) {
      console.error(`Error getting courses by type ${type}:`, error);
      throw error;
    }
  };