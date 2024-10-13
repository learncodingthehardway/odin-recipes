import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Field, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { useState, useEffect } from 'react'

export default function EducationAddDialog({isEducationOpen, setIsEducationOpen, educationInfo, setEducationInfo, selectedEducation = null}) {
    
    //States for the form fields
    const [institution, setInstitution] = useState('');
    const [degree, setDegree] = useState('');
    const [graduationYear, setGraduationYear] = useState('');

    
    //Edit or add?
    const isEditMode = selectedEducation !== null;
    
    //Function that deletes the selected education
    const handleDeleteEducation = () => {
        setEducationInfo(educationInfo.filter((edu) => edu.id !== selectedEducation.id));
        setIsEducationOpen(false);
    }


    useEffect(() => {
        if (isEditMode) {
            setInstitution(selectedEducation.institution);
            setDegree(selectedEducation.degree);
            setGraduationYear(selectedEducation.graduationYear);
        } else {
            setInstitution('');
            setDegree('');
            setGraduationYear('');
        }
    }, [isEditMode, selectedEducation]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditMode) {
            //Edit
            setEducationInfo((prev) =>
                prev.map((edu) =>
                    edu.id === selectedEducation.id ? { ...edu, institution, degree, graduationYear } : edu
                )
            );
        } else {
            //Add
            setEducationInfo([...educationInfo, {
                institution: institution,
                degree: degree,
                graduationYear: graduationYear,
                id: crypto.randomUUID()
            }]);
        }
        setIsEducationOpen(false);
    }
    
    return (
        <Dialog open={isEducationOpen} onClose={() => setIsEducationOpen(false)}>
        <DialogTitle>Education</DialogTitle>
        <DialogDescription>
            Edit your Education below
        </DialogDescription>
        <DialogBody>
            <Field>
                <Label>Institution Name</Label>
                <Input name="education-institution" value={institution} onChange={(e) => setInstitution(e.target.value)}/>
            </Field>
            <Field>
                <Label>Degree</Label>
                <Input name="education-degree" value={degree} onChange={(e) => setDegree(e.target.value)}/>
            </Field>
            <Field>
                <Label>Graduation Year</Label>
                <Input name="education-graduation-year" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)}/>
            </Field>
        </DialogBody>
        <DialogActions>
            {isEditMode && (
                <Button plain onClick={handleDeleteEducation}>
                    Delete Education
                </Button>
            )}
            <Button plain onClick={() => setIsEducationOpen(false)}>
                Cancel
            </Button>
            <Button onClick={handleSubmit}>Edit</Button>
        </DialogActions>
    </Dialog>
    )
}