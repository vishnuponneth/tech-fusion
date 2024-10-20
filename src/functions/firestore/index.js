import { db } from '../../firebase'; // Firestore instance

// Function to get all courses
export const getCourses = async () => {
  try {
    const coursesSnapshot = await db.collection('courses').get();
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
      const videosSnapshot = await db
        .collection('courses')
        .doc(courseId)
        .collection('videos')
        .get();
  
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
      const coursesSnapshot = await db
        .collection('courses')
        .where('type', '==', type)
        .get();
  
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
  
  
