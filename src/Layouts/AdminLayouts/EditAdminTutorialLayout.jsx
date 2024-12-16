import React, { createContext, useEffect, useState } from 'react';
import HeaderPageSection from '../../Components/HeaderPageSection'
import { useNavigate ,useParams} from 'react-router-dom';
import { EditAdminTutorialPage } from "../../Pages/AllPages";
import Loading from '../../Components/Loading';
import axios from 'axios';
import { useAuth } from '../../Context/Auth';

export const TutorialGroupLayout = createContext();

const EditAdminTutorialLayout = () => {

        const auth = useAuth();
        const [isLoading, setIsLoading] = useState(false);
        const [allTutorialGroupsData, setAllTutorialGroupsData] = useState([]);
        const [tutorialGroupEdit, setTutorialGroupEdit] = useState(null);
        const { groupId } = useParams();

       useEffect(() => {
              const fetchData = async () => {
                     setIsLoading(true);
                     try {
                            const response = await axios.get(' https://www.wegostores.com/admin/v1/tutorial_group', {
                                   headers: {
                                          Authorization: `Bearer ${auth.user.token}`,
                                   },
                            });
                            if (response.status === 200) {
                                   console.log(response.data)
                                   setAllTutorialGroupsData(response.data.tutorial_group);
                                }
                     } catch (error) {
                            console.error('Error fetching data:', error);
                     } finally {
                            setIsLoading(false);
                     }
                 };
       fetchData(); }, []);

       useEffect(() => {
              if (allTutorialGroupsData.length > 0 && groupId) {
                     const filteredTutorialGroup = allTutorialGroupsData.find(
                     (group) => group.id === parseInt(groupId)
                     );
                     setTutorialGroupEdit(filteredTutorialGroup);
              }
              }, [allTutorialGroupsData, groupId]);
              
              console.log('allTutorialGroupsData', allTutorialGroupsData); // Logging the whole array
              console.log('tutorialGroupEdit', tutorialGroupEdit);


       const navigate = useNavigate();
       const handleGoBack = () => {
       navigate(-1, { replace: true });
       };

       if (isLoading) {
              return (
                <div className="w-1/4 h-full flex items-start mt-[10%] justify-center m-auto">
                  <Loading />
                </div>
              );
            }
             if (!allTutorialGroupsData.length) {
              return <div className="text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center">No Tutorial Groups data available</div>;
            }
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit Tutorial Group" />
              <TutorialGroupLayout.Provider value={tutorialGroupEdit}>
                     <EditAdminTutorialPage/>
              </TutorialGroupLayout.Provider>
              </>
       )
}

export default EditAdminTutorialLayout
