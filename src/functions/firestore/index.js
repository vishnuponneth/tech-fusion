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


export const getSectionsAndVideosByCourseId = async (courseId) => {
    try {
        const courseDoc = doc(db, 'courses', courseId);
        const sectionsCollection = collection(courseDoc, 'sections');
        const sectionsSnapshot = await getDocs(sectionsCollection);

        const sections = await Promise.all(sectionsSnapshot.docs.map(async (sectionDoc) => {
            const sectionData = sectionDoc.data();
            const videosCollection = collection(sectionDoc.ref, 'videos');
            const videosSnapshot = await getDocs(videosCollection);

            // Filter videos with a valid URL
            const validVideos = videosSnapshot.docs
                .map(videoDoc => ({
                    id: videoDoc.id,
                    ...videoDoc.data(),
                }))

            return {
                id: sectionDoc.id,
                title: sectionData.title,
                description: sectionData.description,
                videos: validVideos,
            };
        }));

        return sections;
    } catch (error) {
        console.error(`Error getting sections and videos for course ID ${courseId}:`, error);
        throw error;
    }
};

