import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Field, Label } from '@/components/fieldset'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { useState, useEffect } from 'react'

export default function LanguagesAddDialog({isLanguagesOpen, setIsLanguagesOpen, languageInfo, setLanguageInfo, selectedLanguage = null}) {
    
    const [language, setLanguage] = useState('');
    const [level, setLevel] = useState('Beginner');
    
    //Edit or add?
    const isEditMode = selectedLanguage !== null;

    //Function that deletes the selected language
    const handleDeleteLanguage = () => {
        setLanguageInfo(languageInfo.filter((lang) => lang.id !== selectedLanguage.id));
        setIsLanguagesOpen(false);
    }

    useEffect(() => {
        if (isEditMode) {
            setLanguage(selectedLanguage.language);
            setLevel(selectedLanguage.level);
        } 
        else {
            setLanguage('');
            setLevel('Beginner');
        }
    }, [isEditMode, selectedLanguage]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditMode) {
            //Edit
            setLanguageInfo((prev) =>
                prev.map((lang) =>
                    lang.id === selectedLanguage.id ? { ...lang, language, level } : lang
                )
            );
        } else {
            //Add
            setLanguageInfo([...languageInfo, {
                language: language,
                level: level,
                id: crypto.randomUUID()
            }]);
        }
        setIsLanguagesOpen(false);
    }
    
    return (
        <Dialog open={isLanguagesOpen} onClose={() => setIsLanguagesOpen(false)}>
            <DialogTitle>Languages</DialogTitle>
            <DialogDescription>
                Edit your languages below
            </DialogDescription>
            <DialogBody>
                <Field className="grid grid-cols-1 sm:grid-cols-2 items-center">
                    <Label>Language</Label>
                    <Input name="language" value={language} onChange={(e) => setLanguage(e.target.value)}/>
                        <Label>Level</Label>
                        <Select name="level" value={level} onChange={(e) => setLevel(e.target.value)}>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="native">Native</option>
                        </Select>
                </Field>
            </DialogBody>
            <DialogActions>
                {isEditMode && (
                    <Button plain onClick={handleDeleteLanguage}>
                        Delete Language
                    </Button>
                )}
                <Button plain onClick={() => setIsLanguagesOpen(false)}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit}>Edit</Button>
            </DialogActions>
        </Dialog>
    )
}