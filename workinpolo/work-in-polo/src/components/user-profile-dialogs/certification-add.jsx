import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Field, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { useState, useEffect } from 'react'

export default function CertificationAddDialog({isCertificationOpen, setIsCertificationOpen, certificationInfo, setCertificationInfo, selectedCertification = null}) {


    //States for the form fields
    const [certificationName, setCertificationName] = useState('');
    const [certificationIssuer, setCertificationIssuer] = useState('');
    const [certificationYear, setCertificationYear] = useState('');

    //Edit or add?
    const isEditMode = selectedCertification !== null;


    //Function that deletes the selected certification
    const handleDeleteCertification = () => {
        setCertificationInfo(certificationInfo.filter((cert) => cert.id !== selectedCertification.id));
        setIsCertificationOpen(false);
    }

    useEffect(() => {
        if (isEditMode) {
            setCertificationName(selectedCertification.certificationName);
            setCertificationIssuer(selectedCertification.certificationIssuer);
            setCertificationYear(selectedCertification.certificationYear);
        } else {
            setCertificationName('');
            setCertificationIssuer('');
            setCertificationYear('');
        }
    }, [isEditMode, selectedCertification]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditMode) {
            //Edit
            setCertificationInfo((prev) =>
                prev.map((cert) =>
                    cert.id === selectedCertification.id 
                        ? { ...cert, certificationName, certificationIssuer, certificationYear } 
                        : cert
                )
            );
        } else {
            //Add
            setCertificationInfo([...certificationInfo, {
                certificationName: certificationName,
                certificationIssuer: certificationIssuer,
                certificationYear: certificationYear,
                id: crypto.randomUUID()
            }]);
        }
        setIsCertificationOpen(false);
    }

    return (
        <Dialog open={isCertificationOpen} onClose={() => setIsCertificationOpen(false)}>
        <DialogTitle>Education</DialogTitle>
        <DialogDescription>
            Edit your Certification below
        </DialogDescription>
        <DialogBody>
            <Field>
                <Label>Certification Name</Label>
                <Input name="certification-name" value={certificationName} onChange={(e) => setCertificationName(e.target.value)}/>
            </Field>
            <Field>
                <Label>Certification Issuer</Label>
                <Input name="certification-issuer" value={certificationIssuer} onChange={(e) => setCertificationIssuer(e.target.value)}/>
            </Field>
            <Field>
                <Label>Certification Year</Label>
                <Input name="certification-date" value={certificationYear} onChange={(e) => setCertificationYear(e.target.value)}/>
            </Field>
        </DialogBody>
        <DialogActions>
            {isEditMode && (
                <Button plain onClick={handleDeleteCertification}>
                    Delete Certification
                </Button>
            )}
            <Button plain onClick={() => setIsCertificationOpen(false)}>
                Cancel
            </Button>
            <Button onClick={handleSubmit}>Edit</Button>
        </DialogActions>
    </Dialog>
    )
}