import { Heading, Subheading } from '@/components/heading'
import {Divider} from '@/components/divider'
import profilePhoto from '../assets/linkedinprofile.jpeg'
import { Badge } from '@/components/badge'
import { Strong, Text, TextLink } from '@/components/text'

import { Button } from '@/components/button'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { useState } from 'react'
import { Textarea } from '@/components/textarea'

import SidebarLayoutMain from '@/components/sidebarlayout'

//Forms
import PersonalInfo from '@/components/user-profile-dialogs/personalinfo'
import WorkExperienceAddDialog from '@/components/user-profile-dialogs/work-experience-add';
import AboutMeDialog from '@/components/user-profile-dialogs/aboutme';
import TournamentExperienceAddDialog from '@/components/user-profile-dialogs/tournament-experience-add';
import HandicapDialog from '@/components/user-profile-dialogs/handicap';
import LanguagesAddDialog from '@/components/user-profile-dialogs/languages-add';
import EducationAddDialog from '@/components/user-profile-dialogs/education-add';
import CertificationAddDialog from '@/components/user-profile-dialogs/certification-add';

import {
    PlusIcon,
    PencilSquareIcon,
 
  } from '@heroicons/react/16/solid'


export default function UserProfile(){

    //States for Dialogs
    const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
    const [isWorkExperienceOpen, setIsWorkExperienceOpen] = useState(false);
    const [isTournamentExperienceOpen, setIsTournamentExperienceOpen] = useState(false);
    const [isPersonalInformationOpen, setIsPersonalInformationOpen] = useState(false);
    const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
    const [isEducationOpen, setIsEducationOpen] = useState(false);
    const [isCertificationOpen, setIsCertificationOpen] = useState(false);
    const [isHandicapOpen, setIsHandicapOpen] = useState(false);

    const [selectedExperience, setSelectedExperience] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedEducation, setSelectedEducation] = useState(null);
    const [selectedCertification, setSelectedCertification] = useState(null);

    //States aggregation from dialogs
    const [aboutMeInfo, setAboutMeInfo] = useState([]);
    const [workExperienceInfo, setWorkExperienceInfo] = useState([]);
    const [tournamentExperienceInfo, setTournamentExperienceInfo] = useState([]);
    const [personalInformationInfo, setPersonalInformationInfo] = useState({});
    const [languageInfo, setLanguageInfo] = useState([]);
    const [educationInfo, setEducationInfo] = useState([]);
    const [certificationInfo, setCertificationInfo] = useState([]);
    const [handicapInformationInfo, setHandicapInformationInfo] = useState({});



    //Work Experience Functions for Adding and Editing the Data
    const handleEditClick = (experience) => {
        setSelectedExperience(experience);
        setIsWorkExperienceOpen(true);
    }

    const handleAddExperienceClick = () => {
        setSelectedExperience(null);
        setIsWorkExperienceOpen(true);
    }

    //Tournament Experience Functions for Adding and Editing the Data
    const handleTournamentEditClick = (experience) => {
        setSelectedExperience(experience);
        setIsTournamentExperienceOpen(true);
    }

    const handleTournamentAddClick = () => {
        setSelectedExperience(null);
        setIsTournamentExperienceOpen(true);
    }

    //Languages Functions for Adding and Editing the Data
    const handleLanguageEditClick = (language) => {
        setSelectedLanguage(language);
        setIsLanguagesOpen(true);
    }

    const handleLanguageAddClick = () => {
        setSelectedLanguage(null);
        setIsLanguagesOpen(true);
    }

    //Education Functions for Adding and Editing the Data
    const handleEducationEditClick = (education) => {
        setSelectedEducation(education);
        setIsEducationOpen(true);
    }

    const handleEducationAddClick = () => {
        setSelectedEducation(null);
        setIsEducationOpen(true);
    }

    //Certification Functions for Adding and Editing the Data
    const handleCertificationEditClick = (certification) => {
        setSelectedCertification(certification);
        setIsCertificationOpen(true);
    }

    const handleCertificationAddClick = () => {
        setSelectedCertification(null);
        setIsCertificationOpen(true);
    }
    
    return (
        <SidebarLayoutMain>
            <div className="grid sm:grid-cols-5 lg:grid-cols-10 gap-4">

                <div className="flex flex-col gap-4 sm:col-span-3 lg:col-span-7">
                    
                    <div className="w-full rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
                        <div className="p-12">
                            <div className="flex items-center justify-between">
                            <h2 className="text-white"> About Me </h2>
                            <button type="button" onClick={() => setIsAboutMeOpen(true)}>
                                <PencilSquareIcon className="w-6 h-6 text-white"/>
                            </button>
                            <AboutMeDialog isAboutMeOpen={isAboutMeOpen} setIsAboutMeOpen={setIsAboutMeOpen} aboutMeInfo={aboutMeInfo} setAboutMeInfo={setAboutMeInfo}/>
                            </div>
                            <div className="text-zinc-400 text-base"> {aboutMeInfo} </div>
                                
                                
                        </div>
                    </div>

                    <div className="w-full p-12 rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
                        <div className=""> 
                            <div className="flex w-full justify-between mb-4">
                                <div className="text-white text-2xl font-medium"> Work Experience </div>
                                <div className="flex gap-2">
                                    <button type="button" onClick={handleAddExperienceClick}>
                                        <PlusIcon className="w-6 h-6 text-white"/>
                                    </button>
                                </div>
                                <WorkExperienceAddDialog isWorkExperienceOpen={isWorkExperienceOpen} setIsWorkExperienceOpen={setIsWorkExperienceOpen} workExperienceInfo={workExperienceInfo} setWorkExperienceInfo={setWorkExperienceInfo} selectedExperience={selectedExperience}/>
                            
                            </div>
                        </div>

                        <div>
                            {workExperienceInfo.map((workExperience) => (
                                <div key={workExperience.id} className="mb-2">
                                    <div className="flex justify-between">
                                        <div className="text-white text-xl font-medium">{workExperience.poloClubName}</div> 
                                        <button onClick={() => handleEditClick(workExperience)}>
                                            <PencilSquareIcon className="w-6 h-6 text-white"/>
                                        </button>
                                    </div>  
                                    <div className="text-white">{workExperience.startDate} - {workExperience.endDate}</div>
                                    <div className="text-white">{workExperience.experienceDescription}</div>
                                  
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    
                    <div className="p-12 w-full rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
                        <div className="mt-4"> 
                            <div className="flex justify-between mb-4">
                                <div className="text-white text-2xl font-medium"> Tournament Experience </div>
                                <div className="flex gap-2">
                                    <button type="button" onClick={handleTournamentAddClick}>
                                        <PlusIcon className="w-6 h-6 text-white" />
                                    </button>
                                </div>
                                <TournamentExperienceAddDialog 
                                    isTournamentExperienceOpen={isTournamentExperienceOpen} 
                                    setIsTournamentExperienceOpen={setIsTournamentExperienceOpen} 
                                    tournamentExperienceInfo={tournamentExperienceInfo} 
                                    setTournamentExperienceInfo={setTournamentExperienceInfo}
                                    selectedExperience={selectedExperience}
                                />

                            </div>
                            
                            <div>
                                {tournamentExperienceInfo.map((tournamentExperience) => (
                                    <div key={tournamentExperience.id} className="mb-2"> 
                                        <div className="flex justify-between">
                                            <div className="text-white text-xl font-medium">{tournamentExperience.tournamentName}</div>
                                            <button onClick={() => handleTournamentEditClick(tournamentExperience)}>
                                                <PencilSquareIcon className="w-6 h-6 text-white"/>
                                            </button>
                                        </div>
                                        <div className="text-white">{tournamentExperience.country}</div>
                                        <div className="text-white">{tournamentExperience.yearPlayed}</div>
                                        
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    </div>

                </div>

                <div className="flex flex-col items-center sm:col-span-2 lg:col-span-3">
                    <div className="bg-gray-950 rounded-xl">
                        <div className="flex flex-col justify-center items-center p-12 w-full ">
                            <img className="h-32 w-32 rounded-full" src={profilePhoto} alt="" />
                            <div className="flex flex-col items-center">
                                <Heading> {personalInformationInfo.name} {personalInformationInfo.surname} </Heading>
                                <Badge color="lime"> {personalInformationInfo.role} </Badge>
                                
                                <Button type="button" onClick={() => setIsPersonalInformationOpen(true)}>
                            Edit Personal Information
                            </Button>
                                <PersonalInfo 
                                    isPersonalInformationOpen={isPersonalInformationOpen}
                                    setIsPersonalInformationOpen={setIsPersonalInformationOpen} 
                                    personalInformationInfo={personalInformationInfo} 
                                    setPersonalInformationInfo={setPersonalInformationInfo}
                                />
                            </div>
                        </div>    

                        <Divider />

                        <div className="p-12">
                            <h3 className="text-white mb-2">Personal Information</h3>
                            <div className="flex flex-col">
                                <div className="text-zinc-400 text-base mr-2"> I'm from: </div>
                                <div className="text-white text-base"> {personalInformationInfo.country} </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-zinc-400 text-base mr-2"> I currently live in: </div>
                                <div className="text-white text-base"> {personalInformationInfo.basedIn} </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-zinc-400 text-base mr-2"> My Home Polo Club is: </div>
                                <div className="text-white text-base"> {personalInformationInfo.homePoloClubs} </div>
                            </div>
                        </div>

                        <Divider />

                    <div className="p-12">
                        <div className="flex items-center justify-between">
                        <h3 className="text-white mb-2"> Handicap</h3>
                            <button type="button" onClick={() => setIsHandicapOpen(true)}>
                                <PlusIcon className="w-6 h-6 text-white"/>
                            </button>
                            <HandicapDialog
                                isHandicapOpen={isHandicapOpen} 
                                setIsHandicapOpen={setIsHandicapOpen} 
                                handicapInformationInfo={handicapInformationInfo} 
                                setHandicapInformationInfo={setHandicapInformationInfo}
                            />
                        </div>
                        <div className="grid gap-8 sm:grid-cols-2">
                            <div>
                                <div className="mt-6 text-white text-lg/6 font-medium sm:text-sm/6">Current Outdoor Handicap</div>
                                <div className="mt-3 text-white text-3xl/8 font-semibold sm:text-2xl/8">{handicapInformationInfo.outdoorHandicap}</div>
                                <div className="mt-3 text-white text-sm/6 sm:text-xs/6">{handicapInformationInfo.outdoorAssociation}</div>
                            </div>
                            <div>
                                <div className="mt-6 text-white text-lg/6 font-medium sm:text-sm/6">Highest Outdoor Handicap</div>
                                <div className="mt-3 text-white text-3xl/8 font-semibold sm:text-2xl/8">{handicapInformationInfo.outdoorHighestHandicap}</div>
                                <div className="mt-3 text-white text-sm/6 sm:text-xs/6">{handicapInformationInfo.outdoorAssociationHighest}</div>
                            </div>
                            <div>
                                <div className="mt-6 text-white text-lg/6 font-medium sm:text-sm/6">Current Arena Handicap</div>
                                <div className="mt-3 text-white text-3xl/8 font-semibold sm:text-2xl/8">{handicapInformationInfo.indoorHandicap}</div>
                                <div className="mt-3 text-white text-sm/6 sm:text-xs/6">{handicapInformationInfo.indoorAssociation}</div>
                            </div>
                            <div>
                                <div className="mt-6 text-white text-lg/6 font-medium sm:text-sm/6">Highest Arena Handicap</div>
                                <div className="mt-3 text-white text-3xl/8 font-semibold sm:text-2xl/8">{handicapInformationInfo.indoorHighestHandicap}</div>
                                <div className="mt-3 text-white text-sm/6 sm:text-xs/6">{handicapInformationInfo.indoorAssociationHighest}</div>
                            </div>
                        </div>
                    </div>


                        <Divider />

                        <div className="flex flex-col p-12 w-full">
                            <div className="flex items-center justify-between">
                                <h3 className="text-white mb-2"> Languages </h3>
                                <button type="button" onClick={handleLanguageAddClick}>
                                <PlusIcon className="w-6 h-6 text-white"/>
                            </button>
                            </div>
                            {languageInfo.map((language) => (
                                <div key={language.id} className="flex flex-col">
                                    <div className="text-zinc-400 text-base"> {language.language} </div>
                                    <div className="text-white text-base"> {language.level} </div>
                                    <button onClick={() => handleLanguageEditClick(language)}>
                                        <PencilSquareIcon className="w-6 h-6 text-white"/>
                                    </button>
                                </div>
                            ))}
                            <LanguagesAddDialog
                                isLanguagesOpen={isLanguagesOpen} 
                                setIsLanguagesOpen={setIsLanguagesOpen} 
                                languageInfo={languageInfo} 
                                setLanguageInfo={setLanguageInfo}
                                selectedLanguage={selectedLanguage}
                            />

                        </div>

                        <Divider />

                        <div className="flex flex-col p-12 w-full">
                            <div className="flex items-center justify-between">
                                <h3 className="text-white mb-4"> Education</h3>
                                <button type="button" onClick={handleEducationAddClick}>
                                    <PlusIcon className="w-6 h-6 text-white"/>
                                </button>
                            </div>
                            {educationInfo.map((education) => (
                                <div key={education.id} className="flex flex-col mb-4">
                                    <div className="flex justify-between"> 
                                        <div>
                                            <div className="text-white text-lg"> {education.institution} </div>
                                        </div>
                                        <button onClick={() => handleEducationEditClick(education)}>
                                            <PencilSquareIcon className="w-6 h-6 text-white"/>
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-zinc-400 text-base"> Degree </div>
                                        <div className="text-white text-base"> {education.degree} </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-zinc-400 text-base"> Graduation Year </div>
                                        <div className="text-white text-base"> {education.graduationYear} </div>
                                    </div>
                                </div>
                            ))}
                            <EducationAddDialog 
                                isEducationOpen={isEducationOpen} 
                                setIsEducationOpen={setIsEducationOpen} 
                                educationInfo={educationInfo} 
                                setEducationInfo={setEducationInfo}
                                selectedEducation={selectedEducation}
                            />
                        </div>

                        <Divider />

                        <div className="flex flex-col p-12 w-full">
                            <div className="flex items-center justify-between">
                                <h3 className="text-white mb-2"> Certification</h3>
                                <button type="button" onClick={handleCertificationAddClick}>
                                    <PlusIcon className="w-6 h-6 text-white"/>
                                </button>
                            </div>
                            {certificationInfo.map((certification) => (
                                <div key={certification.id} className="flex flex-col">
                                    <div className="text-zinc-400 text-base"> {certification.certificationIssuer} </div>
                                    <div className="text-white text-base"> {certification.certificationName} </div>
                                    <div className="text-white text-base"> {certification.certificationYear} </div>
                                    <button onClick={() => handleCertificationEditClick(certification)}>
                                        <PencilSquareIcon className="w-6 h-6 text-white"/>
                                    </button>
                                </div>
                            ))} 
                            <CertificationAddDialog 
                                isCertificationOpen={isCertificationOpen} 
                                setIsCertificationOpen={setIsCertificationOpen} 
                                certificationInfo={certificationInfo} 
                                setCertificationInfo={setCertificationInfo}
                                selectedCertification={selectedCertification}
                            />
                        </div>
                    </div>
                </div> 
            </div>
        </SidebarLayoutMain>
    )
}
