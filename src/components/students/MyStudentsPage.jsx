import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { User, Search, ClipboardList, Mail, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { AssignTestDialog } from '@/components/exam/AssignTestDialog';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export function MyStudentsPage() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [assignDialogOpen, setAssignDialogOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [resultDialogOpen, setResultDialogOpen] = useState(false);
    const [studentResults, setStudentResults] = useState([]);
    const [loadingResults, setLoadingResults] = useState(false);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch((import.meta.env.VITE_API_URL || 'http://localhost:5001/api') + '/teacher/students', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch students');
            }

            const data = await response.json();
            setStudents(data.students || []);
        } catch (error) {
            console.error('Error fetching students:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleViewResults = async (student) => {
        setSelectedStudent(student);
        setResultDialogOpen(true);
        setLoadingResults(true);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch((import.meta.env.VITE_API_URL || 'http://localhost:5001/api') + '/teacher/assignments', { // Fetch all assignments to filter
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) throw new Error('Failed to fetch assignments');

            const data = await response.json();
            // Filter assignments for this student
            const studentAssignments = (data.assignments || []).filter(
                a => a.student._id === student._id || a.student === student._id
            );

            setStudentResults(studentAssignments);
        } catch (error) {
            console.error('Error fetching results:', error);
        } finally {
            setLoadingResults(false);
        }
    };

    // Filter students based on search query
    const filteredStudents = students.filter(student =>
        student.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.email?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getStudentInitials = (name) => {
        if (!name) return 'S';
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <p className="text-muted-foreground">Loading students...</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-foreground">My Students</h1>
                <p className="text-muted-foreground mt-1">
                    Manage and assign exams to your students
                </p>
            </div>

            {/* Search Bar */}
            <Card>
                <CardContent className="pt-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search students by name or email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Students Stats */}
            <div className="grid gap-4 sm:grid-cols-3">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-2">
                            <User className="h-8 w-8 text-primary" />
                            <div>
                                <p className="text-2xl font-bold">{students.length}</p>
                                <p className="text-sm text-muted-foreground">Total Students</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-2">
                            <ClipboardList className="h-8 w-8 text-green-500" />
                            <div>
                                <p className="text-2xl font-bold">{filteredStudents.length}</p>
                                <p className="text-sm text-muted-foreground">
                                    {searchQuery ? 'Search Results' : 'Active Students'}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-2">
                            <Mail className="h-8 w-8 text-blue-500" />
                            <div>
                                <p className="text-2xl font-bold">0</p>
                                <p className="text-sm text-muted-foreground">Pending Assignments</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Students List */}
            <Card>
                <CardHeader>
                    <CardTitle>
                        All Students ({filteredStudents.length})
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {filteredStudents.length === 0 ? (
                        <div className="text-center py-12">
                            {searchQuery ? (
                                <>
                                    <Search className="mx-auto h-12 w-12 text-muted-foreground mb-3" />
                                    <p className="text-muted-foreground">No students found matching "{searchQuery}"</p>
                                </>
                            ) : (
                                <>
                                    <User className="mx-auto h-12 w-12 text-muted-foreground mb-3" />
                                    <p className="text-muted-foreground mb-2">No students assigned yet</p>
                                    <p className="text-xs text-muted-foreground">
                                        Contact your administrator to assign students to you
                                    </p>
                                </>
                            )}
                        </div>
                    ) : (
                        <div className="space-y-0 divide-y">
                            {filteredStudents.map((student) => (
                                <div
                                    key={student._id}
                                    className="flex items-center gap-4 py-4 hover:bg-accent/50 transition-colors px-2 -mx-2 rounded"
                                >
                                    {/* Student Avatar */}
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <span className="text-base font-semibold text-primary">
                                            {getStudentInitials(student.name)}
                                        </span>
                                    </div>

                                    {/* Student Info */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-base truncate">
                                            {student.name || 'Unnamed Student'}
                                        </h3>
                                        <div className="flex items-center gap-4 mt-1">
                                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                <Mail className="h-3 w-3" />
                                                <span className="truncate">{student.email}</span>
                                            </div>
                                            {student.createdAt && (
                                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                    <Calendar className="h-3 w-3" />
                                                    <span>Joined {format(new Date(student.createdAt), 'MMM d, yyyy')}</span>
                                                </div>
                                            )}
                                        </div>
                                        {student.phone && (
                                            <p className="text-xs text-muted-foreground mt-1">
                                                Phone: {student.phone}
                                            </p>
                                        )}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-2 flex-shrink-0">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => {
                                                setSelectedStudent(student);
                                                setAssignDialogOpen(true);
                                            }}
                                        >
                                            <ClipboardList className="h-3 w-3 mr-1" />
                                            Assign Test
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleViewResults(student)}
                                        >
                                            View Results
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Student Results Dialog */}
            <Dialog open={resultDialogOpen} onOpenChange={setResultDialogOpen}>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Student Results: {selectedStudent?.name}</DialogTitle>
                        <DialogDescription>
                            Exam history and performance overview.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="mt-4">
                        {loadingResults ? (
                            <div className="flex justify-center p-8">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                            </div>
                        ) : studentResults.length === 0 ? (
                            <div className="text-center p-8 text-muted-foreground">
                                <ClipboardList className="mx-auto h-12 w-12 mb-3 opacity-20" />
                                <p>No assignments or exam results found for this student.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {studentResults.map((result) => (
                                    <div key={result._id} className="flex items-center justify-between p-4 border rounded-lg bg-card hover:bg-accent/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${result.status === 'completed' ? 'bg-green-100 text-green-700' :
                                                    result.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                                                        'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {result.status === 'completed' ? <ClipboardList className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">{result.examTemplate?.title || 'Unknown Exam'}</h4>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <span>{result.examTemplate?.subject}</span>
                                                    <span>•</span>
                                                    <span>{format(new Date(result.createdAt), 'MMM d, yyyy')}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <div className="mb-1">
                                                <Badge variant={
                                                    result.status === 'completed' ? 'default' :
                                                        result.status === 'in-progress' ? 'secondary' : 'outline'
                                                }>
                                                    {result.status === 'completed' ? 'Completed' :
                                                        result.status === 'in-progress' ? 'In Progress' : 'Pending'}
                                                </Badge>
                                            </div>
                                            {result.status === 'completed' && (
                                                <div className="text-sm font-medium">
                                                    Score: <span className={result.score >= (result.totalMarks * 0.4) ? "text-green-600" : "text-red-600"}>
                                                        {result.score}/{result.totalMarks}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>

            {/* Assign Test Dialog */}
            {selectedStudent && (
                <AssignTestDialog
                    open={assignDialogOpen}
                    onOpenChange={setAssignDialogOpen}
                    studentId={selectedStudent._id}
                    studentName={selectedStudent.name}
                    onAssignComplete={fetchStudents}
                />
            )}
        </div>
    );
}
